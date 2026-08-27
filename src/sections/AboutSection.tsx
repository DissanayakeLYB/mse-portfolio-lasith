import React from "react";
import {
  Atom,
  Hexagon,
  Grid3x3,
  Magnet as MagnetIcon,
} from "lucide-react";
import FadeIn from "../components/FadeIn";
import ContactButton from "../components/ContactButton";
import AnimatedText from "../components/AnimatedText";

const aboutText =
  "I'm an MSc researcher in computational materials science, focused on magnetoelectric nanocarriers for targeted cancer therapy. My work combines finite element modeling, smart nanoparticle design, and multiphysics simulation in COMSOL Multiphysics to control tumor vasoconstriction with precision. I integrate Machine Learning with Materials Science and Materials Informatics to solve complex engineering challenges.";

const experiences = [
  {
    title: "Research Assistant",
    date: "06/2026 – Present",
    org: "Department of Materials Science and Engineering, University of Moratuwa",
    items: [
      "Conducting computational research on targeted cancer therapy",
      "Developing multiphysics simulations using COMSOL Multiphysics",
      "Designing and optimizing magnetoelectric nanocarrier architectures",
    ],
  },
  {
    title: "Temporary Instructor",
    date: "08/2025 – 05/2026",
    org: "Department of Materials Science and Engineering, University of Moratuwa",
    items: [
      "Facilitated practical sessions and laboratory experiments",
      "Provided academic support and mentorship for coursework",
      "Assisted academic staff with contribution for ongoing projects",
    ],
  },
  {
    title: "R&D Intern",
    date: "11/2023 – 05/2024",
    org: "Michelin Lanka (Pvt) Ltd – Casting Product Division",
    items: [
      "Experienced in Casting Manufacturing Practices and Procedures",
      "Participated in Training sessions and Managerial Meetings",
      "Conducted Waste (Fine Dust) Reduction projects",
    ],
  },
];

const decorations = [
  {
    Icon: Atom,
    position: "top-[4%] left-[1%] sm:left-[2%] md:left-[4%]",
    size: "w-[120px] sm:w-[160px] md:w-[210px]",
    delay: 0.1,
    x: -80,
  },
  {
    Icon: Grid3x3,
    position: "bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]",
    size: "w-[100px] sm:w-[140px] md:w-[180px]",
    delay: 0.25,
    x: -80,
  },
  {
    Icon: Hexagon,
    position: "top-[4%] right-[1%] sm:right-[2%] md:right-[4%]",
    size: "w-[120px] sm:w-[160px] md:w-[210px]",
    delay: 0.15,
    x: 80,
  },
  {
    Icon: MagnetIcon,
    position: "bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]",
    size: "w-[130px] sm:w-[170px] md:w-[220px]",
    delay: 0.3,
    x: 80,
  },
];

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 lg:px-16 py-20 relative"
    >
      {/* Decorative icons — very subtle */}
      {decorations.map(({ Icon, position, size, delay, x }, i) => (
        <div
          key={i}
          className={`absolute ${position} ${size} text-[#27272f]`}
        >
          <FadeIn delay={delay} x={x} y={0} duration={0.9}>
            <Icon className="w-full h-full" strokeWidth={0.75} />
          </FadeIn>
        </div>
      ))}

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

      {/* Contact button */}
      <ContactButton />

      {/* Professional Experience */}
      <div className="w-full max-w-5xl mt-20 sm:mt-28 md:mt-36">
        <FadeIn delay={0} y={30}>
          <h2
            className="font-black text-[#f4f4f5] uppercase leading-none tracking-[-0.03em] mb-12 sm:mb-16"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 90px)",
              fontFamily: "'Kanit', sans-serif",
            }}
          >
            Experience
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-8">
          {experiences.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="relative pl-8 border-l border-[#27272f]">
                {/* Timeline dot — gold accent */}
                <div className="absolute -left-[5px] top-[6px] w-[10px] h-[10px] rounded-full bg-[#c9a84c]/70 shadow-[0_0_0_4px_rgba(201,168,76,0.08)]" />

                <div className="flex flex-wrap justify-between items-baseline gap-x-6 gap-y-1">
                  <h3
                    className="text-[#e4e4e7] font-medium"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
                    }}
                  >
                    {exp.title}
                  </h3>
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
                <p
                  className="text-[#c9a84c]/70 font-medium mt-1 mb-3"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "clamp(0.82rem, 1.3vw, 0.92rem)",
                  }}
                >
                  {exp.org}
                </p>
                <ul className="flex flex-col gap-1.5">
                  {exp.items.map((item, j) => (
                    <li
                      key={j}
                      className="text-[#71717a] relative pl-4"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "clamp(0.82rem, 1.3vw, 0.92rem)",
                      }}
                    >
                      <span className="absolute left-0 text-[#c9a84c]/50">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
