import { motion, useScroll, useTransform } from 'motion/react';

interface FallingLeafProps {
  delay?: number;
  side?: 'left' | 'right';
}

export function FallingLeaf({ delay = 0, side = 'right' }: FallingLeafProps) {
  const { scrollY } = useScroll();

  const startDelay = delay * 100;
  const leafId = `leaf-${side}-${delay}`;

  const y = useTransform(
    scrollY,
    [startDelay, startDelay + 300, startDelay + 600, startDelay + 1000],
    [-100, 150, 400, 700]
  );

  const x = useTransform(
    scrollY,
    [startDelay, startDelay + 200, startDelay + 400, startDelay + 600, startDelay + 800, startDelay + 1000],
    [0, side === 'right' ? -30 : 30, side === 'right' ? 15 : -15, side === 'right' ? -20 : 20, side === 'right' ? 10 : -10, side === 'right' ? -15 : 15]
  );

  const rotate = useTransform(
    scrollY,
    [startDelay, startDelay + 250, startDelay + 500, startDelay + 750, startDelay + 1000],
    [0, -12, 15, -10, 18]
  );

  const opacity = useTransform(
    scrollY,
    [startDelay, startDelay + 100, startDelay + 500, startDelay + 800, startDelay + 1000],
    [0, 1, 1, 0.6, 0]
  );

  const scale = useTransform(
    scrollY,
    [startDelay, startDelay + 500, startDelay + 1000],
    [0.8, 1.1, 0.9]
  );

  return (
    <motion.div
      className="fixed pointer-events-none z-30 will-change-transform"
      initial={{ opacity: 0 }}
      style={{
        y,
        x,
        rotate,
        opacity,
        scale,
        top: 0,
        [side]: side === 'right' ? '8%' : '12%',
      }}
    >
      <svg
        width="50"
        height="50"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
        style={{
          filter: 'drop-shadow(0 4px 12px rgba(16, 185, 129, 0.4)) blur(0.3px)',
        }}
      >
        <path
          d="M20 5C20 5 15 10 12 15C9 20 8 25 10 30C12 35 18 38 20 38C20 38 20 25 20 20C20 15 20 5 20 5Z"
          fill={`url(#${leafId}-gradient1)`}
          opacity="0.95"
        />
        <path
          d="M20 5C20 5 25 10 28 15C31 20 32 25 30 30C28 35 22 38 20 38C20 38 20 25 20 20C20 15 20 5 20 5Z"
          fill={`url(#${leafId}-gradient2)`}
          opacity="0.9"
        />
        <line
          x1="20"
          y1="5"
          x2="20"
          y2="38"
          stroke="#047857"
          strokeWidth="1.5"
          opacity="0.7"
        />
        <defs>
          <linearGradient id={`${leafId}-gradient1`} x1="12" y1="5" x2="20" y2="38" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="50%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
          <linearGradient id={`${leafId}-gradient2`} x1="28" y1="5" x2="20" y2="38" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6ee7b7" />
            <stop offset="50%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}

export function FallingLeaves() {
  return (
    <div className="hidden md:block">
      <FallingLeaf side="right" delay={0} />
      <FallingLeaf side="left" delay={2} />
      <FallingLeaf side="right" delay={4} />
    </div>
  );
}
