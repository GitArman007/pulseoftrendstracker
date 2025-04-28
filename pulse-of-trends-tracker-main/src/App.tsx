import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import TrendsPage from "./pages/TrendsPage";
import TrendDetailPage from "./pages/TrendDetailPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ExplorePage from "./pages/ExplorePage";
import AnalyticsPage from "./pages/AnalyticsPage";
import FashionPage from "./pages/FashionPage";
import GadgetsPage from "./pages/GadgetsPage";
import DecorationPage from "./pages/DecorationPage";
import PhotographyPage from "./pages/PhotographyPage";
import TechnologyPage from "./pages/TechnologyPage";
import SkillsPage from "./pages/SkillsPage";
import BooksPage from "./pages/BooksPage";
import GiftsPage from "./pages/GiftsPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="system" storageKey="trends-observer-theme">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/trends" element={<TrendsPage />} />
            <Route path="/trends/:id" element={<TrendDetailPage />} />
            <Route path="/categories/:category/products/:id" element={<ProductDetailPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/categories/fashion" element={<FashionPage />} />
            <Route path="/categories/gadgets" element={<GadgetsPage />} />
            <Route path="/categories/decoration" element={<DecorationPage />} />
            <Route path="/categories/photography" element={<PhotographyPage />} />
            <Route path="/categories/technology" element={<TechnologyPage />} />
            <Route path="/categories/skills" element={<SkillsPage />} />
            <Route path="/categories/books" element={<BooksPage />} />
            <Route path="/categories/gifts" element={<GiftsPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
