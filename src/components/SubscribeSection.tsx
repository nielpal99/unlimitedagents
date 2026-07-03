import { useState } from "react";
import { Button } from "@/components/ui/button";

const platforms = [
  {
    name: "Spotify",
    color: "bg-[#1DB954]",
    href: "https://open.spotify.com/show/unlimitedagents",
    external: true,
  },
  {
    name: "Apple Podcasts",
    color: "bg-[#872EC4]",
    href: "https://podcasts.apple.com/podcast/unlimitedagents",
    external: true,
  },
  {
    name: "YouTube",
    color: "bg-[#FF0000]",
    href: "https://youtube.com/@unlimitedagents",
    external: true,
  },
  {
    name: "RSS Feed",
    color: "bg-primary",
    href: "/rss.xml",
    external: false,
  },
];

const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1000);
  };

  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
          Never Miss an Episode
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
          Subscribe Now
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          Available on all major podcast platforms. Pick your favorite and join the conversation.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {platforms.map((platform) => (
            <Button
              key={platform.name}
              variant="secondary"
              size="lg"
              className="min-w-[140px] hover:scale-105 transition-transform"
              asChild
            >
              <a
                href={platform.href}
                {...(platform.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <div className={`w-3 h-3 rounded-full ${platform.color} mr-2`} />
                {platform.name}
              </a>
            </Button>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 p-8 bg-card border border-border rounded-2xl glow-sm">
          <h3 className="font-display text-xl font-semibold mb-3">
            Get Episode Updates
          </h3>
          <p className="text-muted-foreground mb-6">
            Join the newsletter for exclusive content and early access.
          </p>

          {isSuccess ? (
            <p className="text-primary font-medium text-lg">
              Thanks! You're on the list.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <Button variant="glow" size="lg" type="submit" disabled={isLoading}>
                {isLoading ? "Subscribing…" : "Subscribe"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
