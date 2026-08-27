import React from "react";
import FadeIn from "../components/FadeIn";

const skillGroups = [
  {
    title: "Simulation",
    skills: ["LAMMPS", "COMSOL"],
  },
  {
    title: "Languages",
    skills: ["Python", "C / C++", "MATLAB"],
  },
  {
    title: "ML / Data",
    skills: ["PyTorch", "NumPy", "Pandas"],
  },
  {
    title: "CAD",
    skills: ["AutoCAD", "SolidEdge", "Blender"],
  },
  {
    title: "Tools",
    skills: ["Git", "Linux", "LaTeX"],
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section className="bg-surface border-t border-[#1e1e24] px-5 sm:px-8 md:px-10 lg:px-16 py-24 sm:py-32 md:py-40">
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={30}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-[-0.03em] mb-10 sm:mb-14"
            style={{
              fontSize: "clamp(2.5rem, 9vw, 100px)",
              fontFamily: "'Kanit', sans-serif",
            }}
          >
            Tools & Skills
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-6">
          {skillGroups.map((group, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className="text-[#3f3f46] uppercase tracking-[0.12em] flex-shrink-0 w-20 sm:w-24"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "clamp(0.62rem, 0.85vw, 0.7rem)",
                  }}
                >
                  {group.title}
                </span>
                <div className="h-3 w-[1px] bg-[#1e1e24] flex-shrink-0 hidden sm:block" />
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-1.5 rounded-full text-[#a1a1aa] bg-[#111114] border border-[#1e1e24] transition-all duration-300 hover:border-[#c9a84c]/25 hover:text-[#c9a84c]/80"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "clamp(0.72rem, 1vw, 0.82rem)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
