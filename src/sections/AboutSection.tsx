import React from "react";
import FadeIn from "../components/FadeIn";
import AnimatedText from "../components/AnimatedText";

const aboutText =
  "I'm an MSc researcher in computational materials science, focused on magnetoelectric nanocarriers for targeted cancer therapy. My work combines finite element modeling, smart nanoparticle design, and multiphysics simulation in COMSOL Multiphysics to control tumor vasoconstriction with precision. I integrate Machine Learning with Materials Science and Materials Informatics to solve complex engineering challenges.";

const experiences = [
  {
    title: "Research Assistant",
    date: "2026",
    org: "DMSE, University of Moratuwa",
    current: true,
  },
  {
    title: "Temporary Instructor",
    date: "2025 – 2026",
    org: "DMSE, University of Moratuwa",
    current: false,
  },
  {
    title: "R&D Intern",
    date: "2023 – 2024",
    org: "Michelin Lanka – Casting Product Division",
    current: false,
  },
];

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 lg:px-16 py-20 relative"
    >
      {/* Heading */}
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-10 sm:mb-14 md:mb-16"
          style={{
            fontSize: "clamp(3rem, 12vw, 160px)",
            fontFamily: "'Kanit', sans-serif",
          }}
        >
          About me
        </h2>
      </FadeIn>

      {/* Animated paragraph */}
      <AnimatedText
        text={aboutText}
        className="text-[#a1a1aa] font-light text-center leading-relaxed max-w-[560px] mb-16 sm:mb-20 md:mb-24"
        style={{
          fontSize: "clamp(0.95rem, 1.8vw, 1.2rem)",
          fontFamily: "'Inter', sans-serif",
        }}
      />

      {/* Experience — editorial two-column */}
      <div className="w-full max-w-4xl mt-8 sm:mt-12 md:mt-16">
        <FadeIn delay={0} y={30}>
          <h2
            className="font-black text-[#f4f4f5] uppercase leading-none tracking-[-0.03em] mb-10 sm:mb-14"
            style={{
              fontSize: "clamp(2.2rem, 7vw, 80px)",
              fontFamily: "'Kanit', sans-serif",
            }}
          >
            Experience
          </h2>
        </FadeIn>

        <div className="flex flex-col">
          {experiences.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-0 py-5 sm:py-6 border-b border-[#1e1e24] last:border-b-0">
                {/* Date column */}
                <div className="sm:w-36 md:w-44 flex-shrink-0 flex items-center gap-2.5">
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${
                      exp.current ? "bg-[#c9a84c]" : "bg-[#27272f]"
                    }`}
                  />
                  <span
                    className="text-[#52525b] whitespace-nowrap"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "clamp(0.68rem, 0.9vw, 0.78rem)",
                    }}
                  >
                    {exp.date}
                  </span>
                </div>

                {/* Role column */}
                <div className="flex-1 flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
                  <h3
                    className="text-[#e4e4e7] font-medium"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                    }}
                  >
                    {exp.title}
                  </h3>
                  <span
                    className="text-[#c9a84c]/40"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "clamp(0.78rem, 1.1vw, 0.88rem)",
                    }}
                  >
                    — {exp.org}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
