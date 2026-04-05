import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CareerJourneySection from "@/components/CareerJourneySection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import SmoothScroll from "@/components/SmoothScroll";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="dark">
      <div className="bg-background text-foreground min-h-screen relative">
        <AnimatedBackground />
        <SmoothScroll>
          <Navbar />
          <HeroSection />
          <AboutSection />
          <CareerJourneySection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </SmoothScroll>
      </div>
    </div>
  );
};

export default Index;
