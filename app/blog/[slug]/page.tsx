import React from "react";
import { allPosts } from "content-collections";
import { BlogArticle } from "@/components/blog/BlogArticle";
import dayjs from "dayjs";
import { notFound } from "next/navigation";

export interface BlogPageProps {
  params: {
    slug: string;
  };
}

export const generateMetadata = ({ params }: BlogPageProps) => {
  const post = allPosts.find((post) => post._meta.path === params.slug);
  if (!post) {
    throw new Error("invalid slug");
  }
  return { title: post.title, description: post.description };
};

const BlogPage = ({ params }: BlogPageProps) => {
  // Find the post for the current page.
  const post = allPosts.find((post) => post._meta.path === params.slug);

  if (!post) notFound();
  return <BlogArticle {...post} />;
};

export default BlogPage;
