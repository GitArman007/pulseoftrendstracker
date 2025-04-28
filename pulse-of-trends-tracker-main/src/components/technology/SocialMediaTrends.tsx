
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { techTools } from "@/data/mockData";
import { TechSubcategory } from "@/types/trends";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import TechToolCard from "./TechToolCard";

const TechnologySocialMediaTrends = () => {
  const [activeTab, setActiveTab] = useState<TechSubcategory>("ai_tools");

  const filteredTools = techTools.filter(tool => 
    activeTab === "all" ? true : tool.subcategory === activeTab
  );

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>Technology Social Media Trends</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as TechSubcategory)}
          className="w-full"
        >
          <TabsList className="w-full justify-start mb-6">
            <TabsTrigger value="ai_tools">AI Tools</TabsTrigger>
            <TabsTrigger value="productivity">Productivity</TabsTrigger>
            <TabsTrigger value="daily_life">Daily Life</TabsTrigger>
          </TabsList>
          
          <TabsContent value="ai_tools" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map(tool => (
                <TechToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="productivity" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map(tool => (
                <TechToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="daily_life" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map(tool => (
                <TechToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default TechnologySocialMediaTrends;
