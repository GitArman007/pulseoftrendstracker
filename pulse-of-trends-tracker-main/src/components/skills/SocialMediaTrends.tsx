
import { Card, CardContent } from "@/components/ui/card";
import { trendingItems } from "@/data/mockData";
import { TrendingUp } from "lucide-react";

const SkillsSocialMediaTrends = () => {
  const filteredTrends = trendingItems.filter(
    trend => trend.category === "skills"
  ).slice(0, 3);

  return (
    <Card className="mt-8">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <TrendingUp className="h-5 w-5 mr-2" />
          Skills Social Media Trends
        </h3>
        
        <div className="space-y-4">
          {filteredTrends.map((trend) => (
            <div key={trend.id} className="p-4 border rounded-lg">
              <div className="font-medium text-base">{trend.title}</div>
              <div className="text-sm text-muted-foreground mt-1">{trend.description}</div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-3">
                <span className="text-green-500 font-medium">+{trend.growth.toFixed(1)}%</span>
                <span>growth</span>
                <span className="mx-2">•</span>
                <span>{trend.mentions.toLocaleString()} mentions</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsSocialMediaTrends;
