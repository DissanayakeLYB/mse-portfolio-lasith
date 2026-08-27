import React from "react";
import FadeIn from "../components/FadeIn";

const items = [
  {
    num: "01",
    name: "Computational Materials Science",
    desc: "Integrating Machine Learning with Materials Science to solve complex engineering challenges through data-driven approaches and computational modeling.",
  },
  {
    num: "02",
    name: "Magnetoelectric Nanoparticle Design",
    desc: "Designing magnetoelectric nanocarriers with tailored material and geometric properties for targeted biomedical response in cancer therapy.",
  },
  {
    num: "03",
    name: "Multiphysics Simulation (COMSOL)",
    desc: "Coupling magnetic, electric, and mechanical fields to predict nanocarrier behavior in biological tissue environments.",
  },
  {
    num: "04",
    name: "Materials Informatics",
    desc: "Applying machine learning models to optimize photovoltaic parameters and predict material properties from compositional data.",
  },
];

const ResearchFocus: React.FC = () => {
  return (
    <section
      id="research"
      className="bg-surface rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 lg:px-16 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{
            fontSize: "clamp(3rem, 12vw, 160px)",
            fontFamily: "'Kanit', sans-serif",
          }}
        >
          Research Focus
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col">
        {items.map((item, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="flex items-start gap-6 sm:gap-8 md:gap-10 py-8 sm:py-10 md:py-12 border-b border-[#1e1e24] last:border-b-0 group">
              {/* Number — subtle muted */}
              <span
                className="text-[#27272f] font-black flex-shrink-0 leading-none transition-colors duration-500 group-hover:text-[#c9a84c]/20"
                style={{
                  fontSize: "clamp(3rem, 10vw, 140px)",
                  fontFamily: "'Kanit', sans-serif",
                }}
              >
                {item.num}
              </span>
              <div className="flex flex-col gap-2 pt-2">
                <h3
                  className="font-medium uppercase text-[#d4d4d8] tracking-wide"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "clamp(1rem, 2.2vw, 1.8rem)",
                  }}
                >
                  {item.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl text-[#52525b]"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "clamp(0.85rem, 1.5vw, 1.1rem)",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ResearchFocus;
