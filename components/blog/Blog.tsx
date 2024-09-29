import React from "react";
import { PageWrapper } from "../PageWrapper";
import { PageTitle } from "../PageTitle";
import { BlogList } from "../blog/BlogList";
import { allPosts } from "content-collections";

export const Blog: React.FC = () => {
  const postsRecents = allPosts.sort((a, b) => {
    const [dayA, monthA, yearA] = a.date.split("-").map(Number);
    const [dayB, monthB, yearB] = b.date.split("-").map(Number);
    return new Date(yearA, monthA - 1, dayA) > new Date(yearB, monthB - 1, dayB)
      ? -1
      : 1;
  });

  return (
    <PageWrapper>
      <PageTitle
        title="Blog"
        description="Acompanha as últimas novidades sobre as minhas participações em eventos, entrevistas e artigos que tenho escrito."
      />
      <BlogList posts={postsRecents} />
    </PageWrapper>
  );
};
