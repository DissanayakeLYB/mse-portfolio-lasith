import React from "react";

interface ViewPublicationButtonProps {
  href?: string;
  className?: string;
}

const ViewPublicationButton: React.FC<ViewPublicationButtonProps> = ({
  href = "#",
  className = "",
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-block rounded-full border border-[#c9a84c]/30 text-[#a1a1aa] font-medium uppercase tracking-[0.15em] hover:text-[#f4f4f5] transition-all duration-300 px-6 py-2.5 text-xs sm:px-8 sm:py-3 sm:text-sm ${className}`}
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <span className="relative z-10 flex items-center gap-2">
        View Publication
        <svg
          className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 17L17 7M17 7H7M17 7v10"
          />
        </svg>
      </span>
    </a>
  );
};

export default ViewPublicationButton;
