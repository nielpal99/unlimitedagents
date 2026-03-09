import hostPhoto from "@/assets/host-photo.jpg";
import { Mic, TrendingUp, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    { icon: Mic, label: "Tech Sales Background" },
    { icon: TrendingUp, label: "AI Industry Focus" },
    { icon: Lightbulb, label: "Founder Insights" },
  ];

  return (
    <section className="section-padding bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto overflow-hidden rounded-2xl glow-md">
              <img 
                src={hostPhoto} 
                alt="Podcast host" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </div>
          
          {/* Content */}
          <div>
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Your Host
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Bridging Sales & Innovation
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm in tech sales, fascinated by the people building the AI revolution. 
              This podcast is where we go deep with founders creating autonomous agents, 
              intelligent tools, and everything in between.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              "Unlimited Agents" captures both the AI agents transforming our world 
              and the human agency it takes to build something meaningful. 
              Every episode is a chance to learn from those shaping what's next.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {highlights.map(({ icon: Icon, label }) => (
                <div 
                  key={label}
                  className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full"
                >
                  <Icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
