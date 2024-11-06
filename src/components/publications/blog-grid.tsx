import React from "react";
import BlogCard from "./blog-card";


interface BlogData {
  date: string;
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

interface BlogGridProps {
  blogs: BlogData[];
}

const BlogGrid: React.FC<BlogGridProps> = ({ blogs }) => {
  return (
    <div className="flex flex-wrap -mx-4">
      {blogs.map((blog, index) => (
        <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/3">
          <BlogCard
            date={blog.date}
            title={blog.title}
            description={blog.description}
            imageSrc={blog.imageSrc}
            link={blog.link}
          />
        </div>
      ))}
    </div>
  );
};

export default BlogGrid;
