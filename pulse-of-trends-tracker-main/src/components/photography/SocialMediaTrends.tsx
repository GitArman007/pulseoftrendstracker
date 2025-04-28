import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface SocialMediaPhotography {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  platform: string;
  source: string;
  sourceUrl: string;
  likes: number;
  tags: string[];
}

const initialPhotos: SocialMediaPhotography[] = [
  {
    id: "p1",
    name: "Film Photography Resurgence",
    description: "Classic film cameras and techniques are making a strong comeback among enthusiasts",
    imageUrl: "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?auto=format&fit=crop&q=80&w=500",
    platform: "Instagram",
    source: "FilmIsNotDead",
    sourceUrl: "https://www.instagram.com",
    likes: 478,
    tags: ["Film", "Analog", "35mm"]
  },
  {
    id: "p2",
    name: "Smartphone Astrophotography",
    description: "Advanced night mode features let smartphone users capture stunning night sky images",
    imageUrl: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=500",
    platform: "TikTok",
    source: "NightSkyCaptures",
    sourceUrl: "https://www.tiktok.com",
    likes: 392,
    tags: ["Astrophotography", "Smartphone", "Night Sky"]
  },
  {
    id: "p3",
    name: "Minimalist Compositions",
    description: "Clean, simple compositions with negative space creating powerful visual impact",
    imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhUPDxIVFRUVFQ8VFRUVFRUVFRUVFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOAA4AMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAABAgADBAUHBgj/xABDEAACAgEBAwMPCQcFAAAAAAAAAQIDEQQFEiEUMdEGBxMiMkFRUlNhc4GRkqEjJEJxcrGys+EIFRczNJPSVIKiwsP/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A83GSIggTAQkwBIsuTKUWRAcVkJkCBQMDIAhAECBSIECBIggAJCADAskOKwKpIRlrEaArIMwYARkwNggC4A0NgDAgQDAAOCBwBBokSCBMEwEIAwMgBAgSIIEQUTAQIQgQIggABGBhAwFFaGAAjQGh2BgJgA4GgFFYzQGgAEhAGSCkBDAQIAgRBIQAoIAoAoIEEAkIQCEIQCEIQCCjAYCkCwABgCwAAAWABWBhAwIFIgUgIgkCBAkIBAohACECCgJgJAgAJCAQhAgAhAgAhCAADGAwEIxmABWLgcVoBWKx2K0AUECCASEQQIgkIBAgCAUQmAgRBIQCERAoCEIiAQgSNAAgcEwApMBwABWBocUBWhRgMBWKx2KwCEUZAQIEMBCECBC7R6d22QqTw5zhBN8ycmll+0pR0Nhf1On9NR+ZED62fWv1EYqbvpw/NPP3Fa621/l6vZPoPVIyzRHzTmvY2UqIHmX8Nb/L1eyfQT+Guo8vV7J9B6gojqsDy5dbTUeWq9k+gn8M9T5an/n0HqirGUAPI9b1u9RVXO2VtTUISm0t/LUVlpcD45H6A6oYfNNR6G78DPAYoCbpMDhwAm6DBbgmAKWBlriI4gVsDHaEwArAxmKwFYrGYrQEQSBQEQyAEAkZCAE3bC/qdP6aj8cTCjfsL+po9NR+OIHvVE/kY44pztef9zx940IlGzqFCmEVju7svwtSUcv2I301gSunJqhpx04wS3s8XhYTk84b5kvAmPymPgn/AG7P8QEenK5UmhamOHLjhNJ9rJPLxhYxl86ElqY+Cf8Abs/xA5XVHDGj1PoLvwM/PcUfobqjvjLSapLOVRc+MZR4OMvGSzzM/PlcQCkMojKIyiAm6TBZuk3QKZIRovcStxAplEraNDRTJAVsRjyQjAAozFYAQyFQyAIUAgDEIQCG/Yj+c0emo/MiYUbdjP5xR6ej8yIHt2l2pTnkzn8pDftlHEuELLpRg84w+MJcOfgfS004PzN14L5PXbmWo9iisJvEkrrnmS7+G3z+A7v7PuqmtdOjlFkYdhsmqeeuxppPKfctb2crD5wPfdX9H7Uvy5nB2VLee8s8I1yUZqMd3KzhyS4v6ju7Qs3VGTUmlJ53Yym1mMlndis98+fupU63U7L0nhOS0lqbSxw7nzIDvv6f26vurPhNZbb2WWXJfK3RaeFmPZLHHsajupYjGGXJvO/njhp/a1Wp1ymlPClB8a5qTUVDLUGt58z7xw7NJTOU5WdmkpSylyW/tVxbjlR48XnPACtWyns22VndclvT4Y5pWrm9R4vTE9u1tVcNDqa6YzjCGmsit+FkO9Y+HZOL5/PznjFEAAoDKBduh3QKNwm6aN0DiBmcSqUTW4lUogZJIpkjXJGawCllbLJFbARisdiMAIYVDoAoIAoCEIECGvY7+cUemo/MiYzVsl/OKPTUfmRA4XVvLe1ttu9l2uNrXPuOazuZ76SxjzNHpv7O1ejlK5uD5bBNqTk8PTz3U1COcZUo8W1ntlxPMuryvd2jqo4SStlhLmUcLd+GDt9aHqrp2ZrJW6ptU2UzrlJRcnGSanB4XHni48PGWeCyg/TmpgpOCkk1mT4rP0WVQqhLmjD3UeU2dXGt27e9JsePJqEpq3VWrtllfRS4RbWcLLb5+GD1DQaXsVNdTmpuMIRcm+MnFJOT875/WBdZXFKUVFYcqcrCxxlHvFFlcePaV5y/oRLbJLtuK7vT/V3URbovi1ut97tkvUBzOqGtR0t2FFN6bVZ3Uo5xu4zj6zxilcD2Tqhk+S2KWE+S6rKTTxxh30ePULgAcDJDboQEwTAwUgK3EqnE0SK5gY7ImW2JusRltQGKaKpGixFMgK2Ix2JIAIZCIZMBkwihyASAIAcl2z7VG6mUnhK2ltvmSU4tt+bBQZtdHMJfZf3Ac7qr18NTrNRfW24Ttm4NprMc4i8PiuC751etlsWGu2jp9PbHfrcpTnHvOMIuTUuKwnhL1pd8+UR7H+zrsZyvv1kk1GuEIQ8EnY5b3qSj8QPbatj6eFSohRVGqPFVqEVBPwqOMZ85W9haX/T1e5HoOhKWCidgFa2fRGuVSqgoS7qCilF83Ol9SMMtgaP/AE1XumyVxVK0Dlbb0NNOk1PYa4wbpsT3VjOE8Z9p5FSeu9Uk/mt/orPuPIqWBeAIAABjAAVlcixlcgKLEZrDVMzWAZLDPNGqwzzApkJIeRUwAFACgHRBRsgEIocgEs0lalZXGSTi7K1JPimnJJp+ZoqyX6H+bX6Sr8SA4nVfsbkWrspimq8uVTfHMG+CTfPh5j/tPfus9tOENj6WMst/OvBw+cW4R5x15VHsGieHvdl2ik+GN1dgbT9bWPX4T6DrOXuzZ255K62HvYs/7sD1K7bdfgl8OkxWbch4svh0nKtraM04sDsS25DxZfDpK3tyHiy+HSceUWUtAb9t7XhLT3QUZZddiXN4Dzao+v2mvkrPsS+4+OqYGogIjYAgBgMCuQkiyRXICiZmtNU0ZrAMthmsNFhmsYFUitjzZW2ABkAgDETAgoBkQCCAS/Q/za/SV/iRnRfo/wCZD7cPxID6HrvQjPSUTXdVanURfmV0Iv8A8kdvrMXJbOawk+UXZfjdrDi/u9RV1Q6FavSaiqKzN71kHw7qD3or1qOPWcXrN7YqVdmktsjGbsU6oyeHPejiSj4XmK4c/ED1K69GV2huijLLzAXzsRmnagyXAzzYFW1LPkbOP0JHx1R9VtP+TZ9lnytIGmBaiqBYkARWFiyADK5DsrkBVYZLTTYzLawMthmsNFhnmBTMrbGmyuTAo5evA/gTl8fA/gc/JAOhy9eBk5evF+JzwoDocvXik5evF+JgyEDfy9eL8SzT67to4XHejj688DnI06R9svrQHoNernCmcs4bjOKx3u1a5zynT6CyTSjDe5uHHj7D7zaepxQ+PPlDdRWnSUptZ4pID7XYW0LbdPXK6ChPdxKKzhY4LGePMl4TWrTGrAwn5gN0rfOY7LSxvgYbrAK9s6iSosaw+1fOfCQ2vavow+PSfXbYtzTNeZnwjYHShtu7xK/bLpLf39d5Ov2yOQpDKQHV/f1vk6/bIn78t8nD2yOW5iuYHUltyzycPefQVy25Z5OPvPoObviuQG6W2bPJx959BTPa0/Jx959BjlMqcwNctqS8mve/QontKXiL3v0KHIrbAtlr34i979Ct65+L8f0KpCtAQJMBwAEhkgpDKIC4GSG3RlABEjRpudFagX0LiB0NoPtFl987XUu8V485xNRxSO7sGGIgfQxkxoNiVoeDwBdK2SXMY7LXk0zk+8YrAMu1Lfk2vMfF2I+w1/GDR8rdWBmwMhnEGABkVjMRgQRsLYkgAythkI2AGVyGbEkAGAgMgf/Z",
    platform: "Pinterest",
    source: "MinimalistLens",
    sourceUrl: "https://www.pinterest.com",
    likes: 315,
    tags: ["Minimalist", "Composition", "Negative Space"]
  },
  {
    id: "p4",
    name: "Drone Landscape Photography",
    description: "Aerial perspectives revealing stunning patterns and compositions in landscapes",
    imageUrl: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&q=80&w=500",
    platform: "YouTube",
    source: "AerialViews",
    sourceUrl: "https://www.youtube.com",
    likes: 427,
    tags: ["Drone", "Aerial", "Landscape"]
  },
  {
    id: "p5",
    name: "Street Documentary Style",
    description: "Raw, candid moments capturing everyday life with journalistic approach",
    imageUrl: "https://images.unsplash.com/photo-1707885722776-e703cb3ff670?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyZWV0JTIwZG9jdW1lbnRyeSUyMHN0eWxlJTIwcGhvdG98ZW58MHx8MHx8fDA%3D",
    platform: "Twitter",
    source: "StreetStories",
    sourceUrl: "https://www.twitter.com",
    likes: 289,
    tags: ["Street", "Documentary", "Candid"]
  },
  {
    id: "p6",
    name: "Creative Portrait Lighting",
    description: "Experimental lighting techniques creating dramatic and distinctive portrait styles",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=500",
    platform: "Instagram",
    source: "LightCrafters",
    sourceUrl: "https://www.instagram.com",
    likes: 368,
    tags: ["Portrait", "Lighting", "Studio"]
  }
];

