import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "../components/FadeIn";
import ViewPublicationButton from "../components/ViewPublicationButton";

const projects = [
  {
    num: "01",
    category: "Final Year Project",
    year: "2025",
    name: "ML-Based Optimization of CZTS Photovoltaic Parameters",
    description:
      "Developed empirical equations for 6 photovoltaic parameters using Machine Learning models, validated with SCAPS-1D simulation. Created a 2nd degree equation for photovoltaic bandgap with compositional ratios of Cu, Zn and Sn.",
    tags: ["Machine Learning", "Photovoltaics", "CZTS", "Simulation"],
    col1Img1:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=460&fit=crop",
    col1Img2:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&h=680&fit=crop",
    col2Img:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=1140&fit=crop",
  },
  {
    num: "02",
    category: "Research",
    year: "2024",
    name: "Offshore Substation Corrosion Protection System",
    description:
      "Designed corrosion protection system using COMSOL Multiphysics simulations. Suggested optimal cathodic protection design for offshore substation platform legs.",
    tags: ["COMSOL", "Corrosion Protection", "Offshore Engineering"],
    col1Img1:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&h=460&fit=crop",
    col1Img2:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=680&fit=crop",
    col2Img:
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&h=1140&fit=crop",
  },
  {
    num: "03",
    category: "Internship",
    year: "2024",
    name: "Fine Dust Waste Reduction Project",
    description:
      "Improved waste reuse at Michelin Lanka CPD plant. Two-phase project: determining optimal fine dust addition to sand mixture, then analyzing properties and defects before/after implementation.",
    tags: ["Waste Management", "Industrial", "Materials Analysis"],
    col1Img1:
      "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=800&h=460&fit=crop",
    col1Img2:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=680&fit=crop",
    col2Img:
      "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=800&h=1140&fit=crop",
  },
  {
    num: "04",
    category: "Internship",
    year: "2024",
    name: "BOM Optimization System",
    description:
      "Optimized Bill of Materials considering chemical composition, availability, and cost. Created MS Excel document with VBA for monitoring and optimization, implementing scoring system for multiple BOMs.",
    tags: ["Optimization", "VBA", "Excel", "Industrial"],
    col1Img1:
      "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=800&h=460&fit=crop",
    col1Img2:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=680&fit=crop",
    col2Img:
      "https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=800&h=1140&fit=crop",
  },
];

const totalCards = projects.length;

interface ProjectCardProps {
  project: (typeof projects)[number];
  index: number;
  scrollProgress: any;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  scrollProgress,
}) => {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;

  const scale = useTransform(
    scrollProgress,
    [index / totalCards, (index + 1) / totalCards],
    [1, targetScale]
  );

  return (
    <div
      className="h-[85vh] relative"
      style={{ top: `${index * 28}px` }}
    >
      <motion.div
        style={{ scale }}
        className="sticky top-24 md:top-32 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-[#27272f] bg-[#111114] p-4 sm:p-6 md:p-8"
      >
        {/* Top row */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span
              className="text-[#1e1e24] font-black leading-none"
              style={{
                fontSize: "clamp(2rem, 6vw, 60px)",
                fontFamily: "'Kanit', sans-serif",
              }}
            >
              {project.num}
            </span>
            <div className="flex flex-col gap-1">
              <span
                className="text-[#c9a84c]/60 font-medium uppercase tracking-[0.15em] text-xs sm:text-xs"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {project.category}
              </span>
              <h3
                className="text-[#d4d4d8] font-medium"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(0.9rem, 1.6vw, 1.3rem)",
                }}
              >
                {project.name}
              </h3>
              <span
                className="text-[#52525b] font-medium"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "clamp(0.62rem, 0.85vw, 0.75rem)",
                }}
              >
                {project.year}
              </span>
            </div>
          </div>
          <ViewPublicationButton />
        </div>

        {/* Description */}
        <p
          className="text-[#71717a] leading-relaxed mb-4 sm:mb-6 max-w-3xl"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(0.82rem, 1.2vw, 0.92rem)",
          }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-[#18181c] text-[#71717a] border border-[#1e1e24]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {/* Left column — 40% */}
          <div className="col-span-2 flex flex-col gap-3 sm:gap-4 md:gap-6">
            <img
              src={project.col1Img1}
              alt={`${project.name} — figure 1`}
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover brightness-[0.85]"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            />
            <img
              src={project.col1Img2}
              alt={`${project.name} — figure 2`}
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover brightness-[0.85]"
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            />
          </div>
          {/* Right column — 60% */}
          <div className="col-span-3">
            <img
              src={project.col2Img}
              alt={`${project.name} — hero figure`}
              className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover brightness-[0.85]"
              style={{ minHeight: "clamp(300px, 40vw, 600px)" }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ResearchProjects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  return (
    <div
      id="projects"
      ref={containerRef}
      className="bg-surface rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 pt-20 sm:pt-24 md:pt-32 pb-20 sm:pb-28 md:pb-32"
    >
      <div className="px-5 sm:px-8 md:px-10 lg:px-16 mb-16 sm:mb-20 md:mb-28">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-[-0.03em] text-center"
            style={{
              fontSize: "clamp(3rem, 12vw, 160px)",
              fontFamily: "'Kanit', sans-serif",
            }}
          >
            Projects
          </h2>
        </FadeIn>
      </div>

      <div className="px-5 sm:px-8 md:px-10 lg:px-16">
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            project={project}
            index={i}
            scrollProgress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  );
};

export default ResearchProjects;
