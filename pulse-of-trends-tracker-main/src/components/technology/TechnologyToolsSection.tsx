
import { techTools } from "@/data/mockData";
import { TechSubcategory } from "@/types/trends";
import TechToolCard from "./TechToolCard";

interface TechnologyToolsSectionProps {
  subcategory: TechSubcategory;
}

const TechnologyToolsSection = ({ subcategory }: TechnologyToolsSectionProps) => {
  // Filter tools by subcategory
  const filteredTools = subcategory === "all" 
    ? techTools 
    : techTools.filter(tool => tool.subcategory === subcategory);

  return (
    <div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredTools.map(tool => (
          <TechToolCard key={tool.id} tool={tool} />
        ))}
        
        {filteredTools.length === 0 && (
          <div className="col-span-full text-center py-10">
            <p className="text-muted-foreground">No tools found in this category</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TechnologyToolsSection;
