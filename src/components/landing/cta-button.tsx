"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const ActionButton = () => {
  return (
    <motion.button
      className="p-[3px] relative overflow-hidden"
      whileHover="hover" // Define hover animation
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-primary rounded-lg" />

      {/* Button content */}
      <div className="px-8 py-2 flex justify-center items-center gap-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent hover:text-gray-700">
        <span className="tracking-normal">Book a call now</span>

        {/* Motion Arrow */}
        <motion.span
          className="flex"
          variants={{
            hover: { x: 10 }, // Move the arrow 10px to the right when the button is hovered
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <ArrowRight />
        </motion.span>
      </div>
    </motion.button>
  );
};

export default ActionButton;
