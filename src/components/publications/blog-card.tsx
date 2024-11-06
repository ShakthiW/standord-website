import Image from "next/image";
import React from "react";

interface BlogCardProps {
  date: string;
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ date, title, description, imageSrc, link }) => {
  return (
    <div className="w-full mb-10">
      <div className="mb-8 overflow-hidden rounded">
        <Image src={imageSrc} alt="Blog image" className="w-full" width={100} height={100}/>
      </div>
      <span className="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-white rounded bg-primary">
        {date}
      </span>
      <h3>
        <a href={link} className="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </a>
      </h3>
      <p className="text-base text-body-color dark:text-dark-6">
        {description}
      </p>
    </div>
  );
};

export default BlogCard;