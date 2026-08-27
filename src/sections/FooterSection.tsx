import React from "react";
import FadeIn from "../components/FadeIn";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/DissanayakeLYB",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
        <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.4 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.1-.5 2V21" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:lasithdissanayake.official@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
        <path d="M4 4h16v16H4z" opacity="0" />
        <path d="M3.5 5.5h17v13h-17z" />
        <path d="m4 6 8 7 8-7" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/lasith-dissanayake/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
        <path d="M5 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
        <path d="M4.8 8.8h.4v9.7h-.4z" />
        <path d="M4.4 8.8h3.2v9.7H4.4z" />
        <path d="M9.7 8.8h3v1.4s1-1.7 3.4-1.7c2.5 0 4 1.5 4 4.8v5.2h-3.2v-4.7c0-1.4-.5-2.4-1.8-2.4-1 0-1.6.7-1.8 1.3-.1.2-.1.6-.1.9v4.9H9.7Z" />
      </svg>
    ),
  },
];

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-surface border-t border-[#1e1e24] px-5 sm:px-8 md:px-10 lg:px-16 py-8">
      <FadeIn delay={0} y={10}>
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <p
            className="text-[#3f3f46]"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(0.65rem, 0.9vw, 0.78rem)",
            }}
          >
            © 2026 — Lasith Dissanayake
          </p>
          <nav className="flex gap-1 flex-wrap">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#52525b] px-3 py-1.5 rounded-md transition-all duration-300 hover:text-[#c9a84c]/70 hover:bg-[#c9a84c]/5"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "clamp(0.7rem, 1vw, 0.8rem)",
                }}
              >
                {link.icon}
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </FadeIn>
    </footer>
  );
};

export default FooterSection;
