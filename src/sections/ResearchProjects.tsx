import React from "react";
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
    img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=500&fit=crop",
  },
  {
    num: "02",
    category: "Research",
    year: "2024",
    name: "Offshore Substation Corrosion Protection System",
    description:
      "Designed corrosion protection system using COMSOL Multiphysics simulations. Suggested optimal cathodic protection design for offshore substation platform legs.",
    tags: ["COMSOL", "Corrosion Protection", "Offshore Engineering"],
    img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&h=500&fit=crop",
  },
  {
    num: "03",
    category: "Internship",
    year: "2024",
    name: "Fine Dust Waste Reduction Project",
    description:
      "Improved waste reuse at Michelin Lanka CPD plant. Two-phase project: determining optimal fine dust addition to sand mixture, then analyzing properties and defects before/after implementation.",
    tags: ["Waste Management", "Industrial", "Materials Analysis"],
    img: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=800&h=500&fit=crop",
  },
  {
    num: "04",
    category: "Internship",
    year: "2024",
    name: "BOM Optimization System",
    description:
      "Optimized Bill of Materials considering chemical composition, availability, and cost. Created MS Excel document with VBA for monitoring and optimization, implementing scoring system for multiple BOMs.",
    tags: ["Optimization", "VBA", "Excel", "Industrial"],
    img: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=800&h=500&fit=crop",
  },
];

const ResearchProjects: React.FC = () => {
  return (
    <section
      id="projects"
      className="bg-surface px-5 sm:px-8 md:px-10 lg:px-16 pt-24 sm:pt-32 md:pt-40 pb-24 sm:pb-32 md:pb-40"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-[-0.03em] text-center mb-16 sm:mb-20 md:mb-28"
            style={{
              fontSize: "clamp(3rem, 10vw, 120px)",
              fontFamily: "'Kanit', sans-serif",
            }}
          >
            Projects
          </h2>
        </FadeIn>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group rounded-2xl sm:rounded-3xl border border-[#1e1e24] bg-[#111114] overflow-hidden transition-all duration-500 hover:border-[#c9a84c]/20">
                {/* Image */}
                <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-full object-cover brightness-[0.8] transition-all duration-700 group-hover:scale-[1.03] group-hover:brightness-[0.9]"
                  />
                  {/* Number overlay */}
                  <span
                    className="absolute top-4 left-5 text-[#27272f] font-black leading-none transition-colors duration-500 group-hover:text-[#c9a84c]/20"
                    style={{
                      fontSize: "clamp(3rem, 5vw, 4.5rem)",
                      fontFamily: "'Kanit', sans-serif",
                    }}
                  >
                    {project.num}
                  </span>
                  {/* Year badge */}
                  <span
                    className="absolute top-4 right-5 px-3 py-1 rounded-full text-[10px] font-medium bg-[#09090b]/80 text-[#71717a] border border-[#27272f] backdrop-blur-sm"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {project.year}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 md:p-7">
                  <p
                    className="text-[#c9a84c]/50 font-medium uppercase tracking-[0.15em] text-[10px] mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {project.category}
                  </p>

                  <h3
                    className="text-[#d4d4d8] font-medium leading-snug mb-3"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "clamp(0.95rem, 1.8vw, 1.25rem)",
                    }}
                  >
                    {project.name}
                  </h3>

                  <p
                    className="text-[#52525b] leading-relaxed mb-4 line-clamp-3"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "clamp(0.8rem, 1.1vw, 0.88rem)",
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-medium bg-[#18181c] text-[#52525b] border border-[#1e1e24]"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <ViewPublicationButton />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchProjects;
