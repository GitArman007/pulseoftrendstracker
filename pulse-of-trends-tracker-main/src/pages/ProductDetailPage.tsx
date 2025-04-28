import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { trendingItems } from "@/data/mockData";
import { TrendItem, PurchaseLink } from "@/types/trends";
import { initialGadgets } from "@/components/gadgets/gadgets-data";

// Mock purchase links for demonstration
const mockPurchaseLinks: Record<string, PurchaseLink[]> = {
  "sm1": [
    { 
      title: "Straight Fit Pants", 
      url: "https://www.amazon.com/straight-fit-pants", 
      platform: "Amazon",
      price: "₹1000" 
    },
    { 
      title: "Oversized Button-Down Shirt", 
      url: "https://www.nordstrom.com/oversized-shirt", 
      platform: "Nordstrom",
      price: "₹1500" 
    },
    { 
      title: "Complete Minimalist Outfit Set", 
      url: "https://www.asos.com/minimalist-outfit", 
      platform: "ASOS",
      price: "₹2900" 
    },
  ],
  "sm2": [
    { 
      title: "Vintage Graphic Tee", 
      url: "https://www.amazon.com/vintage-tee", 
      platform: "Amazon",
      price: "₹1600" 
    },
    { 
      title: "High Waist Straight Jeans", 
      url: "https://www.nordstrom.com/high-waist-jeans", 
      platform: "Nordstrom",
      price: "₹2500" 
    },
    { 
      title: "90s Inspired Outfit Bundle", 
      url: "https://www.asos.com/90s-outfit", 
      platform: "ASOS",
      price: "₹3500" 
    },
  ],
  "sm3": [
    { 
      title: "Black Layered Outfit Set", 
      url: "https://www.amazon.com/black-layered-outfit", 
      platform: "Amazon",
      price: "₹2800" 
    },
    { 
      title: "Monochrome Textured Pieces", 
      url: "https://www.nordstrom.com/monochrome-outfit", 
      platform: "Nordstrom",
      price: "₹4200" 
    },
    { 
      title: "Complete Black Outfit Bundle", 
      url: "https://www.asos.com/black-outfit", 
      platform: "ASOS",
      price: "₹3200" 
    },
  ],
  "sm4": [
    { 
      title: "Oversized Blazer", 
      url: "https://www.amazon.com/oversized-blazer", 
      platform: "Amazon",
      price: "₹3200" 
    },
    { 
      title: "Slim Fit Pants", 
      url: "https://www.nordstrom.com/slim-pants", 
      platform: "Nordstrom",
      price: "₹2200" 
    },
    { 
      title: "Business Casual Outfit Set", 
      url: "https://www.asos.com/business-casual", 
      platform: "ASOS",
      price: "₹4500" 
    },
  ],
  "sm5": [
    { 
      title: "Denim Jacket", 
      url: "https://www.amazon.com/denim-jacket", 
      platform: "Amazon",
      price: "₹2800" 
    },
    { 
      title: "Matching Denim Pants", 
      url: "https://www.nordstrom.com/denim-pants", 
      platform: "Nordstrom",
      price: "₹3200" 
    },
    { 
      title: "Denim on Denim Outfit Set", 
      url: "https://www.asos.com/denim-outfit", 
      platform: "ASOS",
      price: "₹4500" 
    },
  ],
  "sm6": [
    { 
      title: "Wide Leg Pants", 
      url: "https://www.amazon.com/wide-leg-pants", 
      platform: "Amazon",
      price: "₹1800" 
    },
    { 
      title: "Fitted Crop Top", 
      url: "https://www.nordstrom.com/crop-top", 
      platform: "Nordstrom",
      price: "₹1500" 
    },
    { 
      title: "Summer Chic Outfit Set", 
      url: "https://www.asos.com/summer-outfit", 
      platform: "ASOS",
      price: "₹2800" 
    },
  ],
  "fashion-1": [
    { 
      title: "Premium Wide Leg Pants", 
      url: "https://www.amazon.com/wide-leg-pants", 
      platform: "Amazon",
      price: "₹1800" 
    },
    { 
      title: "Designer Crop Top", 
      url: "https://www.nordstrom.com/crop-top", 
      platform: "Nordstrom",
      price: "₹1200" 
    },
    { 
      title: "Complete Summer Outfit Set", 
      url: "https://www.asos.com/summer-outfit", 
      platform: "ASOS",
      price: "₹2500" 
    },
  ],
  "gadget-1": [
    { 
      title: "Mini Portable Projector HD", 
      url: "https://www.amazon.com/mini-projector", 
      platform: "Amazon",
      price: "₹8500" 
    },
    { 
      title: "Smart Portable Projector with WiFi", 
      url: "https://www.bestbuy.com/smart-projector", 
      platform: "Best Buy",
      price: "₹10500" 
    },
    { 
      title: "Pocket Cinema Projector", 
      url: "https://www.walmart.com/pocket-projector", 
      platform: "Walmart",
      price: "₹7500" 
    },
  ],
  "books-1": [
    { 
      title: "Atomic Habits (Hardcover)", 
      url: "https://www.amazon.com/atomic-habits", 
      platform: "Amazon",
      price: "₹800" 
    },
    { 
      title: "Atomic Habits (Kindle)", 
      url: "https://www.amazon.com/atomic-habits-kindle", 
      platform: "Kindle Store",
      price: "₹550" 
    },
    { 
      title: "Atomic Habits (Audiobook)", 
      url: "https://www.audible.com/atomic-habits", 
      platform: "Audible",
      price: "₹650" 
    },
  ],
  "p1": [
    { 
      title: "35mm Film Camera", 
      url: "https://www.amazon.com/35mm-film-camera", 
      platform: "Amazon",
      price: "₹12000" 
    },
    { 
      title: "Film Photography Starter Kit", 
      url: "https://www.bhphotovideo.com/film-kit", 
      platform: "B&H Photo",
      price: "₹15000" 
    },
    { 
      title: "Film Development Kit", 
      url: "https://www.amazon.com/film-development-kit", 
      platform: "Amazon",
      price: "₹8000" 
    },
  ],
  "p2": [
    { 
      title: "Smartphone Tripod", 
      url: "https://www.amazon.com/smartphone-tripod", 
      platform: "Amazon",
      price: "₹1500" 
    },
    { 
      title: "Night Photography Guide", 
      url: "https://www.amazon.com/night-photography-guide", 
      platform: "Amazon",
      price: "₹1200" 
    },
    { 
      title: "Smartphone Camera Lens Kit", 
      url: "https://www.amazon.com/smartphone-lens-kit", 
      platform: "Amazon",
      price: "₹2500" 
    },
  ],
  "d1": [
    { 
      title: "Minimalist Sofa Set", 
      url: "https://www.amazon.com/minimalist-sofa", 
      platform: "Amazon",
      price: "₹25000" 
    },
    { 
      title: "Neutral Throw Pillows", 
      url: "https://www.urbanladder.com/throw-pillows", 
      platform: "Urban Ladder",
      price: "₹1200" 
    },
    { 
      title: "Minimalist Coffee Table", 
      url: "https://www.pepperfry.com/coffee-table", 
      platform: "Pepperfry",
      price: "₹8500" 
    },
    { 
      title: "Total Room Makeover Package", 
      url: "https://www.homelane.com/room-makeover", 
      platform: "Homelane",
      price: "₹45000" 
    }
  ],
  "d2": [
    { 
      title: "Modern Floor Lamp", 
      url: "https://www.amazon.com/modern-lamp", 
      platform: "Amazon",
      price: "₹3500" 
    },
    { 
      title: "Table Lamp Set", 
      url: "https://www.urbanladder.com/table-lamps", 
      platform: "Urban Ladder",
      price: "₹2800" 
    },
    { 
      title: "LED Strip Lights", 
      url: "https://www.pepperfry.com/led-strips", 
      platform: "Pepperfry",
      price: "₹1200" 
    },
    { 
      title: "Complete Lighting Package", 
      url: "https://www.homelane.com/lighting-package", 
      platform: "Homelane",
      price: "₹8500" 
    }
  ],
  "g1": [
    { 
      title: "Personalized Photo Book", 
      url: "https://www.amazon.com/photo-book", 
      platform: "Amazon",
      price: "₹1500" 
    },
    { 
      title: "Custom Photo Frame", 
      url: "https://www.urbanladder.com/photo-frame", 
      platform: "Urban Ladder",
      price: "₹800" 
    },
    { 
      title: "Photo Printing Service", 
      url: "https://www.snapfish.com/printing", 
      platform: "Snapfish",
      price: "₹500" 
    }
  ],
  "g2": [
    { 
      title: "Smart Home Starter Kit", 
      url: "https://www.amazon.com/smart-home-kit", 
      platform: "Amazon",
      price: "₹12000" 
    },
    { 
      title: "Smart Light Bulbs", 
      url: "https://www.urbanladder.com/smart-bulbs", 
      platform: "Urban Ladder",
      price: "₹2500" 
    },
    { 
      title: "Smart Plug Set", 
      url: "https://www.pepperfry.com/smart-plugs", 
      platform: "Pepperfry",
      price: "₹1800" 
    }
  ],
  "g3": [
    { 
      title: "Google Nest Hub", 
      url: "https://www.amazon.com/google-nest", 
      platform: "Amazon",
      price: "₹12000" 
    },
    { 
      title: "Amazon Echo Show 15", 
      url: "https://www.flipkart.com/echo-show", 
      platform: "Flipkart",
      price: "₹15000" 
    },
    { 
      title: "Smart Home Starter Kit", 
      url: "https://www.reliancedigital.com/smart-home", 
      platform: "Reliance Digital",
      price: "₹25000" 
    },
  ],
  "g4": [
    { 
      title: "Apple AirPods Pro 2", 
      url: "https://www.amazon.com/airpods-pro", 
      platform: "Amazon",
      price: "₹25000" 
    },
    { 
      title: "Sony WF-1000XM4", 
      url: "https://www.flipkart.com/sony-wf1000xm4", 
      platform: "Flipkart",
      price: "₹22000" 
    },
    { 
      title: "Bose QuietComfort Earbuds", 
      url: "https://www.reliancedigital.com/bose-qc", 
      platform: "Reliance Digital",
      price: "₹28000" 
    },
  ],
  "g5": [
    { 
      title: "Anker PowerHouse 200", 
      url: "https://www.amazon.com/anker-powerhouse", 
      platform: "Amazon",
      price: "₹35000" 
    },
    { 
      title: "Jackery Explorer 300", 
      url: "https://www.flipkart.com/jackery-300", 
      platform: "Flipkart",
      price: "₹30000" 
    },
    { 
      title: "Portable Power Station Bundle", 
      url: "https://www.reliancedigital.com/power-station", 
      platform: "Reliance Digital",
      price: "₹40000" 
    },
  ],
  "g6": [
    { 
      title: "Apple Watch Series 8", 
      url: "https://www.amazon.com/apple-watch-8", 
      platform: "Amazon",
      price: "₹45000" 
    },
    { 
      title: "Samsung Galaxy Watch 5 Pro", 
      url: "https://www.flipkart.com/galaxy-watch-5", 
      platform: "Flipkart",
      price: "₹35000" 
    },
    { 
      title: "Garmin Venu 2 Plus", 
      url: "https://www.reliancedigital.com/garmin-venu", 
      platform: "Reliance Digital",
      price: "₹40000" 
    },
  ],
};

