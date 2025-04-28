
export interface SocialMediaGadget {
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

export const initialGadgets: SocialMediaGadget[] = [
  {
    id: "g1",
    name: "Foldable Smartphone",
    description: "Next generation foldable smartphone with improved durability and larger screen",
    imageUrl: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=500&fit=crop&ixlib=rb-4.0.3",
    platform: "YouTube",
    source: "Tech Reviews",
    sourceUrl: "https://www.youtube.com",
    likes: 487,
    tags: ["Foldable", "Smartphone", "Samsung"]
  },
  {
    id: "g2",
    name: "Compact Drone Camera",
    description: "Ultra-portable drone with 4K camera and advanced stabilization features",
    imageUrl: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=500&fit=crop&ixlib=rb-4.0.3",
    platform: "Instagram",
    source: "DroneZone",
    sourceUrl: "https://www.instagram.com",
    likes: 342,
    tags: ["Drone", "Camera", "4K"]
  },
  {
    id: "g3",
    name: "Smart Home Hub",
    description: "Central control system for all your smart home devices with voice assistant integration",
    imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=500&fit=crop&ixlib=rb-4.0.3",
    platform: "Reddit",
    source: "r/SmartHome",
    sourceUrl: "https://www.reddit.com",
    likes: 215,
    tags: ["Smart Home", "IoT", "Voice Control"]
  },
  {
    id: "g4",
    name: "Noise-Cancelling Earbuds",
    description: "Premium wireless earbuds with adaptive noise cancellation and spatial audio",
    imageUrl: "https://images.unsplash.com/photo-1634717037148-4dc76c09a328?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bm9pc2UlMjBjYW5jZWxsaW5nJTIwaGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
    platform: "TikTok",
    source: "AudioTrends",
    sourceUrl: "https://www.tiktok.com",
    likes: 298,
    tags: ["Audio", "Wireless", "Earbuds"]
  },
  {
    id: "g5",
    name: "Portable Power Station",
    description: "High-capacity power bank with AC outlets for camping and emergency use",
    imageUrl: "https://images.unsplash.com/photo-1678775882799-2fba7042e7da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydGFibGUlMjBwb3dlciUyMHN0YXRpb258ZW58MHx8MHx8fDA%3D",
    platform: "Twitter",
    source: "OutdoorGear",
    sourceUrl: "https://www.twitter.com",
    likes: 178,
    tags: ["Power Bank", "Camping", "Portable"]
  },
  {
    id: "g6",
    name: "Smart Fitness Watch",
    description: "Advanced fitness tracker with ECG monitoring and sleep analysis features",
    imageUrl: "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?auto=format&fit=crop&q=80&w=500&fit=crop&ixlib=rb-4.0.3",
    platform: "Instagram",
    source: "FitTech",
    sourceUrl: "https://www.instagram.com",
    likes: 324,
    tags: ["Fitness", "Wearable", "Health"]
  }
];

// Get liked gadgets from localStorage or set to empty array
export const getSavedLikedGadgets = (): string[] => {
  const saved = localStorage.getItem("likedGadgets");
  return saved ? JSON.parse(saved) : [];
};
