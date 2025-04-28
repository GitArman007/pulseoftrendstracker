
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Home, TrendingUp } from "lucide-react";

// Define a User interface to type our user data
interface User {
  name: string;
  email: string;
  password: string;
  createdAt: string;
}

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Check if email already exists
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const emailExists = existingUsers.some((user: User) => user.email === email);
      
      if (emailExists) {
        setIsLoading(false);
        toast({
          title: "Registration failed",
          description: "This email is already registered",
          variant: "destructive",
        });
        return;
      }
      
      // Create new user object
      const newUser: User = {
        name,
        email,
        password, // In a real app, this would be hashed
        createdAt: new Date().toISOString(),
      };
      
      // Add to existing users and save to localStorage
      existingUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(existingUsers));
      
      // Simulate API delay
      setTimeout(() => {
        setIsLoading(false);
        toast({
          title: "Account created",
          description: "You have successfully created an account!",
        });
        navigate("/sign-in");
      }, 1000);
    } catch (error) {
      setIsLoading(false);
      toast({
        title: "Something went wrong",
        description: "Please try again later",
        variant: "destructive",
      });
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
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
      
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-white">
              <TrendingUp className="h-6 w-6" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
          <CardDescription>
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignUp} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input 
                id="name" 
                placeholder="John Doe" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="your.email@example.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Creating account..." : "Create account"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link to="/sign-in" className="text-primary underline-offset-4 hover:underline">
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUpPage;
