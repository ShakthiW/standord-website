"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const OpenCards = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(-1);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  // Function to handle screen size
  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth < 768); // Tailwind 'md' breakpoint is 768px
  };

  useEffect(() => {
    // Check screen size on initial render
    checkScreenSize();
    // Add event listener to handle resize
    window.addEventListener("resize", checkScreenSize);
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handleCardClick = (index: number) => {
    // Only allow click toggle for larger screens
    if (!isSmallScreen) {
      setExpandedIndex(index === expandedIndex ? -1 : index);
    }
  };

  const cardVariants = {
    expanded: {
      width: "400px",
    },
    collapsed: {
      width: "200px",
    },
  };

  const cardImages = [
    "/causes/city1.jpg",
    "/causes/city2.jpg",
    "/causes/city3.png",
    "/causes/planet1.png",
    "/causes/planet2.png",
  ];

  const cardDescriptions = [
    "This is a description, write whatever you need here, this is just text for a test",
    "This is a description, write whatever you need here, this is just text for a test",
    "This is a description, write whatever you need here, this is just text for a test",
    "This is a description, write whatever you need here, this is just text for a test",
    "This is a description, write whatever you need here, this is just text for a test",
  ];

  return (
    <section className="py-16 pb-[300px] bg-background">
      <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-5">
        {cardImages.map((image, index) => (
          <motion.div
            key={index}
            className={`card cursor-pointer h-[500px] bg-cover bg-center rounded-[20px] ${
              index === expandedIndex || isSmallScreen ? "expanded" : ""
            }`}
            variants={cardVariants}
            initial={isSmallScreen ? "expanded" : "collapsed"}
            animate={
              index === expandedIndex || isSmallScreen
                ? "expanded"
                : "collapsed"
            }
            transition={{ duration: 0.5 }}
            onClick={() => handleCardClick(index)}
            style={{
              backgroundImage: `url(${image})`,
            }}
          >
            <div className="card-content h-full flex flex-col justify-end">
              {/* Motion card footer */}
              <motion.div
                className="card-footer rounded-b-[20px] bg-gray-800 py-5 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center"
                layout
                initial={{ height: "100px" }}
                animate={{
                  height:
                    index === expandedIndex || isSmallScreen ? "auto" : "100px",
                }}
                transition={{ duration: 0.5 }}
              >
                <motion.h2 className="text-xl font-semibold text-white text-center">
                  Card {index + 1}
                </motion.h2>
                {(index === expandedIndex || isSmallScreen) && (
                  <motion.p
                    className="mt-2 px-5 text-gray-300 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {cardDescriptions[index]}
                  </motion.p>
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OpenCards;
