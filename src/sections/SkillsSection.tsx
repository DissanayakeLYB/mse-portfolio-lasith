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
    <section className="bg-surface px-5 sm:px-8 md:px-10 lg:px-16 py-20 sm:py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={30}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-[-0.03em] mb-14 sm:mb-18 md:mb-22"
            style={{
              fontSize: "clamp(3rem, 10vw, 120px)",
              fontFamily: "'Kanit', sans-serif",
            }}
          >
            Tools & Skills
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10">
          {skillGroups.map((group, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div>
                <p
                  className="uppercase tracking-[0.15em] text-[#3f3f46] mb-4"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "clamp(0.62rem, 0.9vw, 0.72rem)",
                  }}
                >
                  {group.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3.5 py-2 rounded-md border border-[#1e1e24] text-[#a1a1aa] bg-[#111114] transition-all duration-300 hover:border-[#c9a84c]/30 hover:text-[#c9a84c]/80"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "clamp(0.72rem, 1.05vw, 0.82rem)",
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
