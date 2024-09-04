"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Post } from "content-collections";

type BlogListProps = {
  posts: Post[];
};

export const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  const [selectedTag, setSelectedTag] = useState("all");
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
    if (tag === "all") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter((post) => post.tags.includes(tag)));
    }
  };

  const uniqueTags = Array.from(new Set(posts.flatMap((post) => post.tags)));

  return (
    <div>
      <div className="flex flex-wrap mb-8">
        <button
          className={`mr-4 py-2 px-4 rounded-lg ${
            selectedTag === "all" ? "bg-rose-500 text-white" : "bg-zinc-900"
          }`}
          onClick={() => handleTagClick("all")}
        >
          Todos
        </button>
        {uniqueTags.map((tag) => (
          <button
            key={tag}
            className={`mr-4 py-2 px-4 rounded-lg ${
              selectedTag === tag ? "bg-rose-500 text-white" : "bg-zinc-900"
            }`}
            onClick={() => handleTagClick(tag)}
          >
            {`${tag.charAt(0).toUpperCase()}${tag.slice(1)}`}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap -m-8">
        {filteredPosts.map((item, index) => (
          <a
            key={index}
            className="w-full md:w-1/3 p-8"
            href={`/blog/${item._meta.path}`}
          >
            <div className="p-4 h-full bg-zinc-900 bg-opacity-70 rounded-xl text-left">
              <div className="flex flex-col justify-between h-full">
                <div className="mb-8">
                  <div className="mb-9 w-full overflow-hidden rounded-2xl">
                    <Image
                      className="w-full transform hover:scale-105 transition ease-in-out duration-1000"
                      src={item.image as any}
                      alt={item.title as any}
                      layout="responsive"
                      width={700}
                      height={475}
                    />
                  </div>

                  <div className="flex flex-row gap-4">
                    <span className="mb-3 text-sm text-zinc-400 font-medium">
                      {item.tags.join(", ")}
                    </span>
                    <span className="text-sm text-zinc-400 font-medium">
                      {item.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading leading-normal">
                    {item.title}
                  </h3>

                  {typeof item.description === "string" ? (
                    <p className="mb-3 text-sm text-zinc-400 font-medium">
                      {item.description}
                    </p>
                  ) : (
                    item.description
                  )}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
