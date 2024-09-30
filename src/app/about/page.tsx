import { AboutUsGenerator } from "@/components/about-us";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center">
        {/* Page Heading */}
        {/* <PageHeading title="About Us" /> */}

        <div className="flex flex-grow lg:flex-row flex-col-reverse py-8 px-4 sm:px-6 -mt-24 lg:px-8 max-w-7xl mx-auto justify-between items-center lg:gap-12">
          <div className="flex-grow text-sm text-gray-700 dark:text-gray-300 leading-relaxed w-full">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              Who We Are
            </h2>
            <AboutUsGenerator />
          </div>

          <div className="w-full md:w-1/2">
            <Image
              src={"/images/about_us.png"}
              alt="About Us"
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-100 dark:bg-gray-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              To provide a platform for developers to learn, share and grow.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
