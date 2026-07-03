import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EpisodesSection from "@/components/EpisodesSection";
import MissionSection from "@/components/MissionSection";
import SubscribeSection from "@/components/SubscribeSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Unlimited Agents — AI Founders Podcast</title>
        <meta name="description" content="Conversations with founders building the future of AI. From autonomous agents to transformative tools." />
        <meta property="og:title" content="Unlimited Agents — AI Founders Podcast" />
        <meta property="og:description" content="Conversations with founders building the future of AI. From autonomous agents to transformative tools." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Unlimited Agents — AI Founders Podcast" />
        <meta name="twitter:description" content="Conversations with founders building the future of AI. From autonomous agents to transformative tools." />
      </Helmet>
      <HeroSection />
      <AboutSection />
      <EpisodesSection />
      <MissionSection />
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default Index;
