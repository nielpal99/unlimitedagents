import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { Play, Headphones } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-slide-up">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-6">
            A podcast about AI builders
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
            Unlimited<br />
            <span className="text-gradient">Agents</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Conversations with founders building the future of AI. 
            From autonomous agents to transformative tools — discover what's next.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glow" size="xl" className="gap-3">
              <Play className="w-5 h-5" />
              Listen Now
            </Button>
            <Button variant="outline-glow" size="xl" className="gap-3">
              <Headphones className="w-5 h-5" />
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
