import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function OurServices() {
  const features = [
    {
      title: "Empowering Your Visionaries",
      description:
        "Fuel your ambitions and drive unparalleled breakthroughs with AI that aligns with your boldest goals.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Effortless AI Integration",
      description:
        "No hassle, no complex setup, just powerful, intuitive tools that feel like they were made just for you..",
      icon: <IconEaseInOut />,
    },
    {
      title: "Transparent Pricing",
      description:
        "Our pricing is designed to adapt to your needs, scaling up or down as you grow. Experience top-tier AI without the premium price tag.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Rock-Solid Reliability",
      description: "Trust is everything. Your AI tools, available whenever you need them, no exceptions.",
      icon: <IconCloud />,
    },
    {
      title: "Tailored Solutions for Scale",
      description: "We offer the flexibility and power to handle everything from small projects to massive data demands.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Round-the-Clock Expertise",
      description:
        "With rapid response times and proactive support, you're never left waiting when you need help the most.",
      icon: <IconHelp />,
    },
    {
      title: "Results Guaranteed",
      description:
        "If you're not completely satisfied, we'll go the extra mile to tailor our solutions to your needs.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Continuous Innovation",
      description: "We're committed to evolving our technology, so you stay ahead.",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-primary">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
