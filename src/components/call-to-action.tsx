import Link from "next/link";
import React from "react";

const CalltoAction = () => {
  return (
    <section className="py-10 bg-background sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Get full access to Celebration
          </h2>
          <p className="mt-4 text-2xl font-medium">
            130+ Hand Crafted Coded Blocks
          </p>

          <div className="flex flex-col items-center justify-center px-16 mt-8 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row lg:mt-12 sm:px-0">
            <a
              href="#"
              title=""
              className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md sm:w-auto hover:bg-blue-700 focus:bg-blue-700"
              role="button"
            >
              Try For Free
            </a>
          </div>

          <p className="mt-6 text-base text-white">
            Already have an account? {" "}
            <Link
              href="#"
              title=""
              className="text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CalltoAction;
