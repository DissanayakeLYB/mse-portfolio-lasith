import React, { useRef, useEffect, useState, useCallback } from "react";

const row1Images = [
  "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=840&h=540&fit=crop",
  "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=840&h=540&fit=crop",
  "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=840&h=540&fit=crop",
  "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=840&h=540&fit=crop",
  "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=840&h=540&fit=crop",
  "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=840&h=540&fit=crop",
  "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=840&h=540&fit=crop",
  "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=840&h=540&fit=crop",
  "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=840&h=540&fit=crop",
  "https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=840&h=540&fit=crop",
  "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=840&h=540&fit=crop",
];

const row2Images = [
  "https://images.unsplash.com/photo-1581093458791-9d42e3c7e117?w=840&h=540&fit=crop",
  "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=840&h=540&fit=crop",
  "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=840&h=540&fit=crop",
  "https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=840&h=540&fit=crop",
  "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=840&h=540&fit=crop",
  "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=840&h=540&fit=crop",
  "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=840&h=540&fit=crop",
  "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=840&h=540&fit=crop",
  "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=840&h=540&fit=crop",
  "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=840&h=540&fit=crop",
  "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=840&h=540&fit=crop",
];

const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  const handleScroll = useCallback(() => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const sectionTop = window.scrollY + rect.top;
    const calc = (window.scrollY - sectionTop + window.innerHeight) * 0.25;
    setOffset(calc);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div
      ref={sectionRef}
      className="bg-surface pt-20 sm:pt-28 md:pt-36 pb-8 overflow-hidden"
    >
      {/* Row 1 — moves RIGHT */}
      <div className="gap-2.5 mb-2.5">
        <div
          className="flex gap-2.5"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: "transform",
          }}
        >
          {[...row1Images, ...row1Images, ...row1Images].map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Research visualization"
              loading="lazy"
              className="rounded-xl object-cover flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-500"
              style={{ width: 400, height: 260 }}
            />
          ))}
        </div>
      </div>

      {/* Row 2 — moves LEFT */}
      <div className="gap-2.5">
        <div
          className="flex gap-2.5"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: "transform",
          }}
        >
          {[...row2Images, ...row2Images, ...row2Images].map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Research visualization"
              loading="lazy"
              className="rounded-xl object-cover flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-500"
              style={{ width: 400, height: 260 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;
