"use client";
import React, { useState, useEffect, useRef } from "react";

export const TextHoverEffect = ({ text }: { text: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const isInside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (isInside) {
        setHovered(true);
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center group overflow-visible"
    >
      {/* Base Layer: Faded stroke outline just like the original layout */}
      <h1 className="text-[4.5vw] sm:text-[4vw] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] uppercase leading-[1.05] tracking-[0.05em] md:tracking-widest text-transparent outline-text opacity-70 relative z-10 text-center w-full whitespace-nowrap transition-opacity duration-300">
        {text}
      </h1>

      {/* Hover Layer: Gradient flashlight reveal via CSS Mask */}
      <h1
        className="absolute flex items-center justify-center text-[4.5vw] sm:text-[4vw] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] uppercase leading-[1.05] tracking-[0.05em] md:tracking-widest text-center w-full whitespace-nowrap pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(90deg, #e4ff4e, #ccf035, #e4ff4e)',
          backgroundSize: '100% 100%',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: 'transparent',
          WebkitMaskImage: `radial-gradient(circle 150px at ${position.x}px ${position.y}px, black 20%, transparent 100%)`,
          maskImage: `radial-gradient(circle 150px at ${position.x}px ${position.y}px, black 20%, transparent 100%)`,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.2s ease',
          zIndex: 20,
          left: 0,
          top: 0,
          bottom: 0,
          right: 0,
        }}
      >
        {text}
      </h1>
    </div>
  );
};
