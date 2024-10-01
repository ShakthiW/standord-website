"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const services = [
  {
    title: "Cutting-Edge Technology",
    description:
      "We use the latest tools and technologies to create robust, scalable, and efficient solutions.",
    image: "/images/technology.png",
  },
  {
    title: "Innovation at Core",
    description:
      "Our team thrives on innovation, delivering unique and creative solutions to complex problems.",
    image: "/images/innovation.png",
  },
  {
    title: "Expert Team",
    description:
      "Our professionals have deep expertise in various domains, bringing your vision to life.",
    image: "/images/expert_team.png",
  },
  {
    title: "Data-Driven Strategy",
    description:
      "We make decisions based on data to ensure your business growth and success.",
    image: "/images/strategy.png",
  },
  {
    title: "Scalability & Growth",
    description:
      "Our solutions are built with growth in mind, enabling seamless scalability.",
    image: "/images/growth.png",
  },
  {
    title: "24/7 Support",
    description:
      "We provide continuous support to ensure your business operations run smoothly.",
    image: "/images/support.png",
  },
];

const OurServices = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-background">
      {/* Hero Heading */}
      <div className="text-center max-w-3xl mb-16">
        <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
          Crafting the Future of Technology
        </h1>
        <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300">
          Innovative solutions designed to accelerate your business.
        </p>
      </div>

      {/* Grid-like Sections with Framer Motion */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl px-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }} // Initial position and opacity
            whileInView={{ opacity: 1, y: 0 }} // Animate when in view
            transition={{
              duration: 0.5,
              delay: index * 0.2, // Delay animation for staggered effect
            }}
            viewport={{ once: true }} // Ensure animation happens only once
          >
            <Image src={service.image} alt={service.title} width={64} height={64} />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">
              {service.title}
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
