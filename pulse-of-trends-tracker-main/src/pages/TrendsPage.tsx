
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";
import TrendingCard from "@/components/dashboard/TrendingCard";
import CategoryFilter from "@/components/trends/CategoryFilter";
import { TrendCategory } from "@/types/trends";
import { trendingItems } from "@/data/mockData";

const TrendsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<TrendCategory>("all");

  const filteredTrends = selectedCategory === "all" 
    ? trendingItems 
    : trendingItems.filter(trend => trend.category === selectedCategory);

  return (
    <Layout title="Trends">
      <div className="space-y-6">
        <CategoryFilter 
          selectedCategory={selectedCategory} 
          onCategoryChange={setSelectedCategory} 
        />
        
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTrends.map((trend) => (
            <TrendingCard key={trend.id} trend={trend} />
          ))}
          
          {filteredTrends.length === 0 && (
            <Card className="col-span-full p-6 text-center">
              <p className="text-muted-foreground">No trends found for this category</p>
            </Card>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default TrendsPage;
