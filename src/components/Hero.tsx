import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      <div className="container mx-auto px-4 pt-16 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-float">
          Always focus on your <span className="text-gradient">growth</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          We provide top-tier engineering talent to help businesses in Kazakhstan thrive in the digital age.
        </p>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
          Get in touch
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Hero;