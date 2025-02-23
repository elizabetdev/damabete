import React from "react";
import { PageWrapper } from "../PageWrapper";
import { Post } from "content-collections";
import { MDXComponent } from "../MdxComponent";
import { Balancer } from "react-wrap-balancer";
import { FiCalendar } from "react-icons/fi";

export const BlogArticle: React.FC<Post> = ({ title, date, mdx }) => {
  return (
    <PageWrapper>
      <div className="pb-12 flex flex-col items-center min-h-screen text-left">
        <article className="max-w-prose ">
          <h1 className="mb-4 font-heading text-2xl font-bold tracking-tighter text-rose-500 sm:mb-5 sm:text-4xl">
            <Balancer>{title}</Balancer>
          </h1>
          <div className="flex items-center mb-4 text-gray-400">
            <FiCalendar className="mr-2" size={16} />
            <span>{date}</span>
          </div>

          <MDXComponent code={mdx} />
        </article>
      </div>
    </PageWrapper>
  );
};
