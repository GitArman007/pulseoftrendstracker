import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import TrendingCard from "@/components/dashboard/TrendingCard";
import { TrendCategory } from "@/types/trends";
import { trendingItems, categoryStats } from "@/data/mockData";
import { BarChart3, TrendingUp, Image } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import FashionSocialMediaTrends from "@/components/fashion/SocialMediaTrends";
import GadgetsSocialMediaTrends from "@/components/gadgets/SocialMediaTrends";
import DecorationSocialMediaTrends from "@/components/decoration/SocialMediaTrends";
import PhotographySocialMediaTrends from "@/components/photography/SocialMediaTrends";
import TechnologySocialMediaTrends from "@/components/technology/SocialMediaTrends";
import SkillsSocialMediaTrends from "@/components/skills/SocialMediaTrends";
import BooksSocialMediaTrends from "@/components/books/SocialMediaTrends";
import GiftsSocialMediaTrends from "@/components/gifts/SocialMediaTrends";

interface CategoryPageProps {
  category: TrendCategory;
  title: string;
}

const CategoryPage = ({ category, title }: CategoryPageProps) => {
  // Filter trends by category
  const filteredTrends = trendingItems.filter(
    trend => trend.category === category
  );
  
  // Get category stats
  const stats = categoryStats.find(stat => stat.category === category);
  
  // Sort trends by growth rate (highest first)
  const sortedTrends = [...filteredTrends].sort((a, b) => b.growth - a.growth);
  
  // Category default images
  const getCategoryDefaultImage = () => {
    switch(category) {
      case 'fashion':
        return "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=500";
      case 'gadgets':
        return "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=500";
      case 'decoration':
        return "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=500";
      case 'photography':
        return "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=500";
      case 'technology':
        return "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=500&fit=crop&ixlib=rb-4.0.3";
      case 'skills':
        return "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=500&fit=crop&ixlib=rb-4.0.3";
      case 'books':
        return "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80&w=500&fit=crop&ixlib=rb-4.0.3";
      default:
        return "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=500";
    }
  };

  // Render appropriate social media trends component based on category
  const renderSocialMediaTrends = () => {
    switch (category) {
      case 'fashion':
        return <FashionSocialMediaTrends />;
      case 'gadgets':
        return <GadgetsSocialMediaTrends />;
      case 'decoration':
        return <DecorationSocialMediaTrends />;
      case 'photography':
        return <PhotographySocialMediaTrends />;
      case 'technology':
        return <TechnologySocialMediaTrends />;
      case 'skills':
        return <SkillsSocialMediaTrends />;
      case 'books':
        return <BooksSocialMediaTrends />;
      case 'gifts':
        return <GiftsSocialMediaTrends />;
      default:
        return <FashionSocialMediaTrends />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Category Overview */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card className="category-card overflow-hidden border-t-4" style={{ borderTopColor: stats?.color }}>
          <div className="h-40 bg-gray-100 relative overflow-hidden">
            <img 
              src={getCategoryDefaultImage()} 
              alt={`${title} category`} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <div className="text-2xl font-bold">{title} Trends</div>
            </div>
          </div>
          <CardContent className="p-6">
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
              <div className="flex flex-col items-center justify-center py-10">
                <Image className="h-16 w-16 text-gray-400 mb-4" />
                <p className="text-muted-foreground">No {title.toLowerCase()} trends found</p>
                <p className="text-sm text-muted-foreground mt-1">Check back later for updates</p>
              </div>
            </Card>
          )}
        </div>
      </div>
      
      {/* Category-specific Social Media Trends */}
      {renderSocialMediaTrends()}
    </div>
  );
};

export default CategoryPage;