// Mock social media outfits data
const mockSocialMediaOutfits = [
  {
    id: "sm1",
    title: "Straight Fit Pants & Loose Shirt Combo",
    description: "Minimalist combination with straight fit pants and an oversized button-down shirt",
    imageUrl: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQttJP6Yd7jzhxXDBKOx91rDPd7dhby4rxEa3HGvgrpCJd7eXwx3IG7Ph6H9JRlaP7668SN6AW8gBh9pPIUzMubBNkCBrOG2jZuBozQ09SvANu3Bkd_UCi1",
    category: "fashion",
    hashtags: ["Minimalist", "Loose Fit", "Casual"]
  },
  {
    id: "sm2",
    title: "Vintage Tee & High Waist Jeans",
    description: "90s inspired outfit with a vintage graphic tee and high waist straight jeans",
    imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=500",
    category: "fashion",
    hashtags: ["Vintage", "90s", "Retro"]
  },
  {
    id: "sm3",
    title: "Monochrome Layered Look",
    description: "All-black layered outfit with different textures for depth",
    imageUrl: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?auto=format&fit=crop&q=80&w=500",
    category: "fashion",
    hashtags: ["Monochrome", "Layered", "Textured"]
  },
  {
    id: "sm4",
    title: "Oversized Blazer & Slim Pants",
    description: "Business casual look with an oversized blazer and slim fit pants",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=500",
    category: "fashion",
    hashtags: ["Business Casual", "Oversized", "Professional"]
  },
  {
    id: "sm5",
    title: "Denim on Denim",
    description: "Modern take on the classic Canadian tuxedo with mixed denim tones",
    imageUrl: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&q=80&w=500",
    category: "fashion",
    hashtags: ["Denim", "Layered", "Double Denim"]
  },
  {
    id: "sm6",
    title: "Wide Leg Pants & Crop Top",
    description: "Summer chic with high waist wide leg pants and a fitted crop top",
    imageUrl: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=500",
    category: "fashion",
    hashtags: ["Summer", "Wide Leg", "Crop Top"]
  }
];

