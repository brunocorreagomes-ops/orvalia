import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticWrapperProps {
  children: React.ReactNode;
  className?: string;
  range?: number; // Distance threshold to activate magnet
  strength?: number; // Strength of attraction (multiplier, e.g. 0.2 to 0.4)
}

export default function MagneticWrapper({
  children,
  className = "",
  range = 50,
  strength = 0.35,
}: MagneticWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Motion values for hardware-accelerated coordinates
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics configuration
  const springConfig = { damping: 15, stiffness: 150, mass: 0.6 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    // Detect touch/mobile pointer to disable magnet effect
    const checkPointer = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    };
    checkPointer();
    window.addEventListener("resize", checkPointer);
    return () => window.removeEventListener("resize", checkPointer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !ref.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Center of the button
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Distance from center
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (distance < range) {
      setIsHovered(true);
      // Attract the element slightly towards mouse
      x.set(distanceX * strength);
      y.set(distanceY * strength);
    } else {
      handleMouseLeave();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block ${className}`}
    >
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
