import { Bot, Sparkles, Zap, Users } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Founders",
    description: "Conversations with the builders creating autonomous agents and intelligent systems.",
  },
  {
    icon: Sparkles,
    title: "Deep Dives",
    description: "Technical discussions made accessible. Understand the 'how' behind the innovation.",
  },
  {
    icon: Zap,
    title: "Real Talk",
    description: "Honest conversations about the challenges, failures, and breakthroughs in AI.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Join a growing community of builders, investors, and AI enthusiasts.",
  },
];

const MissionSection = () => {
  return (
    <section className="section-padding bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            What We Cover
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Inside the AI Revolution
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every episode brings you closer to the people building tomorrow's technology.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div 
              key={title}
              className="group bg-background/50 border border-border rounded-xl p-6 hover:border-primary/30 transition-all hover:glow-sm"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
