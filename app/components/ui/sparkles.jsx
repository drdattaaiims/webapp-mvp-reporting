"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export function SparklesCore({ className, particleColor = "#00F0FF" }) {
  const controls = useAnimation();
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 100 }).map(() => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 0.5,
      duration: Math.random() * 3 + 1,
      delay: Math.random() * 2
    }));
    
    setParticles(newParticles);
    
    controls.start({
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    });
    
    // Regenerate particles every 3 seconds
    const interval = setInterval(() => {
      setParticles(Array.from({ length: 100 }).map(() => ({
        id: Math.random(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 0.5,
        duration: Math.random() * 3 + 1,
        delay: Math.random() * 2
      })));
    }, 3000);
    
    return () => clearInterval(interval);
  }, [controls]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={controls}
      className={`relative w-full h-full ${className || ""}`}
    >
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              backgroundColor: particleColor,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              repeatDelay: Math.random() * 3
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}