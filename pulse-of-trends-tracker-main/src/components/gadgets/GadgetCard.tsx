
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

export interface GadgetItem {
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

interface GadgetCardProps {
  gadget: GadgetItem;
  isLiked: boolean;
  onLike: (id: string, event?: React.MouseEvent) => void;
}

const GadgetCard = ({ gadget, isLiked, onLike }: GadgetCardProps) => {
  const handleLikeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onLike(gadget.id, e);
  };

  return (
    <Card className="hover:shadow-md transition-shadow h-full cursor-pointer">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={gadget.imageUrl} 
          alt={gadget.name} 
          className="h-full w-full object-cover transition-transform hover:scale-105 duration-500"
        />
        <Badge className="absolute top-3 right-3 bg-black/70 hover:bg-black/80">
          {gadget.platform}
        </Badge>
      </div>
      
      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-lg">{gadget.name}</CardTitle>
        <div className="flex justify-between items-center">
          <div className="text-sm text-muted-foreground">
            From: {gadget.source}
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm font-semibold">{gadget.likes}</span>
            <Button 
              variant="ghost"
              size="sm"
              className="p-0 h-auto hover:bg-transparent"
              onClick={handleLikeClick}
            >
              <Heart 
                className={cn(
                  "h-5 w-5 transition-colors", 
                  isLiked 
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
          {gadget.description}
        </p>
        
        <div className="flex gap-1 flex-wrap">
          {gadget.tags.map((tag) => (
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
  );
};

export default GadgetCard;
