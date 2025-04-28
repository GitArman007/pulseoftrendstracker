
import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface SocialMediaOutfit {
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

const initialOutfits: SocialMediaOutfit[] = [
  {
    id: "sm1",
    name: "Straight Fit Pants & Loose Shirt Combo",
    description: "Minimalist combination with straight fit pants and an oversized button-down shirt",
    imageUrl: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQttJP6Yd7jzhxXDBKOx91rDPd7dhby4rxEa3HGvgrpCJd7eXwx3IG7Ph6H9JRlaP7668SN6AW8gBh9pPIUzMubBNkCBrOG2jZuBozQ09SvANu3Bkd_UCi1",
    platform: "Pinterest",
    source: "Minimalist Styles",
    sourceUrl: "https://www.pinterest.com",
    likes: 324,
    tags: ["Minimalist", "Loose Fit", "Casual"]
  },
  {
    id: "sm2",
    name: "Vintage Tee & High Waist Jeans",
    description: "90s inspired outfit with a vintage graphic tee and high waist straight jeans",
    imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=500",
    platform: "Instagram",
    source: "RetroVibes",
    sourceUrl: "https://www.instagram.com",
    likes: 287,
    tags: ["Vintage", "90s", "Retro"]
  },
  {
    id: "sm3",
    name: "Monochrome Layered Look",
    description: "All-black layered outfit with different textures for depth",
    imageUrl: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?auto=format&fit=crop&q=80&w=500",
    platform: "TikTok",
    source: "StyleMinimal",
    sourceUrl: "https://www.tiktok.com",
    likes: 156,
    tags: ["Monochrome", "Layered", "Textured"]
  },
  {
    id: "sm4",
    name: "Oversized Blazer & Slim Pants",
    description: "Business casual look with an oversized blazer and slim fit pants",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=500",
    platform: "Instagram",
    source: "ModernProfessional",
    sourceUrl: "https://www.instagram.com",
    likes: 211,
    tags: ["Business Casual", "Oversized", "Professional"]
  },
  {
    id: "sm5",
    name: "Denim on Denim",
    description: "Modern take on the classic Canadian tuxedo with mixed denim tones",
    imageUrl: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&q=80&w=500",
    platform: "Pinterest",
    source: "DenimDaily",
    sourceUrl: "https://www.pinterest.com",
    likes: 178,
    tags: ["Denim", "Layered", "Double Denim"]
  },
  {
    id: "sm6",
    name: "Wide Leg Pants & Crop Top",
    description: "Summer chic with high waist wide leg pants and a fitted crop top",
    imageUrl: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=500",
    platform: "TikTok",
    source: "SummerStyle",
    sourceUrl: "https://www.tiktok.com",
    likes: 342,
    tags: ["Summer", "Wide Leg", "Crop Top"]
  }
];

// Get liked outfits from localStorage or set to empty array
const getSavedLikedOutfits = (): string[] => {
  const saved = localStorage.getItem("likedOutfits");
  return saved ? JSON.parse(saved) : [];
};

const SocialMediaTrends = () => {
  const [outfits, setOutfits] = useState<SocialMediaOutfit[]>([]);
  const [likedIds, setLikedIds] = useState<string[]>(getSavedLikedOutfits());

  // Initialize outfits from our mock data
  useEffect(() => {
    setOutfits([...initialOutfits].sort((a, b) => b.likes - a.likes));
  }, []);

  // Save liked outfits to localStorage when likedIds changes
  useEffect(() => {
    localStorage.setItem("likedOutfits", JSON.stringify(likedIds));
  }, [likedIds]);

  const toggleLike = (e: React.MouseEvent, id: string) => {
    e.preventDefault(); // Prevent link navigation
    e.stopPropagation(); // Prevent event bubbling
    
    setOutfits(current => 
      current.map(outfit => {
        if (outfit.id === id) {
          const isLiked = likedIds.includes(id);
          return {
            ...outfit,
            likes: isLiked ? outfit.likes - 1 : outfit.likes + 1
          };
        }
        return outfit;
      }).sort((a, b) => b.likes - a.likes)
    );
    
    setLikedIds(current => {
      if (current.includes(id)) {
        return current.filter(outfitId => outfitId !== id);
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
          <p className="text-muted-foreground mt-1">Popular outfit combinations from social platforms</p>
        </div>
        <Button variant="outline" size="sm">See More</Button>
      </div>
      
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {outfits.map((outfit) => (
          <Link 
            key={outfit.id}
            to={`/categories/fashion/products/${outfit.id}`}
            className="block h-full"
          >
            <Card className="hover:shadow-md transition-shadow h-full cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={outfit.imageUrl} 
                  alt={outfit.name} 
                  className="h-full w-full object-cover transition-transform hover:scale-105 duration-500"
                />
                <Badge className="absolute top-3 right-3 bg-black/70 hover:bg-black/80">
                  {outfit.platform}
                </Badge>
              </div>
              
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-lg">{outfit.name}</CardTitle>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">
                    From: {outfit.source}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-semibold">{outfit.likes}</span>
                    <Button 
                      variant="ghost"
                      size="sm"
                      className="p-0 h-auto hover:bg-transparent"
                      onClick={(e) => toggleLike(e, outfit.id)}
                    >
                      <Heart 
                        className={cn(
                          "h-5 w-5 transition-colors", 
                          likedIds.includes(outfit.id) 
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
                  {outfit.description}
                </p>
                
                <div className="flex gap-1 flex-wrap">
                  {outfit.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="p-4 pt-0">
                <Button className="w-full" size="sm">
                  View Product Details
                </Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaTrends;
