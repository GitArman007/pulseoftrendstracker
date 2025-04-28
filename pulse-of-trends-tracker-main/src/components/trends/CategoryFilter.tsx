import { Button } from "@/components/ui/button";
import { TrendCategory } from "@/types/trends";
import { Shirt, Smartphone, Lamp, Camera, LayoutGrid, Cpu, Lightbulb, BookOpen, Gift } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  selectedCategory: TrendCategory;
  onCategoryChange: (category: TrendCategory) => void;
}

const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  const categories: { value: TrendCategory; label: string; icon: React.ReactNode }[] = [
    { value: "all", label: "All", icon: <LayoutGrid className="h-4 w-4 mr-2" /> },
    { value: "fashion", label: "Fashion", icon: <Shirt className="h-4 w-4 mr-2" /> },
    { value: "gadgets", label: "Gadgets", icon: <Smartphone className="h-4 w-4 mr-2" /> },
    { value: "decoration", label: "Decoration", icon: <Lamp className="h-4 w-4 mr-2" /> },
    { value: "photography", label: "Photography", icon: <Camera className="h-4 w-4 mr-2" /> },
    { value: "technology", label: "Technology", icon: <Cpu className="h-4 w-4 mr-2" /> },
    { value: "skills", label: "Skills", icon: <Lightbulb className="h-4 w-4 mr-2" /> },
    { value: "books", label: "Books", icon: <BookOpen className="h-4 w-4 mr-2" /> },
    { value: "gifts", label: "Gifts", icon: <Gift className="h-4 w-4 mr-2" /> }
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Button
          key={category.value}
          variant={selectedCategory === category.value ? "default" : "outline"}
          className={cn(
            "rounded-full",
            selectedCategory === category.value && 
            (category.value === "fashion" 
              ? "bg-pink-500 hover:bg-pink-600" 
              : category.value === "gadgets" 
                ? "bg-blue-500 hover:bg-blue-600"
                : category.value === "decoration"
                  ? "bg-purple-500 hover:bg-purple-600"
                  : category.value === "photography"
                    ? "bg-teal-500 hover:bg-teal-600"
                    : category.value === "technology"
                      ? "bg-orange-500 hover:bg-orange-600"
                      : category.value === "skills"
                        ? "bg-emerald-500 hover:bg-emerald-600"
                        : category.value === "books"
                          ? "bg-indigo-500 hover:bg-indigo-600"
                          : category.value === "gifts"
                            ? "bg-amber-500 hover:bg-amber-600"
                            : "")
          )}
          onClick={() => onCategoryChange(category.value)}
        >
          {category.icon}
          {category.label}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
