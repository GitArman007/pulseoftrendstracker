
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendDetail } from "@/types/trends";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { ArrowUp, Instagram, Twitter, TrendingUp } from "lucide-react";
import { FaTiktok, FaPinterest, FaReddit } from "react-icons/fa";

interface TrendDetailsProps {
  trend: TrendDetail;
}

const TrendDetails = ({ trend }: TrendDetailsProps) => {
  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "instagram":
        return <Instagram className="h-4 w-4" />;
      case "twitter":
        return <Twitter className="h-4 w-4" />;
      case "tiktok":
        return <FaTiktok className="h-4 w-4" />;
      case "pinterest":
        return <FaPinterest className="h-4 w-4" />;
      case "reddit":
        return <FaReddit className="h-4 w-4" />;
      default:
        return <TrendingUp className="h-4 w-4" />;
    }
  };

  const getCategoryColor = () => {
    switch (trend.category) {
      case "fashion":
        return "bg-pink-100 text-pink-800";
      case "gadgets":
        return "bg-blue-100 text-blue-800";
      case "decoration":
        return "bg-purple-100 text-purple-800";
      case "photography":
        return "bg-teal-100 text-teal-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl">{trend.title}</CardTitle>
                  <Badge className={`mt-2 ${getCategoryColor()}`}>
                    {trend.category.charAt(0).toUpperCase() + trend.category.slice(1)}
                  </Badge>
                </div>
                <div className="flex items-center text-green-500 font-medium">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  {trend.growth.toFixed(1)}% growth
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">{trend.description}</CardDescription>
              <div className="flex flex-wrap gap-2 mb-6">
                {trend.hashtags.map((hashtag) => (
                  <Badge key={hashtag} variant="secondary">
                    {hashtag}
                  </Badge>
                ))}
              </div>

              <Tabs defaultValue="mentions">
                <TabsList>
                  <TabsTrigger value="mentions">Mentions</TabsTrigger>
                  <TabsTrigger value="engagement">Engagement</TabsTrigger>
                </TabsList>
                <TabsContent value="mentions" className="pt-4">
                  <ResponsiveContainer width="100%" height={300} className="trend-chart">
                    <LineChart data={trend.timeSeries.mentions}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="date"
                        tickFormatter={(date) => {
                          const d = new Date(date);
                          return `${d.getDate()}/${d.getMonth() + 1}`;
                        }}
                      />
                      <YAxis />
                      <Tooltip
                        formatter={(value) => [`${value.toLocaleString()} mentions`, "Mentions"]}
                        labelFormatter={(date) => new Date(date).toLocaleDateString()}
                      />
                      <Line
                        type="monotone"
                        dataKey="value"
                        name="Mentions"
                        stroke="#0EA5E9"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </TabsContent>
                <TabsContent value="engagement" className="pt-4">
                  <ResponsiveContainer width="100%" height={300} className="trend-chart">
                    <LineChart data={trend.timeSeries.engagement}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="date"
                        tickFormatter={(date) => {
                          const d = new Date(date);
                          return `${d.getDate()}/${d.getMonth() + 1}`;
                        }}
                      />
                      <YAxis />
                      <Tooltip
                        formatter={(value) => [`${value.toLocaleString()} engagements`, "Engagement"]}
                        labelFormatter={(date) => new Date(date).toLocaleDateString()}
                      />
                      <Line
                        type="monotone"
                        dataKey="value"
                        name="Engagement"
                        stroke="#8B5CF6"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="md:w-1/3 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Platform Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trend.platforms.map((platform) => (
                  <div key={platform.platform} className="flex items-center p-2 rounded-md border">
                    <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center mr-3">
                      {getPlatformIcon(platform.platform)}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">
                        {platform.platform.charAt(0).toUpperCase() + platform.platform.slice(1)}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {platform.mentions.toLocaleString()} mentions
                      </div>
                    </div>
                    <div className="text-green-500 flex items-center">
                      <ArrowUp className="h-3 w-3 mr-1" />
                      {platform.growth}%
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Top Influencers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trend.topInfluencers.map((influencer, index) => (
                  <div key={index} className="flex items-center p-2 rounded-md border">
                    <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center mr-3">
                      {getPlatformIcon(influencer.platform)}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{influencer.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {(influencer.followers / 1000000).toFixed(1)}M followers
                      </div>
                    </div>
                    <div className="text-primary font-medium">
                      {influencer.engagement}% eng.
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Related Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {trend.relatedTrends.map((relatedTrend, index) => (
                  <div key={index} className="p-2 rounded-md border flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{relatedTrend}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TrendDetails;
