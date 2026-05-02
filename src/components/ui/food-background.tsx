"use client";

import React from "react";
import { motion } from "framer-motion";
import { Leaf, Carrot, Apple, Coffee, Citrus, Cherry, Grape, Salad } from "lucide-react";

const icons = [
  { Icon: Leaf, color: "text-green-950/60" },
  { Icon: Carrot, color: "text-orange-950/60" },
  { Icon: Apple, color: "text-red-950/60" },
  { Icon: Coffee, color: "text-amber-950/60" },
  { Icon: Citrus, color: "text-yellow-950/60" },
  { Icon: Cherry, color: "text-rose-950/60" },
  { Icon: Grape, color: "text-purple-950/60" },
  { Icon: Salad, color: "text-emerald-950/60" },
];

const FloatingIcon = ({ Icon, color, index }: { Icon: any, color: string, index: number }) => {
  const randomX = Math.random() * 100;
  const randomY = Math.random() * 100;
  const randomDelay = Math.random() * 5;
  const randomDuration = 20 + Math.random() * 30; // Slightly slower for more "density" feel
  const randomRotate = Math.random() * 360;

  return (
    <motion.div
      initial={{ 
        x: `${randomX}vw`, 
        y: `${randomY}vh`, 
        rotate: randomRotate, 
        opacity: 0 
      }}
      animate={{
        x: [
          `${randomX}vw`, 
          `${(randomX + 5) % 100}vw`, 
          `${(randomX - 5 + 100) % 100}vw`, 
          `${randomX}vw`
        ],
        y: [
          `${randomY}vh`, 
          `${(randomY + 10) % 100}vh`, 
          `${(randomY - 10 + 100) % 100}vh`, 
          `${randomY}vh`
        ],
        rotate: [randomRotate, randomRotate + 180, randomRotate + 360],
        opacity: [0.2, 0.45, 0.2], // BOOSTED OPACITY
      }}
      transition={{
        duration: randomDuration,
        repeat: Infinity,
        delay: randomDelay,
        ease: "linear",
      }}
      className={`fixed -z-10 pointer-events-none ${color}`}
    >
      <Icon size={30 + (index % 5) * 15} />
    </motion.div>
  );
};

export const FoodBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {[...Array(25)].map((_, i) => {
        const item = icons[i % icons.length];
        return (
          <FloatingIcon 
            key={i} 
            Icon={item.Icon} 
            color={item.color} 
            index={i} 
          />
        );
      })}
    </div>
  );
};

export default FoodBackground;
