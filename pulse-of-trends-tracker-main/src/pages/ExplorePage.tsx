import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock trends data for demonstration
const mockTrends = [
  { id: 1, name: "Sustainable Fashion", category: "Fashion", mentions: 12500, growth: 23 },
  { id: 2, name: "Smart Home Gadgets", category: "Gadgets", mentions: 9800, growth: 15 },
  { id: 3, name: "Minimalist Decoration", category: "Decoration", mentions: 7600, growth: 8 },
  { id: 4, name: "Portrait Photography", category: "Photography", mentions: 6200, growth: 12 },
  { id: 5, name: "Vintage Clothing", category: "Fashion", mentions: 5400, growth: 7 },
  { id: 6, name: "Foldable Phones", category: "Gadgets", mentions: 8900, growth: 18 },
];

const ExplorePage = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [results, setResults] = useState<typeof mockTrends>([]);

  useEffect(() => {
    // Parse search query from URL
    const params = new URLSearchParams(location.search);
    const query = params.get("q") || "";
    setSearchQuery(query);
    
    // Filter results based on search query
    if (query) {
      const filtered = mockTrends.filter(trend => 
        trend.name.toLowerCase().includes(query.toLowerCase()) ||
        trend.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [location.search]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const filtered = mockTrends.filter(trend => 
        trend.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        trend.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    
    if (value === "all") {
      // No additional filtering, keep current search results
      return;
    }
    
    // Filter by category
    const categoryFiltered = results.length > 0 
      ? results.filter(trend => trend.category.toLowerCase() === value.toLowerCase())
      : mockTrends.filter(trend => trend.category.toLowerCase() === value.toLowerCase());
    
    setResults(categoryFiltered);
  };

  return (
    <Layout title="Explore">
      {results.length > 0 ? (
        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSearch} className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search for trends..."
                    className="pl-8 bg-background w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button type="submit">Search</Button>
              </form>
            </CardContent>
          </Card>

          <Tabs value={activeTab} onValueChange={handleTabChange}>
            <TabsList className="mb-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="fashion">Fashion</TabsTrigger>
              <TabsTrigger value="gadgets">Gadgets</TabsTrigger>
              <TabsTrigger value="decoration">Decoration</TabsTrigger>
              <TabsTrigger value="photography">Photography</TabsTrigger>
            </TabsList>
            
            <TabsContent value={activeTab} className="mt-0">
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {results.map(trend => (
                  <Card key={trend.id}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{trend.name}</CardTitle>
                      <CardDescription>{trend.category}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-muted-foreground">Mentions</p>
                          <p className="font-medium">{trend.mentions.toLocaleString()}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Growth</p>
                          <p className={`font-medium ${trend.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {trend.growth > 0 ? '+' : ''}{trend.growth}%
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-180px)]">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-center">Explore Trends</CardTitle>
              <CardDescription className="text-center">
                Search for trends across fashion, gadgets, decoration, and photography
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <div className="h-24 w-24 bg-muted rounded-full flex items-center justify-center mb-4 animate-pulse-scale">
                <Search className="h-12 w-12 text-muted-foreground" />
              </div>
              <form onSubmit={handleSearch} className="w-full mb-4">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search for trends..."
                    className="pl-8 bg-background w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button type="submit" className="w-full mt-2">Search Now</Button>
              </form>
              <p className="text-center text-muted-foreground">
                The explore feature allows you to discover new trends and insights based on 
                custom search criteria, advanced filters, and AI-powered recommendations.
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </Layout>
  );
};

export default ExplorePage;
