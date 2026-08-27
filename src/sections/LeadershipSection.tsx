import React from "react";
import FadeIn from "../components/FadeIn";

const activities = [
  {
    title: "Web Manager",
    org: "Society of Materials Engineering Students",
    date: "2023 – 2025",
  },
  {
    title: "Director of Public Relations",
    org: "Mora Esports Community",
    date: "2022 – 2023",
  },
  {
    title: "International Service Director",
    org: "Rotaract Club of Kandy",
    date: "2021 – 2022",
  },
  {
    title: "Treasurer",
    org: "Rotaract Club of Kandy",
    date: "2020 – 2021",
  },
];

const LeadershipSection: React.FC = () => {
  return (
    <section className="bg-surface border-t border-[#1e1e24] px-5 sm:px-8 md:px-10 lg:px-16 py-24 sm:py-32 md:py-40">
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={30}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-[-0.03em] mb-14 sm:mb-18 md:mb-22"
            style={{
              fontSize: "clamp(3rem, 10vw, 120px)",
              fontFamily: "'Kanit', sans-serif",
            }}
          >
            Leadership
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-8">
          {activities.map((item, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="relative pl-8 border-l border-[#27272f]">
                {/* Timeline dot — gold accent */}
                <div className="absolute -left-[5px] top-[6px] w-[10px] h-[10px] rounded-full bg-[#c9a84c]/70 shadow-[0_0_0_4px_rgba(201,168,76,0.08)]" />

                <div className="flex flex-wrap justify-between items-baseline gap-x-6 gap-y-1">
                  <h3
                    className="text-[#d4d4d8] font-medium"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "clamp(1rem, 2vw, 1.2rem)",
                    }}
                  >
                    {item.title}
                  </h3>
                  <span
                    className="text-[#52525b] whitespace-nowrap"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "clamp(0.68rem, 0.9vw, 0.78rem)",
                    }}
                  >
                    {item.date}
                  </span>
                </div>
                <p
                  className="text-[#c9a84c]/60 font-medium mt-1"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "clamp(0.82rem, 1.3vw, 0.92rem)",
                  }}
                >
                  {item.org}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
