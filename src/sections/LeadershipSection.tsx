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
            className="hero-heading font-black uppercase leading-none tracking-[-0.03em] mb-10 sm:mb-14"
            style={{
              fontSize: "clamp(2.5rem, 9vw, 100px)",
              fontFamily: "'Kanit', sans-serif",
            }}
          >
            Leadership
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {activities.map((item, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="group flex items-start gap-4 p-5 rounded-xl border border-[#1e1e24] bg-[#111114] transition-all duration-500 hover:border-[#c9a84c]/15">
                <span
                  className="text-[#27272f] font-black leading-none mt-0.5 flex-shrink-0 transition-colors duration-500 group-hover:text-[#c9a84c]/15"
                  style={{
                    fontFamily: "'Kanit', sans-serif",
                    fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  }}
                >
                  0{i + 1}
                </span>
                <div className="flex flex-col gap-0.5">
                  <h3
                    className="text-[#d4d4d8] font-medium"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[#71717a]"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "clamp(0.78rem, 1.1vw, 0.88rem)",
                    }}
                  >
                    {item.org}
                  </p>
                  <span
                    className="text-[#3f3f46]"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "clamp(0.62rem, 0.85vw, 0.72rem)",
                    }}
                  >
                    {item.date}
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

export default LeadershipSection;
