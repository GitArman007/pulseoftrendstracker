
import { Button } from "@/components/ui/button";
import GadgetCard from "./GadgetCard";
import { useGadgets } from "./use-gadgets";
import { Link } from "react-router-dom";

const SocialMediaTrends = () => {
  const { gadgets, likedIds, toggleLike } = useGadgets();

  const handleToggleLike = (id: string, event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    toggleLike(id);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Social Media Trends</h2>
          <p className="text-muted-foreground mt-1">Popular tech gadgets trending on social platforms</p>
        </div>
        <Button variant="outline" size="sm">See More</Button>
      </div>
      
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {gadgets.map((gadget) => (
          <Link 
            key={gadget.id}
            to={`/categories/gadgets/products/${gadget.id}`}
            className="block h-full"
          >
            <GadgetCard 
              gadget={gadget}
              isLiked={likedIds.includes(gadget.id)}
              onLike={handleToggleLike}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaTrends;
