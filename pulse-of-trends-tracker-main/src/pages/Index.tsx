
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CategoryCard from "@/components/dashboard/CategoryCard";
import TrendingCard from "@/components/dashboard/TrendingCard";
import TrendsPieChart from "@/components/dashboard/TrendsPieChart";
import TrendsAreaChart from "@/components/dashboard/TrendsAreaChart";
import { categoryStats, trendingItems, platformDistribution, recentTrendsData } from "@/data/mockData";

const Index = () => {
  return (
    <Layout title="Dashboard">
      <div className="space-y-8">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {categoryStats.map((stat) => (
            <CategoryCard key={stat.category} stat={stat} />
          ))}
        </div>

        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Trends</CardTitle>
              <CardDescription>
                Trend volume over the last 7 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <TrendsAreaChart data={recentTrendsData} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Platform Distribution</CardTitle>
              <CardDescription>
                Breakdown of trends by platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <TrendsPieChart data={platformDistribution} />
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Trending Now</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {trendingItems.slice(0, 6).map((trend) => (
              <TrendingCard key={trend.id} trend={trend} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
