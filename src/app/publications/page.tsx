import Hero from "@/components/publications/hero/hero";
import { ProjectShowcase } from "@/components/publications/projects";
import React from "react";

const Publications = () => {
  return (
    <>
      <Hero />

      <div className="flex py-10 lg:py-40 flex-col justify-center items-center min-h-screen">
        <div className="text-center max-w-3xl">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
            Crafting the Future of Technology
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300">
            Innovative solutions designed to accelerate your business.
          </p>
        </div>
        <ProjectShowcase />
      </div>

      <div className="min-h-screen">Footer</div>
    </>
  );
};

export default Publications;
