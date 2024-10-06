import React from 'react';

interface SectionWithHeaderProps {
  title: string;
  description: string;
  minHeight?: string; // Optional prop to adjust the section height
  children?: React.ReactNode; // Allows passing additional components (like OpenCards)
}

const SectionWithHeader: React.FC<SectionWithHeaderProps> = ({
  title,
  description,
  minHeight = "100vh",
  children,
}) => {
  return (
    <div
      className="flex flex-col justify-start items-center lg:mt-40 mt-20"
      style={{ minHeight }}
    >
      <div className="text-center max-w-3xl mb-16">
        <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
          {title}
        </h1>
        <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
      {children}
    </div>
  );
};

export default SectionWithHeader;