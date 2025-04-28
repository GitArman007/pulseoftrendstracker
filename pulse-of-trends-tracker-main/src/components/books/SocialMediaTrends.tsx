
import { Card, CardContent } from "@/components/ui/card";
import { trendingItems } from "@/data/mockData";
import { TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BooksSocialMediaTrends = () => {
  const filteredTrends = trendingItems.filter(
    trend => trend.category === "books"
  ).slice(0, 3);

  return (
    <Card className="mt-8">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <TrendingUp className="h-5 w-5 mr-2" />
          Books Social Media Trends
        </h3>
        
        <div className="space-y-4">
          {filteredTrends.map((trend) => (
            <Link 
              key={trend.id} 
              to={`/categories/books/products/${trend.id}`}
              className="block"
            >
              <div className="p-4 border rounded-lg hover:border-primary hover:shadow-sm transition-all cursor-pointer">
                <div className="font-medium text-base">{trend.title}</div>
                <div className="text-sm text-muted-foreground mt-1">{trend.description}</div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground mt-3">
                  <span className="text-green-500 font-medium">+{trend.growth.toFixed(1)}%</span>
                  <span>growth</span>
                  <span className="mx-2">•</span>
                  <span>{trend.mentions.toLocaleString()} mentions</span>
                </div>
                <div className="mt-3">
                  <Button size="sm" variant="outline">View Details</Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BooksSocialMediaTrends;
