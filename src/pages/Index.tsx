import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EpisodesSection from "@/components/EpisodesSection";
import MissionSection from "@/components/MissionSection";
import SubscribeSection from "@/components/SubscribeSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
