import React from "react";
import { PageWrapper } from "../PageWrapper";
import { PageTitle } from "../PageTitle";
import { BlogList } from "../blog/BlogList";
import { allPosts } from "content-collections";

export const Blog: React.FC = () => {
  const postsRecents = allPosts
    .sort((a, b) => {
      const [dayA, monthA, yearA] = a.date.split("-").map(Number);
      const [dayB, monthB, yearB] = b.date.split("-").map(Number);
      return new Date(yearA, monthA - 1, dayA) >
        new Date(yearB, monthB - 1, dayB)
        ? 1
        : -1;
    })
    .slice(0, 6);

  return (
    <PageWrapper>
      <PageTitle
        title="Blog"
        description="Acompanhe as últimas novidades sobre os meus shows, palestras e participações em eventos."
      />
      <BlogList posts={postsRecents} />
    </PageWrapper>
  );
};
