import { TrendItem } from "@/types/trends";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

interface TrendingCardProps {
  trend: TrendItem;
}

const TrendingCard = ({ trend }: TrendingCardProps) => {
  const getCategoryColor = () => {
    switch (trend.category) {
      case "fashion":
        return "text-pink-500";
      case "gadgets":
        return "text-blue-500";
      case "decoration":
        return "text-purple-500";
      case "photography":
        return "text-teal-500";
      case "gifts":
        return "text-amber-500";
      default:
        return "text-primary";
    }
  };

  return (
    <Link to={`/trends/${trend.id}`}>
      <Card className="h-full overflow-hidden hover:border-primary/50 transition-colors">
        {trend.imageUrl && (
          <div className="relative h-48 w-full overflow-hidden">
            <img 
              src={trend.imageUrl} 
              alt={trend.title} 
              className="h-full w-full object-cover" 
            />
            <div className="absolute bottom-0 right-0 bg-black/60 text-white px-2 py-1 text-xs flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />
              +{trend.growth.toFixed(1)}%
            </div>
          </div>
        )}
        <CardHeader className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-lg">{trend.title}</CardTitle>
              <div className={`text-sm font-medium mt-1 ${getCategoryColor()}`}>
                {trend.category.charAt(0).toUpperCase() + trend.category.slice(1)}
              </div>
            </div>
            <div className="flex items-center text-sm font-medium text-muted-foreground">
              <span className="flex items-center gap-1">
                {trend.mentions.toLocaleString()} 
                <span className="text-xs">mentions</span>
              </span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <CardDescription className="line-clamp-2">{trend.description}</CardDescription>
          <div className="flex mt-4 gap-2 flex-wrap">
            {trend.tags?.slice(0, 3).map((tag) => (
              <span 
                key={tag} 
                className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default TrendingCard;
