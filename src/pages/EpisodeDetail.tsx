import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, Calendar, Headphones } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { episodes } from "@/data/episodes";
import Footer from "@/components/Footer";
import NotFound from "./NotFound";

const EpisodeDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const episodeIndex = episodes.findIndex((ep) => ep.slug === slug);

  if (episodeIndex === -1) {
    return <NotFound />;
  }

  const episode = episodes[episodeIndex];
  const prevEpisode = episodeIndex > 0 ? episodes[episodeIndex - 1] : null;
  const nextEpisode =
    episodeIndex < episodes.length - 1 ? episodes[episodeIndex + 1] : null;

  const formattedDate = new Date(episode.publishedAt).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }
  );

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* ── Main content ── */}
      <main className="flex-grow section-padding">
        <div className="container mx-auto max-w-3xl">

          {/* Back link */}
          <Link
            to="/episodes"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            All Episodes
          </Link>

          {/* ── Hero ── */}
          <div className="animate-slide-up">
            {/* Episode number */}
            <span className="font-display text-7xl md:text-8xl font-bold text-muted-foreground/20 leading-none select-none block mb-2">
              {episode.number}
            </span>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              {episode.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="text-xs font-medium tracking-wide"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Title */}
            <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-6">
              {episode.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground mb-10">
              <span className="text-primary font-semibold">{episode.guest}</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {episode.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {formattedDate}
              </span>
            </div>
          </div>

          {/* ── Audio Player ── */}
          <section className="mb-10 animate-fade-in">
            {episode.audioUrl ? (
              <div className="bg-card border border-border rounded-xl p-6 glow-sm">
                <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">
                  Listen
                </p>
                <audio
                  controls
                  className="w-full"
                  src={episode.audioUrl}
                >
                  Your browser does not support the audio element.
                </audio>
              </div>
            ) : (
              <div className="bg-card border border-border rounded-xl p-8 flex flex-col items-center gap-4 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Headphones className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground mb-1">
                    Episode coming soon
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Audio will appear here once this episode is published.
                  </p>
                </div>
              </div>
            )}
          </section>

          <Separator className="mb-10" />

          {/* ── About This Episode ── */}
          <section className="mb-10 animate-fade-in">
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">
              About This Episode
            </p>
            <p className="text-foreground/85 leading-relaxed text-base md:text-lg">
              {episode.description}
            </p>
          </section>

          <Separator className="mb-10" />

          {/* ── Guest Bio ── */}
          <section className="mb-12 animate-fade-in">
            <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">
              About the Guest
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {episode.guestBio}
            </p>
          </section>

          {/* ── Prev / Next navigation ── */}
          {(prevEpisode || nextEpisode) && (
            <>
              <Separator className="mb-10" />
              <nav
                aria-label="Episode navigation"
                className="flex flex-col sm:flex-row gap-4"
              >
                {/* Previous */}
                {prevEpisode ? (
                  <Link
                    to={`/episodes/${prevEpisode.slug}`}
                    className="flex-1 group bg-card border border-border rounded-xl p-5 hover:border-primary/40 hover:glow-sm transition-all"
                  >
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1 group-hover:text-primary transition-colors">
                      <ArrowLeft className="w-3.5 h-3.5" />
                      Previous Episode
                    </span>
                    <p className="font-display font-semibold text-sm leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {prevEpisode.title}
                    </p>
                  </Link>
                ) : (
                  <div className="flex-1" />
                )}

                {/* Next */}
                {nextEpisode ? (
                  <Link
                    to={`/episodes/${nextEpisode.slug}`}
                    className="flex-1 group bg-card border border-border rounded-xl p-5 hover:border-primary/40 hover:glow-sm transition-all text-right"
                  >
                    <span className="flex items-center justify-end gap-1.5 text-xs text-muted-foreground mb-1 group-hover:text-primary transition-colors">
                      Next Episode
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                    <p className="font-display font-semibold text-sm leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {nextEpisode.title}
                    </p>
                  </Link>
                ) : (
                  <div className="flex-1" />
                )}
              </nav>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EpisodeDetail;
