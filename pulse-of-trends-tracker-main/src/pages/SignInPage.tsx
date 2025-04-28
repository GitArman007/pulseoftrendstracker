
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff, Home, Lock, Mail, TrendingUp } from "lucide-react";

// Define a User interface to type our user data
interface User {
  name: string;
  email: string;
  password: string;
  createdAt: string;
}

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Get users from localStorage
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      
      // Find user with matching email and password
      const user = users.find((u: User) => 
        u.email === email && u.password === password
      );
      
      if (user) {
        // Store current user in localStorage
        localStorage.setItem('currentUser', JSON.stringify({
          name: user.name,
          email: user.email,
          createdAt: user.createdAt
        }));
        
        setTimeout(() => {
          setIsLoading(false);
          toast({
            title: "Successfully signed in",
            description: `Welcome back, ${user.name}!`,
          });
          navigate("/");
        }, 1000);
      } else {
        setIsLoading(false);
        toast({
          title: "Sign in failed",
          description: "Invalid email or password",
          variant: "destructive",
        });
      }
    } catch (error) {
      setIsLoading(false);
      toast({
        title: "Something went wrong",
        description: "Please try again later",
        variant: "destructive",
      });
      console.error("Sign in error:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-muted p-4">
      <div className="absolute top-4 left-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => navigate("/")}
          className="rounded-full shadow-md hover:shadow-lg transition-all"
          aria-label="Go to home page"
        >
          <Home className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md animate-pulse-scale">
              <TrendingUp className="h-8 w-8" />
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-1">Welcome back</h1>
          <p className="text-muted-foreground">Sign in to your account to continue</p>
        </div>
        
        <Card className="border-t-4 border-t-primary shadow-lg transition-all hover:shadow-xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
            <CardDescription>
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignIn} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                  <Link to="/forgot-password" className="text-xs text-primary underline-offset-4 hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    id="password" 
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    required
                  />
                  <button 
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <Button type="submit" className="w-full transition-all" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center border-t p-6">
            <div className="text-center text-sm">
              Don't have an account?{" "}
              <Link to="/sign-up" className="font-semibold text-primary hover:underline underline-offset-4">
                Create an account
              </Link>
            </div>
          </CardFooter>
        </Card>
        
        <div className="mt-6 text-center text-sm text-muted-foreground">
          By signing in, you agree to our{" "}
          <Link to="/terms" className="hover:underline underline-offset-4">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="hover:underline underline-offset-4">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
