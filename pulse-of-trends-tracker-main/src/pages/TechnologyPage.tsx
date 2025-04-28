
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import CategoryPage from "@/components/category/CategoryPage";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import TechnologyToolsSection from "@/components/technology/TechnologyToolsSection";
import { TechSubcategory } from "@/types/trends";

const TechnologyPage = () => {
  const [selectedSubcategory, setSelectedSubcategory] = useState<TechSubcategory>("all");

  return (
    <Layout title="Technology">
      <div className="space-y-8">
        <CategoryPage category="technology" title="Technology" />
        
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Featured Technology Tools</h2>
          
          <Card className="p-4">
            <Tabs 
              defaultValue="all" 
              className="w-full"
              onValueChange={(value) => setSelectedSubcategory(value as TechSubcategory)}
            >
              <TabsList className="w-full justify-start mb-4">
                <TabsTrigger value="all">All Tools</TabsTrigger>
                <TabsTrigger value="ai_tools">AI Tools</TabsTrigger>
                <TabsTrigger value="productivity">Productivity</TabsTrigger>
                <TabsTrigger value="daily_life">Daily Life</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
                <TechnologyToolsSection subcategory="all" />
              </TabsContent>
              
              <TabsContent value="ai_tools">
                <TechnologyToolsSection subcategory="ai_tools" />
              </TabsContent>
              
              <TabsContent value="productivity">
                <TechnologyToolsSection subcategory="productivity" />
              </TabsContent>
              
              <TabsContent value="daily_life">
                <TechnologyToolsSection subcategory="daily_life" />
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default TechnologyPage;
