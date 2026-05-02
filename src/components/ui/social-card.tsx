"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// Types
interface SocialBoxProps {
  href: string;
  icon: React.ReactNode;
  className: string;
  delay?: string;
}

interface SocialCardProps {
  title?: string;
  description?: string;
  image?: string;
  price?: string;
  tag?: string;
  socialLinks?: Array<{
    href: string;
    icon: React.ReactNode;
    className: string;
    delay?: string;
  }>;
  className?: string;
}

// Components
const SocialBox = ({ href, icon, className, delay }: SocialBoxProps) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <div className={cn("social-box", className)} style={{ transitionDelay: delay }}>
      <span className="social-icon">{icon}</span>
    </div>
  </a>
);

export const SocialCard = ({
  title,
  description,
  image,
  price,
  tag,
  socialLinks = [],
  className,
}: SocialCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div 
      className={cn("social-card-wrapper group", className)}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="social-card">
        {image && (
          <div className="social-card-background">
            <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
          </div>
        )}
        
        <div className="social-card-content">
          {tag && <span className="social-card-tag">{tag}</span>}
          <div className="social-card-logo">{title}</div>
          {price && <div className="social-card-price">{price}</div>}
          
          <div className="social-card-description">
            {description}
          </div>
        </div>

        {socialLinks.map((link, index) => (
          <SocialBox
            key={index}
            href={link.href}
            icon={link.icon}
            className={link.className}
            delay={link.delay}
          />
        ))}
      </div>
    </motion.div>
  );
};
