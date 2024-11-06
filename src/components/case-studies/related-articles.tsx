// components/RelatedArticles.tsx
"use client";

import React from "react";
import BlogCard from "../publications/blog-card";

interface Article {
  date: string;
  title: string;
  description: string;
  src: string;
  link: string;
}

interface RelatedArticlesProps {
  articles: Article[];
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ articles }) => {
  return (
    <aside className="mt-12">
      <h3 className="text-xl font-semibold mb-4">Related Case Studies</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <BlogCard
            key={article.link}
            date={article.date}
            title={article.title}
            description={article.description}
            imageSrc={article.src}
            link={article.link}
          />
        ))}
      </div>
    </aside>
  );
};

export default RelatedArticles;