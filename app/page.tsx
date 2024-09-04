"use client";
import { Hero } from "@/components/Hero";
import React from "react";
import { BlogListPreview } from "@/components/blog/BlogListPreview";

export default function Home() {
  return (
    <main>
      <Hero />
      <BlogListPreview />
    </main>
  );
}
