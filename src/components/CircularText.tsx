import React, { useEffect } from "react";
import {
  motion,
  useAnimation,
  useMotionValue,
  MotionValue,
  Transition,
} from "motion/react";
interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: "slowDown" | "speedUp" | "pause" | "goBonkers";
  className?: string;
  startAnimation?: boolean;
  size?: number;
  fontSize?: number;
  radius?: number;
}

const getRotationTransition = (
  duration: number,
  from: number,
  loop: boolean = true,
) => ({
  from,
  to: from + 360,
  ease: "linear" as const,
  duration,
  type: "tween" as const,
  repeat: loop ? Infinity : 0,
});

const getTransition = (duration: number, from: number) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: "spring" as const,
    damping: 20,
    stiffness: 300,
  },
});

const CircularText: React.FC<CircularTextProps> = ({
  text,
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
  startAnimation = false,
  size = 200,
  fontSize = 24,
  radius = 100,
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation: MotionValue<number> = useMotionValue(0);

  useEffect(() => {
    if (!startAnimation) return;

    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      opacity: 1,
      transition: {
        ...getTransition(spinDuration, start),
        opacity: { duration: 0.5 },
      },
    });
  }, [startAnimation, spinDuration, text, onHover, controls, rotation]);

  const handleHoverStart = () => {
    const start = rotation.get();

    if (!onHover) return;

    let transitionConfig: ReturnType<typeof getTransition> | Transition;
    let scaleVal = 1;

    switch (onHover) {
      case "slowDown":
        transitionConfig = getTransition(spinDuration * 2, start);
        break;
      case "speedUp":
        transitionConfig = getTransition(spinDuration / 4, start);
        break;
      case "pause":
        transitionConfig = {
          rotate: { type: "spring", damping: 20, stiffness: 300 },
          scale: { type: "spring", damping: 20, stiffness: 300 },
        };
        break;
      case "goBonkers":
        transitionConfig = getTransition(spinDuration / 20, start);
        scaleVal = 0.8;
        break;
      default:
        transitionConfig = getTransition(spinDuration, start);
    }

    controls.start({
      rotate: start + 360,
      scale: scaleVal,
      transition: transitionConfig,
    });
  };

  const handleHoverEnd = () => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    });
  };

  return (
    <motion.div
      className={`rounded-full relative font-black text-white text-center cursor-pointer ${className}`}
      style={{
        rotate: rotation,
        width: `${size}px`,
        height: `${size}px`,
        transformOrigin: "center center",
      }}
      initial={{ rotate: 0, scale: 0, opacity: 0 }}
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {letters.map((letter, i) => {
        const rotationDeg = (360 / letters.length) * i;
        const angleRad = (rotationDeg * Math.PI) / 180;
        const x = Math.sin(angleRad) * radius;
        const y = -Math.cos(angleRad) * radius;
        const transform = `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${rotationDeg}deg)`;

        return (
          <span
            key={i}
            className="absolute inline-block transition-all duration-500 ease-[cubic-bezier(0,0,0,1)]"
            style={{
              transform,
              WebkitTransform: transform,
              fontSize: `${fontSize}px`,
              left: "50%",
              top: "50%",
            }}
          >
            {letter}
          </span>
        );
      })}
    </motion.div>
  );
};

export default CircularText;
