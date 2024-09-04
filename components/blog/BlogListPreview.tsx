import React from "react";
import { BlogList } from "../blog/BlogList";
import { SectionTitle } from "../SectionTitle";
import Link from "next/link";
import { allPosts } from "content-collections";

export const BlogListPreview: React.FC = () => {
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
