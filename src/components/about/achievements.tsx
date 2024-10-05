"use client";

import { motion } from "framer-motion";
import React from "react";

const achievements = [
  {
    year: "2018",
    title: "Founded",
    description:
      "Our company was founded with a mission to innovate and lead the industry.",
  },
  {
    year: "2019",
    title: "First Major Product Launch",
    description:
      "Launched our flagship product, which quickly gained traction in the market.",
  },
  {
    year: "2020",
    title: "International Expansion",
    description:
      "Expanded our operations internationally, opening offices in 5 new countries.",
  },
  {
    year: "2021",
    title: "Reached 1 Million Users",
    description: "Our platform reached a milestone of 1 million active users.",
  },
  {
    year: "2022",
    title: "Award-Winning Innovation",
    description:
      "Won multiple awards for our groundbreaking innovation in technology.",
  },
];

const AchievementsSection = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-background text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center max-w-7xl">
        <div className="text-center max-w-3xl mb-16">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
            Crafting the Future of Technology
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300">
            Innovative solutions designed to accelerate your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-indigo-600 dark:text-primary mb-2">
                {achievement.year}
              </h3>
              <h4 className="text-lg font-medium mb-2">{achievement.title}</h4>
              <p className="text-gray-600 dark:text-gray-400">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
