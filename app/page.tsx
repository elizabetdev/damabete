"use client";
import { Hero } from "@/components/Hero";
import React from "react";
import { BlogListPreview } from "@/components/blog/BlogListPreview";
import { ScrollBasedTextFooter } from "@/components/ScrollBasedTextFooter";

export default function Home() {
  return (
    <main>
      <Hero />
      <BlogListPreview />
      <ScrollBasedTextFooter />
    </main>
  );
}
