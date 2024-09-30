import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "../ui/button";

export function WhyWaitAnyLonger() {
  return (
    <BackgroundBeamsWithCollision>
      <h2 className="max-w-6xl text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        Why wait any Longer?{""}
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Book a call now.</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">Book a call now.</span>
          </div>
        </div>

        <p className="text-base tracking-normal mt-4 max-w-3xl mx-auto text-center text-black dark:text-white">
          Our team of experts are ready to help you with your project. Let&apos;s
          get started today.
        </p>

        <Button className="mt-8 tracking-normal">Book a call now</Button>
      </h2>
    </BackgroundBeamsWithCollision>
  );
}