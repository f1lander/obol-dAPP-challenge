/* eslint-disable @typescript-eslint/no-explicit-any -- type with mouse*/
/* eslint-disable @typescript-eslint/no-unsafe-member-access -- type with mouse*/

import {
  useMotionValue,
  useSpring,
  useMotionTemplate,
  motion,
} from "framer-motion";
import { useRef } from "react";

const ROTATION_RANGE = 20;
const HALF_ROTATION_RANGE = 20 / 2;

function HoverCard({ children }: { children: React.ReactNode }): JSX.Element {
  // Motion variants for the card
  const cardVariants = {
    initial: {
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.5 },
    },
  };

  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: any): void => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = (): void => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="mx-auto max-w-sm cursor-pointer overflow-hidden rounded-lg shadow-lg"
      initial="initial"
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={ref}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      variants={cardVariants}
      whileHover="hover"
    >
      {children}
    </motion.div>
  );
}

export default HoverCard;
