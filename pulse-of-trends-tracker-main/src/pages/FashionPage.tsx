
import SocialMediaTrends from "@/components/fashion/SocialMediaTrends";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart3, TrendingUp } from "lucide-react";
import { trendingItems, categoryStats } from "@/data/mockData";
import { TrendCategory } from "@/types/trends";
import TrendingCard from "@/components/dashboard/TrendingCard";


const FashionPage = () => {
  const category: TrendCategory = "fashion";
  const title = "Fashion";
  
  // Filter trends by category
  const filteredTrends = trendingItems.filter(
    trend => trend.category === category
  );
  
  // Get category stats
  const stats = categoryStats.find(stat => stat.category === category);
  
  // Sort trends by growth rate (highest first)
  const sortedTrends = [...filteredTrends].sort((a, b) => b.growth - a.growth);

  return (
    <Layout title={title}>
      <div className="space-y-10">
        {/* Category Overview */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card className="category-card overflow-hidden border-t-4" style={{ borderTopColor: stats?.color }}>
            <CardContent className="p-6">
              <div className="text-2xl font-bold mb-2">{title} Trends</div>
              <div className="flex items-center gap-2 text-lg">
                <TrendingUp className="h-5 w-5 text-green-500" />
                <span>{stats?.growth}% growth</span>
              </div>
              <div className="mt-2 text-muted-foreground">
                {stats?.count} trends tracked this month
              </div>
            </CardContent>
          </Card>
          
          <Card className="col-span-1 md:col-span-2">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2 flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                Top {title} Analytics
              </h3>
              <p className="text-muted-foreground mb-4">
                The most engaging {title.toLowerCase()} trends by platform performance
              </p>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Trend</TableHead>
                      <TableHead>Growth</TableHead>
                      <TableHead>Mentions</TableHead>
                      <TableHead>Sentiment</TableHead>
                      <TableHead>Top Platform</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sortedTrends.slice(0, 5).map((trend) => {
                      // Find top platform
                      const topPlatform = [...trend.platforms].sort((a, b) => 
                        b.engagement - a.engagement
                      )[0];
                      
                      return (
                        <TableRow key={trend.id}>
                          <TableCell className="font-medium">{trend.title}</TableCell>
                          <TableCell className="text-green-500">+{trend.growth.toFixed(1)}%</TableCell>
                          <TableCell>{trend.mentions.toLocaleString()}</TableCell>
                          <TableCell>{(trend.sentiment * 100).toFixed(0)}%</TableCell>
                          <TableCell>{topPlatform.platform}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trending Items */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Trending {title}</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {sortedTrends.map((trend) => (
              <TrendingCard key={trend.id} trend={trend} />
            ))}
            
            {sortedTrends.length === 0 && (
              <Card className="col-span-full p-6 text-center">
                <p className="text-muted-foreground">No {title.toLowerCase()} trends found</p>
              </Card>
            )}
          </div>
        </div>
        
        <SocialMediaTrends />
      </div>
    </Layout>
  );
};

export default FashionPage;
