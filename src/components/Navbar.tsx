import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const Navbar = () => {
  const menuItems = ["Cases", "What We Offer", "Reviews", "Services", "Team", "Awards", "Blog"];

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <a href="/" className="text-xl font-bold text-gradient">Tekmates</a>
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Globe className="h-5 w-5" />
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Contact Us
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;