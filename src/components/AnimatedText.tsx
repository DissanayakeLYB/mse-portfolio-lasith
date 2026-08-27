import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface AnimatedCharProps {
  char: string;
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}

const AnimatedChar: React.FC<AnimatedCharProps> = ({
  char,
  index,
  total,
  scrollYProgress,
}) => {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="invisible">{char === " " ? "\u00A0" : char}</span>
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    </span>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "", style }) => {
  const ref = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = text.split("");
  const totalChars = chars.length;

  return (
    <p ref={ref} className={`relative ${className}`} style={style}>
      {chars.map((char, i) => (
        <AnimatedChar
          key={i}
          char={char}
          index={i}
          total={totalChars}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </p>
  );
};

export default AnimatedText;
