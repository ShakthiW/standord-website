import React from 'react';

interface PageHeadingProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: React.ReactNode;
}

const PageHeading: React.FC<PageHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="bg-white dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8 dark:border-gray-700">
      <div className="max-w-7xl mx-auto">
        
        <h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeading;
