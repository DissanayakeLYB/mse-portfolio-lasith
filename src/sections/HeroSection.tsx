import React from "react";
import FadeIn from "../components/FadeIn";
import ContactButton from "../components/ContactButton";

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col overflow-x-clip relative">
      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav className="flex items-center justify-between px-6 md:px-10 lg:px-16 pt-6 md:pt-8 w-full">
          {/* Logo / Monogram */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full border border-[#c9a84c]/40 flex items-center justify-center text-[#c9a84c] text-sm font-semibold tracking-wide transition-all duration-300 group-hover:border-[#c9a84c]/70 group-hover:bg-[#c9a84c]/5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              LD
            </div>
          </a>

          <div className="flex items-center gap-8 md:gap-12">
            {["About", "Research", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[#71717a] font-medium uppercase tracking-[0.15em] text-xs md:text-sm lg:text-[0.85rem] hover:text-[#d4d4d8] transition-colors duration-300"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </FadeIn>

      {/* Main Content — Name, Title, Portrait */}
      <div className="flex-1 flex items-center px-6 md:px-10 lg:px-16 w-full">
        <div className="max-w-[1400px] w-full mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-16 pt-10 md:pt-0">
          {/* Left — Name & Credentials */}
          <div className="flex flex-col gap-5 md:gap-7 flex-1 min-w-0">
            <FadeIn delay={0.1} y={30}>
              <div>
                <h1
                  className="hero-heading font-black uppercase tracking-[-0.03em] leading-[0.88]"
                  style={{
                    fontSize: "clamp(2.8rem, 7vw, 6rem)",
                    fontFamily: "'Kanit', sans-serif",
                  }}
                >
                  Lasith
                </h1>
                <h1
                  className="hero-heading font-black uppercase tracking-[-0.03em] leading-[0.88]"
                  style={{
                    fontSize: "clamp(2.8rem, 7vw, 6rem)",
                    fontFamily: "'Kanit', sans-serif",
                  }}
                >
                  Dissanayake
                </h1>
              </div>
            </FadeIn>

            <FadeIn delay={0.25} y={25}>
              <div className="flex flex-col gap-3">
                <p
                  className="text-[#c9a84c] font-semibold uppercase tracking-[0.2em]"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "clamp(0.65rem, 1.1vw, 0.85rem)",
                  }}
                >
                  MSc (Research) Candidate
                </p>
                <div className="w-12 h-[1px] bg-[#c9a84c]/30" />
              </div>
            </FadeIn>

            <FadeIn delay={0.35} y={25}>
              <p
                className="text-[#d4d4d8] font-light leading-relaxed max-w-xl"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(0.9rem, 1.3vw, 1.1rem)",
                }}
              >
                Computational Materials Science &amp; Engineering
              </p>
            </FadeIn>

            <FadeIn delay={0.45} y={25}>
              <p
                className="text-[#71717a] leading-snug"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(0.78rem, 1.1vw, 0.9rem)",
                }}
              >
                Department of Materials Science and Engineering
                <br />
                University of Moratuwa
              </p>
            </FadeIn>

            <FadeIn delay={0.55} y={25}>
              <div className="flex items-center gap-2.5 mt-1">
                <span className="inline-block w-[6px] h-[6px] rounded-full bg-[#c9a84c]/60" />
                <p
                  className="text-[#52525b] font-medium uppercase tracking-[0.12em]"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "clamp(0.6rem, 0.85vw, 0.72rem)",
                  }}
                >
                  Research Assistant — DMSE
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right — Portrait */}
          <FadeIn delay={0.3} y={40}>
            <div className="relative flex-shrink-0">
              {/* Subtle ring accent */}
              <div className="absolute inset-0 rounded-full border border-[#c9a84c]/10 scale-[1.08]" />
              <div className="w-[220px] sm:w-[280px] md:w-[340px] lg:w-[400px] aspect-square rounded-full overflow-hidden border border-[#27272f]">
                <img
                  src="/images/profile.png"
                  alt="Lasith Dissanayake — Materials Science Engineer"
                  className="w-full h-full object-cover grayscale-[30%] contrast-[1.05] brightness-[0.95]"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Bottom Bar */}
      <FadeIn delay={0.6} y={20}>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0 pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 lg:px-16 relative z-20 border-t border-[#1e1e24] pt-5">
          <div className="flex flex-col gap-1.5">
            <p
              className="text-[#52525b] font-medium"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "clamp(0.65rem, 0.9vw, 0.78rem)",
              }}
            >
              lasithdissanayake.official@gmail.com
            </p>
            <p
              className="text-[#3f3f46]"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "clamp(0.55rem, 0.8vw, 0.68rem)",
              }}
            >
              Moratuwa, Sri Lanka
            </p>
          </div>
          <ContactButton />
        </div>
      </FadeIn>
    </section>
  );
};

export default HeroSection;
