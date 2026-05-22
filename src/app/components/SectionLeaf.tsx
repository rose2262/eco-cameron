import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

interface LeafProps {
  containerRef: React.RefObject<HTMLDivElement>;
  delay?: number;
  startPosition?: number;
  xOffset?: number;
}

function Leaf({ containerRef, delay = 0, startPosition = 0, xOffset = 0 }: LeafProps) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end']
  });

  const adjustedProgress = useTransform(
    scrollYProgress,
    [delay, 1],
    [0, 1]
  );

  const y = useTransform(
    adjustedProgress,
    [0, 0.15, 0.3, 0.5, 0.7, 0.85, 1],
    ['-10%', '10%', '25%', '50%', '70%', '90%', '110%']
  );

  const x = useTransform(
    adjustedProgress,
    [0, 0.12, 0.25, 0.4, 0.55, 0.7, 0.85, 1],
    [
      `${xOffset}%`,
      `${xOffset - 12}%`,
      `${xOffset + 6}%`,
      `${xOffset - 10}%`,
      `${xOffset + 8}%`,
      `${xOffset - 7}%`,
      `${xOffset + 4}%`,
      `${xOffset - 5}%`
    ]
  );

  const rotate = useTransform(
    adjustedProgress,
    [0, 0.15, 0.35, 0.55, 0.75, 0.9, 1],
    [8 + delay * 10, -18, 25, -20, 22, -15, 10]
  );

  const opacity = useTransform(
    adjustedProgress,
    [0, 0.05, 0.1, 0.85, 0.95, 1],
    [0, 0.4, 1, 1, 0.6, 0]
  );

  const scale = useTransform(
    adjustedProgress,
    [0, 0.3, 0.6, 1],
    [0.8, 1.1, 1.05, 0.9]
  );

  const leafId = `sectionLeaf-${delay}-${startPosition}`;

  return (
    <motion.div
      className="absolute will-change-transform"
      style={{
        y,
        x,
        rotate,
        opacity,
        scale,
        top: `${startPosition}%`,
        right: `${8 + xOffset * 0.5}%`,
      }}
    >
      <svg
        width="120"
        height="120"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-24 h-24 md:w-36 md:h-36 lg:w-40 lg:h-40"
        style={{
          filter: 'drop-shadow(0 10px 30px rgba(16, 185, 129, 0.4)) drop-shadow(0 4px 12px rgba(52, 211, 153, 0.25))',
        }}
      >
        <path
          d="M50 10C50 10 38 18 32 28C26 38 24 48 28 58C32 68 44 75 50 75C50 75 50 55 50 45C50 35 50 10 50 10Z"
          fill={`url(#${leafId}-gradient1)`}
          opacity="0.95"
        />
        <path
          d="M50 10C50 10 62 18 68 28C74 38 76 48 72 58C68 68 56 75 50 75C50 75 50 55 50 45C50 35 50 10 50 10Z"
          fill={`url(#${leafId}-gradient2)`}
          opacity="0.92"
        />

        <path
          d="M50 10C50 10 44 20 42 30C40 40 42 50 46 55C48 58 50 60 50 60"
          stroke={`url(#${leafId}-vein1)`}
          strokeWidth="1.2"
          opacity="0.5"
          fill="none"
        />
        <path
          d="M50 10C50 10 56 20 58 30C60 40 58 50 54 55C52 58 50 60 50 60"
          stroke={`url(#${leafId}-vein2)`}
          strokeWidth="1.2"
          opacity="0.5"
          fill="none"
        />

        <line
          x1="50"
          y1="10"
          x2="50"
          y2="75"
          stroke="#047857"
          strokeWidth="2"
          opacity="0.7"
        />

        <ellipse
          cx="50"
          cy="35"
          rx="12"
          ry="8"
          fill="#10b981"
          opacity="0.15"
        />
        <ellipse
          cx="50"
          cy="50"
          rx="15"
          ry="10"
          fill="#059669"
          opacity="0.1"
        />

        <defs>
          <linearGradient id={`${leafId}-gradient1`} x1="32" y1="10" x2="50" y2="75" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6ee7b7" />
            <stop offset="30%" stopColor="#34d399" />
            <stop offset="70%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id={`${leafId}-gradient2`} x1="68" y1="10" x2="50" y2="75" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#a7f3d0" />
            <stop offset="30%" stopColor="#6ee7b7" />
            <stop offset="70%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
          <linearGradient id={`${leafId}-vein1`} x1="42" y1="20" x2="50" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#047857" />
            <stop offset="100%" stopColor="#065f46" />
          </linearGradient>
          <linearGradient id={`${leafId}-vein2`} x1="58" y1="20" x2="50" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#047857" />
            <stop offset="100%" stopColor="#065f46" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}

export function SectionLeaf() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      <Leaf containerRef={containerRef} delay={0} startPosition={0} xOffset={0} />
      <Leaf containerRef={containerRef} delay={0.15} startPosition={5} xOffset={-15} />
      <Leaf containerRef={containerRef} delay={0.3} startPosition={10} xOffset={8} />
      <Leaf containerRef={containerRef} delay={0.45} startPosition={3} xOffset={-8} />
    </div>
  );
}
