"use client";
import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion, MotionValue, useSpring } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Adding a spring for smoother scrolling on mobile
  const smoothScrollY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.9, 1.2] : [1.05, 1];
  };

  const rotate = useTransform(smoothScrollY, [0, 1], [20, 0]);
  const rotateZ = useTransform(smoothScrollY, [0, 1], [0, 180]); // Adding rotation for the food
  const scale = useTransform(smoothScrollY, [0, 1], scaleDimensions());
  const translate = useTransform(smoothScrollY, [0, 1], [0, isMobile ? 20 : -50]);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-20 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card 
          rotate={rotate} 
          rotateZ={rotateZ} 
          translate={translate} 
          scale={scale}
          isMobile={isMobile}
        >
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  rotateZ,
  scale,
  children,
  isMobile,
}: {
  rotate: MotionValue<number>;
  rotateZ: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
  isMobile: boolean;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        rotateZ: rotateZ,
        scale,
        translateY: isMobile ? "30%" : "0%",
        boxShadow:
          "0 20px 50px rgba(0,0,0,0.3), 0 50px 100px rgba(0,0,0,0.2), inset 0 0 20px rgba(0,0,0,0.1)",
      }}
      className="max-w-[30rem] md:max-w-[42rem] -mt-12 mx-auto aspect-square w-full p-0 rounded-full shadow-2xl relative overflow-hidden flex items-center justify-center"
    >
      {children}
    </motion.div>
  );
};
