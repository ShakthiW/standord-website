import { ProjectShowcase } from "@/components/publications/projects";
import React from "react";

const Publications = () => {
  return (
    <>
      <div className="min-h-screen">Hero for publications</div>

      <div className="flex flex-col justify-center items-center">
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
    </>
  );
};

export default Publications;
