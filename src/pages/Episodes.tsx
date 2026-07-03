import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { episodes } from "@/data/episodes";
import Footer from "@/components/Footer";

const Episodes = () => {
  const sorted = [...episodes].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Page header */}
      <header className="section-padding pb-0">
        <div className="container mx-auto max-w-6xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors mb-10"
          >
            <ArrowRight className="w-3 h-3 rotate-180" />
            Back to home
          </Link>

          <div className="animate-slide-up">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              All Episodes
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
              Every Conversation
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
              In-depth talks with the founders and engineers shaping the future of AI — sorted newest first.
            </p>
          </div>
        </div>
      </header>

      {/* Episode list */}
      <main className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-6">
            {sorted.map((episode) => (
              <Link
                key={episode.slug}
                to={`/episodes/${episode.slug}`}
                className="group block bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/30 transition-all hover:glow-sm animate-fade-in"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* Episode number */}
                  <div className="flex-shrink-0">
                    <span className="font-display text-5xl md:text-6xl font-bold text-muted-foreground/30 group-hover:text-primary/50 transition-colors">
                      {episode.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-grow min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-primary text-sm font-medium">{episode.guest}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground text-sm flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {episode.duration}
                      </span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground text-sm">
                        {new Date(episode.publishedAt).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>

                    <h2 className="font-display text-xl md:text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {episode.title}
                    </h2>

                    <p className="text-muted-foreground mb-4">{episode.description}</p>

                    {episode.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {episode.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs font-normal text-muted-foreground border-border"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0 opacity-40 group-hover:opacity-100 group-hover:text-primary transition-all">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Episodes;
