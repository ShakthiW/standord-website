import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./magic-button";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";

// Define prop types
interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonIcon?: React.ReactNode;
  buttonLink: string;
  spotlights?: { fill: string; className: string }[];
  backgroundGradient?: string;
  textEffectWords?: string;
}

// Default button icon if none is provided
const DefaultButtonIcon = <FaLocationArrow />;

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  buttonText,
  buttonIcon = DefaultButtonIcon, // Use the default icon if none is provided
  buttonLink,
  spotlights = [
    {
      fill: "white",
      className: "-top-40 -left-10 md:-left-32 md:-top-20 h-screen",
    },
    { fill: "purple", className: "h-[80vh] w-[50vw] top-10 left-full" },
    { fill: "blue", className: "left-80 top-28 h-[80vh] w-[50vw]" },
  ],
  backgroundGradient = "from-white to-gray-400",
  textEffectWords = "Transforming Concepts into Seamless User Experiences", // Default text for effect
}) => {
  return (
    <div className="pb-20 pt-36 max-h-[100vh]">
      {/* Dynamic Spotlights */}
      <div>
        {spotlights.map((spotlight, index) => (
          <Spotlight
            key={index}
            className={spotlight.className}
            fill={spotlight.fill}
          />
        ))}
      </div>

      {/* Grid background */}
      <div className="h-screen w-full dark:bg-black-100 dark:bg-grid-white/[0.03] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-transparent [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-7xl lg:max-w-7xl flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-[#5ce1e6] max-w-80">
            {subtitle}
          </p>

          {/* TextGenerateEffect with customizable words */}
          <TextGenerateEffect
            words={textEffectWords}
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          {/* Dynamic title */}
          <h1
            className={`max-w-7xl font-bold bg-gradient-to-br ${backgroundGradient} bg-clip-text text-center text-3xl leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight`}
          >
            {description}
          </h1>

          <a href={buttonLink}>
            <MagicButton
              title={buttonText}
              icon={buttonIcon}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
