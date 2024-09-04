import React from "react";
import { PageWrapper } from "../PageWrapper";
import { Post } from "content-collections";
import { MDXComponent } from "../MdxComponent";
import { Balancer } from "react-wrap-balancer";

export const BlogArticle: React.FC<Post> = ({
  title,
  date,
  image,
  mdx,
  content,
}) => {
  return (
    <PageWrapper>
      <div className="pb-12 flex flex-col items-center min-h-screen text-left">
        <article className="max-w-prose ">
          <h1 className="mb-4 font-display text-2xl font-bold tracking-tighter text-rose-500 sm:mb-5 sm:text-3xl">
            <Balancer>{title}</Balancer>
          </h1>

          <MDXComponent code={mdx} />
        </article>
      </div>
    </PageWrapper>
  );
};
