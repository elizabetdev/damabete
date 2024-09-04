import React from "react";
import { BlogList } from "../blog/BlogList";
import { SectionTitle } from "../SectionTitle";
import Link from "next/link";
import { allPosts } from "content-collections";

export const BlogListPreview: React.FC = () => {
  const postsRecents = allPosts
    .sort((a, b) => {
      const dateA = new Date(a.date.split("-").reverse().join("-"));
      const dateB = new Date(b.date.split("-").reverse().join("-"));
      return dateB > dateA ? -1 : dateB < dateA ? 1 : 0;
    })
    .slice(0, 6);

  return (
    <section className="pt-24 pb-36 bg-zinc-950 overflow-hidden ">
      <div className="container px-4 mx-auto">
        <SectionTitle
          title="Novidades do Blog"
          description="Acompanhe as últimas novidades sobre os meus shows, palestras e participações em eventos."
        />

        <BlogList posts={postsRecents} />

        <div className="flex justify-center mt-12">
          <Link
            href="/blog"
            className="bg-rose-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-rose-600 transition duration-300"
          >
            Ver todos os artigos
          </Link>
        </div>
      </div>
    </section>
  );
};
