
import { useState, useEffect } from "react";
import { SocialMediaGadget, initialGadgets, getSavedLikedGadgets } from "./gadgets-data";

export const useGadgets = () => {
  const [gadgets, setGadgets] = useState<SocialMediaGadget[]>([]);
  const [likedIds, setLikedIds] = useState<string[]>(getSavedLikedGadgets());

  // Initialize gadgets from our mock data
  useEffect(() => {
    setGadgets([...initialGadgets].sort((a, b) => b.likes - a.likes));
  }, []);

  // Save liked gadgets to localStorage when likedIds changes
  useEffect(() => {
    localStorage.setItem("likedGadgets", JSON.stringify(likedIds));
  }, [likedIds]);

  const toggleLike = (id: string) => {
    setGadgets(current => 
      current.map(gadget => {
        if (gadget.id === id) {
          const isLiked = likedIds.includes(id);
          return {
            ...gadget,
            likes: isLiked ? gadget.likes - 1 : gadget.likes + 1
          };
        }
        return gadget;
      }).sort((a, b) => b.likes - a.likes)
    );
    
    setLikedIds(current => {
      if (current.includes(id)) {
        return current.filter(gadgetId => gadgetId !== id);
      } else {
        return [...current, id];
      }
    });
  };

  return {
    gadgets,
    likedIds,
    toggleLike
  };
};
