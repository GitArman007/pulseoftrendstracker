
import { TechTool } from "@/types/trends";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, ThumbsUp } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { getSavedLikedGadgets } from "@/components/gadgets/gadgets-data";

interface TechToolCardProps {
  tool: TechTool;
}

const TechToolCard = ({ tool }: TechToolCardProps) => {
  const [likedTools, setLikedTools] = useState<string[]>(getSavedLikedGadgets());
  const isLiked = likedTools.includes(tool.id);

  const handleLike = () => {
    const updatedLikes = isLiked
      ? likedTools.filter(id => id !== tool.id)
      : [...likedTools, tool.id];
    
    setLikedTools(updatedLikes);
    localStorage.setItem("likedGadgets", JSON.stringify(updatedLikes));
    
    if (!isLiked) {
      toast.success(`You liked ${tool.name}`);
    }
  };

  return (
    <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
      <div className="h-40 overflow-hidden">
        <img 
          src={tool.imageUrl} 
          alt={tool.name}
          className="w-full h-full object-cover" 
        />
      </div>
      <CardHeader className="p-4 pb-0">
        <CardTitle className="text-lg">{tool.name}</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <CardDescription className="mb-4">{tool.usage}</CardDescription>
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <span>Source: {tool.source}</span>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {tool.tags.map(tag => (
            <span 
              key={tag}
              className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <button 
          className={`flex items-center gap-1 text-sm ${isLiked ? 'text-primary' : 'text-muted-foreground'}`}
          onClick={handleLike}
        >
          <ThumbsUp className="h-4 w-4" />
          <span>{tool.likes + (isLiked ? 1 : 0)}</span>
        </button>
        <a 
          href={tool.sourceUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 flex items-center gap-1"
        >
          <span>Visit</span>
          <ExternalLink className="h-3 w-3" />
        </a>
      </CardFooter>
    </Card>
  );
};

export default TechToolCard;
