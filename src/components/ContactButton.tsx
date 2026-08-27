import React from "react";

interface ContactButtonProps {
  className?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ className = "" }) => {
  return (
    <a
      href="#contact"
      className={`group relative inline-block rounded-full font-medium uppercase tracking-[0.2em] text-sm overflow-hidden ${className}`}
    >
      {/* Background with subtle gradient */}
      <span
        className="absolute inset-0 bg-gradient-to-r from-[#1a1a1f] via-[#23232a] to-[#1a1a1f] border border-[#c9a84c]/40 rounded-full transition-all duration-500 group-hover:border-[#c9a84c]/70"
      />
      {/* Gold shimmer on hover */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#c9a84c]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      <span className="relative z-10 flex items-center gap-2 px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-[#d4d4d8] group-hover:text-[#f4f4f5] transition-colors duration-300">
        <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]/70 group-hover:bg-[#c9a84c] transition-colors duration-300" />
        Contact Me
      </span>
    </a>
  );
};

export default ContactButton;