// Get liked photos from localStorage or set to empty array
const getSavedLikedPhotos = (): string[] => {
  const saved = localStorage.getItem("likedPhotos");
  return saved ? JSON.parse(saved) : [];
};

const SocialMediaTrends = () => {
  const [photos, setPhotos] = useState<SocialMediaPhotography[]>([]);
  const [likedIds, setLikedIds] = useState<string[]>(getSavedLikedPhotos());

  // Initialize photos from our mock data
  useEffect(() => {
    setPhotos([...initialPhotos].sort((a, b) => b.likes - a.likes));
  }, []);

  // Save liked photos to localStorage when likedIds changes
  useEffect(() => {
    localStorage.setItem("likedPhotos", JSON.stringify(likedIds));
  }, [likedIds]);

  const toggleLike = (id: string) => {
    setPhotos(current => 
      current.map(photo => {
        if (photo.id === id) {
          const isLiked = likedIds.includes(id);
          return {
            ...photo,
            likes: isLiked ? photo.likes - 1 : photo.likes + 1
          };
        }
        return photo;
      }).sort((a, b) => b.likes - a.likes)
    );
    
    setLikedIds(current => {
      if (current.includes(id)) {
        return current.filter(photoId => photoId !== id);
      } else {
        return [...current, id];
      }
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Social Media Trends</h2>
          <p className="text-muted-foreground mt-1">Popular photography styles and techniques from social platforms</p>
        </div>
        <Button variant="outline" size="sm">See More</Button>
      </div>
      
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo) => (
          <Card key={photo.id} className="hover:shadow-md transition-shadow">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={photo.imageUrl} 
                alt={photo.name} 
                className="h-full w-full object-cover transition-transform hover:scale-105 duration-500"
              />
              <Badge className="absolute top-3 right-3 bg-black/70 hover:bg-black/80">
                {photo.platform}
              </Badge>
            </div>
            
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-lg">{photo.name}</CardTitle>
              <div className="flex justify-between items-center">
                <div className="text-sm text-muted-foreground">
                  From: {photo.source}
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-semibold">{photo.likes}</span>
                  <Button 
                    variant="ghost"
                    size="sm"
                    className="p-0 h-auto hover:bg-transparent"
                    onClick={() => toggleLike(photo.id)}
                  >
                    <Heart 
                      className={cn(
                        "h-5 w-5 transition-colors", 
                        likedIds.includes(photo.id) 
                          ? "fill-red-500 text-red-500" 
                          : "text-slate-400"
                      )} 
                    />
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-4 pt-0">
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                {photo.description}
              </p>
              
              <div className="flex gap-1 flex-wrap">
                {photo.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            
            <CardFooter className="p-4 pt-0">
              <div className="flex gap-2 w-full">
                <Button className="flex-1" size="sm" variant="outline" asChild>
                  <a href={photo.sourceUrl} target="_blank" rel="noopener noreferrer">
                    View on {photo.platform}
                  </a>
                </Button>
                <Button className="flex-1" size="sm" variant="outline" asChild>
                  <Link to={`/categories/photography/products/${photo.id}`}>
                    View Product Details
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaTrends;
