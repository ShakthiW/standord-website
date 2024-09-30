import React from "react";
import { LayoutGridSection } from "./grid-layout";

const ProjectList = () => {
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

      {/* <Project /> */}
      <LayoutGridSection />
    </div>
  );
};

export default ProjectList;