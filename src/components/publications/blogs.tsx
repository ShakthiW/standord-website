import React from "react";
import BlogGrid from "./blog-grid";

const blogData = [
  {
    date: "Dec 22, 2023",
    title: "Meet AutoManage, the best AI management tools",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageSrc: "/images/about_us.png",
    link: "https://example.com",
  },
  {
    date: "Mar 15, 2023",
    title: "How to earn more money as a wellness coach",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageSrc: "",
    link: "https://example.com",
  },
  {
    date: "Jan 05, 2023",
    title: "The no-fuss guide to upselling and cross selling",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageSrc: "",
    link: "https://example.com",
  },
];

const OurBlogs: React.FC = () => {
  return (
    <section className="bg-background max-w-7xl mx-auto">
      <div className="container mx-auto">
        <BlogGrid blogs={blogData} />
      </div>
    </section>
  );
};

export default OurBlogs;
