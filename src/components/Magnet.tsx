import React, { useRef, useState, useCallback } from "react";

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({
    transform: "translate3d(0px, 0px, 0px)",
    transition: inactiveTransition,
    willChange: "transform",
  });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distX = Math.abs(e.clientX - (rect.left - padding));
      const distY = Math.abs(e.clientY - (rect.top - padding));
      const distRight = Math.abs(e.clientX - (rect.right + padding));
      const distBottom = Math.abs(e.clientY - (rect.bottom + padding));

      const inHorizontalRange =
        e.clientX >= rect.left - padding && e.clientX <= rect.right + padding;
      const inVerticalRange =
        e.clientY >= rect.top - padding && e.clientY <= rect.bottom + padding;

      if (!inHorizontalRange || !inVerticalRange) return;

      const offsetX = (e.clientX - centerX) / strength;
      const offsetY = (e.clientY - centerY) / strength;

      setStyle({
        transform: `translate3d(${offsetX}px, ${offsetY}px, 0px)`,
        transition: activeTransition,
        willChange: "transform",
      });
    },
    [padding, strength, activeTransition]
  );

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: "translate3d(0px, 0px, 0px)",
      transition: inactiveTransition,
      willChange: "transform",
    });
  }, [inactiveTransition]);

  return (
    <div
      ref={ref}
      style={style}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default Magnet;
