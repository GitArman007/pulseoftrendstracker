
import { Bell, User, Search, LogIn } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const isMobile = useIsMobile();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  // This would typically come from an auth context/provider
  const isLoggedIn = false; 

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/explore?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  // Quick navigation to category pages
  const quickNavToCategory = (category: string) => {
    navigate(`/categories/${category}`);
  };

  const handleSignIn = () => {
    navigate('/sign-in');
  };

  const handleSignUp = () => {
    navigate('/sign-up');
  };

  const handleLogout = () => {
    // Here you would handle logout logic
    // For now, just navigate to home
    navigate('/');
  };

  return (
    <header className="border-b bg-card h-16 px-4 md:px-6 flex items-center justify-between">
      <h1 className="text-xl font-semibold md:text-2xl">{title}</h1>
      
      <div className="flex items-center gap-4">
        {!isMobile && (
          <>
            <form onSubmit={handleSearch} className="relative w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search trends..."
                className="pl-8 bg-background"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </form>
            
            <div className="hidden md:flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="text-pink-500 border-pink-200 hover:bg-pink-50 hover:text-pink-600 dark:hover:bg-pink-950 dark:hover:text-pink-400 dark:border-pink-900"
                onClick={() => quickNavToCategory("fashion")}
              >
                Fashion
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="text-blue-500 border-blue-200 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-950 dark:hover:text-blue-400 dark:border-blue-900"
                onClick={() => quickNavToCategory("gadgets")}
              >
                Gadgets
              </Button>
            </div>
          </>
        )}
        
        <ThemeToggle />
        
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary"></span>
        </Button>
        
        {isLoggedIn ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate("/profile")}>
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate("/settings")}>
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <LogIn className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={handleSignIn}>
                Sign In
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleSignUp}>
                Sign Up
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </header>
  );
};

export default Header;
