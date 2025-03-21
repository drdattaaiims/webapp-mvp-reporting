"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { motion } from "framer-motion";

export function FlashRadHeader() {
  return (
    <div style={{ height: '300px' }} className="relative w-full flex items-center justify-center mb-12">
      <motion.h2 
        className="text-9xl font-normal text-center text-white relative z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        FlashRad.AI
      </motion.h2>
      <div className="absolute inset-0">
        <SparklesCore
          particleColor="#00F0FF"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}