import React from "react";
import { PageWrapper } from "../PageWrapper";
import { PageTitle } from "../PageTitle";
import { BlogList } from "../blog/BlogList";
import { allPosts } from "content-collections";

export const Blog: React.FC = () => {
  return (
    <PageWrapper>
      <PageTitle
        title="Blog"
        description="Acompanhe as últimas novidades sobre os meus shows, palestras e participações em eventos."
      />
      <BlogList posts={allPosts} />
    </PageWrapper>
  );
};
