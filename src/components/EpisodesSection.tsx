import { Play, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const episodes = [
  {
    number: "01",
    title: "Building AI That Actually Works",
    guest: "Coming Soon",
    duration: "45 min",
    description: "Our first episode explores what it takes to build AI products that solve real problems.",
  },
  {
    number: "02",
    title: "The Agentic Future",
    guest: "Coming Soon",
    duration: "50 min",
    description: "Diving deep into autonomous agents and how they're reshaping software.",
  },
  {
    number: "03",
    title: "From Demo to Production",
    guest: "Coming Soon",
    duration: "40 min",
    description: "The challenges of taking AI from impressive demos to reliable production systems.",
  },
];

const EpisodesSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Episodes
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Latest Conversations
          </h2>
        </div>
        
        <div className="space-y-6">
          {episodes.map((episode) => (
            <article 
              key={episode.number}
              className="group bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/30 transition-all hover:glow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Episode number */}
                <div className="flex-shrink-0">
                  <span className="font-display text-5xl md:text-6xl font-bold text-muted-foreground/30 group-hover:text-primary/50 transition-colors">
                    {episode.number}
                  </span>
                </div>
                
                {/* Content */}
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-primary text-sm font-medium">{episode.guest}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground text-sm flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {episode.duration}
                    </span>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {episode.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {episode.description}
                  </p>
                </div>
                
                {/* Play button */}
                <div className="flex-shrink-0">
                  <Button 
                    variant="outline-glow" 
                    size="lg" 
                    className="w-full md:w-auto opacity-70 group-hover:opacity-100"
                  >
                    <Play className="w-4 h-4" />
                    Coming Soon
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EpisodesSection;