const ProductDetailPage = () => {
  const { id, category } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<TrendItem | null>(null);
  const [purchaseLinks, setPurchaseLinks] = useState<PurchaseLink[]>([]);

  useEffect(() => {
    // Find the product in trendingItems
    const foundProduct = trendingItems.find(item => item.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      
      // Get purchase links based on category
      if (category === 'decoration') {
        setPurchaseLinks(mockPurchaseLinks[`d${id}`] || []);
      } else if (category === 'gifts') {
        setPurchaseLinks(mockPurchaseLinks[`g${id}`] || []);
      } else if (category === 'books') {
        setPurchaseLinks(mockPurchaseLinks[`books-${id}`] || []);
      } else {
        setPurchaseLinks(mockPurchaseLinks[id || ''] || []);
      }
    }
  }, [id, category]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Layout title={product.title || "Product Details"}>
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-auto rounded-lg"
            />
          </div>
          
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            {category === 'skills' ? (
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Learn This Skill</h2>
                <p className="text-gray-600">
                  Coming soon: Links to courses from Coursera, Udemy, and other learning platforms.
                </p>
                <Button className="w-full">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Learning Resources
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">
                  {category === 'books' ? 'Purchase Options' : 'Where to Buy'}
                </h2>
                <div className="grid gap-4">
                  {purchaseLinks.map((link, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle>{link.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">{link.platform}</span>
                          <span className="font-semibold">{link.price}</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button
                          className="w-full"
                          onClick={() => window.open(link.url, '_blank')}
                        >
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          {category === 'books' ? 'Buy Now' : 'Shop Now'}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
