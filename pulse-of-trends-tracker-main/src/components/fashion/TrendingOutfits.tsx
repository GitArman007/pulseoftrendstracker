import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ExternalLink, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface OutfitItem {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: string;
  discount?: string;
  source: string;
  sourceUrl: string;
  tags: string[];
}

const trendingOutfits: OutfitItem[] = [
  {
    id: "1",
    name: "Oversized Vintage Denim Jacket",
    description: "Distressed oversized denim jacket with authentic vintage wash",
    imageUrl: "https://images.unsplash.com/photo-1608228088998-57828365d486?auto=format&fit=crop&q=80&w=500",
    price: "$89.99",
    discount: "15% OFF",
    source: "Vintage Finds",
    sourceUrl: "https://www.example.com/vintage-denim",
    tags: ["Oversized", "Vintage", "Denim"]
  },
  {
    id: "2",
    name: "Platform Chunky Loafers",
    description: "Black leather platform loafers with chunky sole",
    imageUrl: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=500",
    price: "$125.00",
    source: "Modern Footwear",
    sourceUrl: "https://www.example.com/chunky-loafers",
    tags: ["Shoes", "Platform", "Loafers"]
  },
  {
    id: "3",
    name: "Minimalist Linen Shirt & Pants Set",
    description: "Breathable linen outfit perfect for summer days",
    imageUrl: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=500",
    price: "$149.99",
    source: "Eco Apparel",
    sourceUrl: "https://www.example.com/linen-set",
    tags: ["Linen", "Co-ord", "Minimalist"]
  },
  {
    id: "4",
    name: "Oversized Graphic T-Shirt",
    description: "Cotton oversized tee with vintage-inspired graphics",
    imageUrl: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=500",
    price: "$39.99",
    discount: "Buy 2 for $60",
    source: "Urban Styles",
    sourceUrl: "https://www.example.com/graphic-tees",
    tags: ["T-shirt", "Graphic", "Casual"]
  },
  {
    id: "5",
    name: "High-Waist Wide Leg Jeans",
    description: "Retro-inspired wide leg jeans with high waist design",
    imageUrl: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=500",
    price: "$79.99",
    source: "Denim Republic",
    sourceUrl: "https://www.example.com/wide-leg-jeans",
    tags: ["High-Waist", "Wide-Leg", "Denim"]
  },
  {
    id: "6",
    name: "Layered Oversized Outfit Combo",
    description: "Perfect autumn layered look with beige and earth tones",
    imageUrl: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=500",
    price: "$189.99",
    source: "Capsule Wardrobe",
    sourceUrl: "https://www.example.com/layered-outfit",
    tags: ["Layered", "Autumn", "Essentials"]
  }
];

const TrendingOutfits = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Shop The Trend</h2>
        <Button variant="outline" size="sm">View All</Button>
      </div>
      
      <Carousel className="w-full">
        <CarouselContent className="-ml-4">
          {trendingOutfits.map((outfit) => (
            <CarouselItem key={outfit.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={outfit.imageUrl} 
                    alt={outfit.name} 
                    className="h-full w-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                  {outfit.discount && (
                    <Badge className="absolute top-2 right-2 bg-red-500 hover:bg-red-600">
                      {outfit.discount}
                    </Badge>
                  )}
                  <Button variant="outline" size="icon" className="absolute top-2 left-2 bg-white/80 hover:bg-white rounded-full">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                
                <CardHeader className="p-4 pb-2">
                  <CardTitle className="text-lg">{outfit.name}</CardTitle>
                  <div className="flex mt-1 justify-between items-center">
                    <div className="font-semibold text-md">{outfit.price}</div>
                    <div className="text-sm text-muted-foreground">
                      From: {outfit.source}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-4 pt-0">
                  <CardDescription className="line-clamp-2">
                    {outfit.description}
                  </CardDescription>
                  
                  <div className="flex mt-3 gap-1 flex-wrap">
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-4" />
        <CarouselNext className="hidden md:flex -right-4" />
      </Carousel>
    </div>
  );
};

export default TrendingOutfits;
