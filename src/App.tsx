import React from "react";
import HeroSection from "./sections/HeroSection";
import MarqueeSection from "./sections/MarqueeSection";
import AboutSection from "./sections/AboutSection";
import ResearchFocus from "./sections/ResearchFocus";
import ResearchProjects from "./sections/ResearchProjects";
import LeadershipSection from "./sections/LeadershipSection";
import SkillsSection from "./sections/SkillsSection";
import FooterSection from "./sections/FooterSection";

const App: React.FC = () => {
  return (
    <div style={{ overflowX: "clip" }} className="bg-surface font-body">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ResearchFocus />
      <ResearchProjects />
      <LeadershipSection />
      <SkillsSection />
      <FooterSection />
    </div>
  );
};

export default App;
