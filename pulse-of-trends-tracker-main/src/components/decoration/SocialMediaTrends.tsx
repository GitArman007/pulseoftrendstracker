import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface SocialMediaDecoration {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  platform: string;
  source: string;
  sourceUrl: string;
  likes: number;
  tags: string[];
}

const initialDecorations: SocialMediaDecoration[] = [
  {
    id: "d1",
    name: "Minimalist Living Room Setup",
    description: "Clean lines and neutral tones create a peaceful, uncluttered living space",
    imageUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=500",
    platform: "Pinterest",
    source: "MinimalistSpaces",
    sourceUrl: "https://www.pinterest.com",
    likes: 412,
    tags: ["Minimalist", "Living Room", "Neutral"]
  },
  {
    id: "d2",
    name: "Botanical Bedroom Decor",
    description: "Indoor plants and natural materials transform a bedroom into a serene retreat",
    imageUrl: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=500",
    platform: "Instagram",
    source: "BotanicalHome",
    sourceUrl: "https://www.instagram.com",
    likes: 356,
    tags: ["Plants", "Bedroom", "Natural"]
  },
  {
    id: "d3",
    name: "Vintage-Inspired Reading Nook",
    description: "Cozy corner featuring vintage furniture and warm lighting for perfect reading ambience",
    imageUrl: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=500",
    platform: "TikTok",
    source: "CozyCorners",
    sourceUrl: "https://www.tiktok.com",
    likes: 289,
    tags: ["Vintage", "Reading Nook", "Cozy"]
  },
  {
    id: "d4",
    name: "Modern Kitchen Organization",
    description: "Sleek storage solutions and minimalist organization for a clutter-free kitchen",
    imageUrl: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=500",
    platform: "YouTube",
    source: "OrganizeWithMe",
    sourceUrl: "https://www.youtube.com",
    likes: 247,
    tags: ["Kitchen", "Organization", "Modern"]
  },
  {
    id: "d5",
    name: "Bohemian Outdoor Space",
    description: "Vibrant textiles and eclectic decor transform a patio into a bohemian retreat",
    imageUrl: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&q=80&w=500",
    platform: "Instagram",
    source: "BohoLiving",
    sourceUrl: "https://www.instagram.com",
    likes: 325,
    tags: ["Bohemian", "Outdoor", "Patio"]
  },
  {
    id: "d6",
    name: "Scandinavian Home Office",
    description: "Functional and aesthetically pleasing workspace inspired by Nordic design principles",
    imageUrl: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&q=80&w=500",
    platform: "Pinterest",
    source: "ScandinavianDesign",
    sourceUrl: "https://www.pinterest.com",
    likes: 278,
    tags: ["Scandinavian", "Home Office", "Functional"]
  }
];

// Get liked items from localStorage or set to empty array
const getSavedLikedItems = (): string[] => {
  const saved = localStorage.getItem("likedDecorations");
  return saved ? JSON.parse(saved) : [];
};

const SocialMediaTrends = () => {
  const [decorations, setDecorations] = useState<SocialMediaDecoration[]>([]);
  const [likedIds, setLikedIds] = useState<string[]>(getSavedLikedItems());

  // Initialize decorations from our mock data
  useEffect(() => {
    setDecorations([...initialDecorations].sort((a, b) => b.likes - a.likes));
  }, []);

  // Save liked decorations to localStorage when likedIds changes
  useEffect(() => {
    localStorage.setItem("likedDecorations", JSON.stringify(likedIds));
  }, [likedIds]);

  const toggleLike = (id: string) => {
    setDecorations(current => 
      current.map(decoration => {
        if (decoration.id === id) {
          const isLiked = likedIds.includes(id);
          return {
            ...decoration,
            likes: isLiked ? decoration.likes - 1 : decoration.likes + 1
          };
        }
        return decoration;
      }).sort((a, b) => b.likes - a.likes)
    );
    
    setLikedIds(current => {
      if (current.includes(id)) {
        return current.filter(decorationId => decorationId !== id);
      } else {
        return [...current, id];
      }
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Social Media Trends</h2>
          <p className="text-muted-foreground mt-1">Popular home decoration ideas from social platforms</p>
        </div>
        <Button variant="outline" size="sm">See More</Button>
      </div>
      
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {decorations.map((decoration) => (
          <Card key={decoration.id} className="hover:shadow-md transition-shadow">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={decoration.imageUrl} 
                alt={decoration.name} 
                className="h-full w-full object-cover transition-transform hover:scale-105 duration-500"
              />
              <Badge className="absolute top-3 right-3 bg-black/70 hover:bg-black/80">
                {decoration.platform}
              </Badge>
            </div>
            
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-lg">{decoration.name}</CardTitle>
              <div className="flex justify-between items-center">
                <div className="text-sm text-muted-foreground">
                  From: {decoration.source}
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-semibold">{decoration.likes}</span>
                  <Button 
                    variant="ghost"
                    size="sm"
                    className="p-0 h-auto hover:bg-transparent"
                    onClick={() => toggleLike(decoration.id)}
                  >
                    <Heart 
                      className={cn(
                        "h-5 w-5 transition-colors", 
                        likedIds.includes(decoration.id) 
                          ? "fill-red-500 text-red-500" 
                          : "text-slate-400"
                      )} 
                    />
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-4 pt-0">
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                {decoration.description}
              </p>
              
              <div className="flex gap-1 flex-wrap">
                {decoration.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            
            <CardFooter className="p-4 pt-0">
              <div className="flex gap-2 w-full">
                <Button className="flex-1" size="sm" variant="outline" asChild>
                  <a href={decoration.sourceUrl} target="_blank" rel="noopener noreferrer">
                    View on {decoration.platform}
                  </a>
                </Button>
                <Button className="flex-1" size="sm" variant="outline" asChild>
                  <Link to={`/categories/decoration/products/${decoration.id}`}>
                    View Product Details
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaTrends;
