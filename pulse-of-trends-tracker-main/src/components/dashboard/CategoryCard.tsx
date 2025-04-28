
import { Card, CardContent } from "@/components/ui/card";
import { CategoryStat } from "@/types/trends";
import { TrendingUp, Shirt, Smartphone, Lamp, Camera } from "lucide-react";

interface CategoryCardProps {
  stat: CategoryStat;
}

const CategoryCard = ({ stat }: CategoryCardProps) => {
  const getIcon = () => {
    switch (stat.icon) {
      case "shirt":
        return <Shirt className="h-5 w-5" />;
      case "smartphone":
        return <Smartphone className="h-5 w-5" />;
      case "lamp":
        return <Lamp className="h-5 w-5" />;
      case "camera":
        return <Camera className="h-5 w-5" />;
      default:
        return <TrendingUp className="h-5 w-5" />;
    }
  };

  return (
    <Card className="category-card overflow-hidden border-t-4" style={{ borderTopColor: stat.color }}>
      <CardContent className="p-6 flex items-center justify-between">
        <div>
          <div className="text-sm font-medium text-muted-foreground mb-1">
            {stat.category.charAt(0).toUpperCase() + stat.category.slice(1)}
          </div>
          <div className="text-2xl font-bold">{stat.count}</div>
          <div className="flex items-center mt-1 text-sm font-medium text-green-500">
            <TrendingUp className="h-3 w-3 mr-1" />
            {stat.growth}% growth
          </div>
        </div>
        <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${stat.color}20` }}>
          <div className="text-[#333]">{getIcon()}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
