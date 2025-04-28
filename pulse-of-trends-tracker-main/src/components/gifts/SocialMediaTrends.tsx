import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface GiftTrend {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  platform: string;
  likes: number;
  tags: string[];
  sourceUrl: string;
}

const initialGifts: GiftTrend[] = [
  {
    id: "g1",
    name: "Personalized Star Map",
    description: "Custom star maps showing the night sky from any location and date, perfect for commemorating special moments.",
    imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=500",
    platform: "Instagram",
    likes: 1250,
    tags: ["Personalized", "Anniversary", "Night Sky"],
    sourceUrl: "https://example.com/star-map"
  },
  {
    id: "g2",
    name: "Custom Pet Portrait",
    description: "AI-enhanced digital art portraits of pets, transformed into renaissance-style masterpieces.",
    imageUrl: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=500",
    platform: "Pinterest",
    likes: 890,
    tags: ["Pet Gifts", "Digital Art", "Custom"],
    sourceUrl: "https://example.com/pet-portrait"
  },
  {
    id: "g3",
    name: "Memory Book Scanner",
    description: "Digital scanner that converts old photos and memorabilia into interactive digital memory books.",
    imageUrl: "https://images.unsplash.com/photo-1542813813-1533434bba17?auto=format&fit=crop&q=80&w=500",
    platform: "TikTok",
    likes: 2100,
    tags: ["Tech Gifts", "Memories", "Digital"],
    sourceUrl: "https://example.com/memory-scanner"
  }
];

const SocialMediaTrends = () => {
  const [gifts, setGifts] = useState(initialGifts);
  const [likedIds, setLikedIds] = useState<string[]>([]);

  const handleToggleLike = (id: string, event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    setLikedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Social Media Trends</h2>
          <p className="text-muted-foreground mt-1">Popular gift ideas trending on social platforms</p>
        </div>
        <Button variant="outline" size="sm">See More</Button>
      </div>
      
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {gifts.map((gift) => (
          <Link 
            key={gift.id}
            to={`/categories/gifts/products/${gift.id}`}
            className="block h-full"
          >
            <Card className="hover:shadow-md transition-shadow h-full cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={gift.imageUrl} 
                  alt={gift.name} 
                  className="h-full w-full object-cover transition-transform hover:scale-105 duration-500"
                />
                <Badge className="absolute top-3 right-3 bg-black/70 hover:bg-black/80">
                  {gift.platform}
                </Badge>
              </div>
              
              <CardContent className="p-4">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="font-semibold">{gift.name}</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 shrink-0"
                    onClick={(e) => handleToggleLike(gift.id, e)}
                  >
                    <Heart 
                      className={cn(
                        "h-4 w-4",
                        likedIds.includes(gift.id) ? "fill-current text-red-500" : "text-muted-foreground"
                      )} 
                    />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                  {gift.description}
                </p>
                <div className="flex gap-2 mt-3 flex-wrap">
                  {gift.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="p-4 pt-0">
                <div className="flex gap-2 w-full">
                  <Button className="flex-1" size="sm" variant="outline" asChild>
                    <a href={gift.sourceUrl} target="_blank" rel="noopener noreferrer">
                      View on {gift.platform}
                    </a>
                  </Button>
                  <Button className="flex-1" size="sm" variant="outline">
                    View Product Details
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaTrends; 