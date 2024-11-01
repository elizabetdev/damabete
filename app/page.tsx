"use client";
import { Hero } from "@/components/home/Hero";
import React from "react";
import { BlogListPreview } from "@/components/blog/BlogListPreview";
import { ScrollBasedTextFooter } from "@/components/home/ScrollBasedTextFooter";
import { OpenSourceCta } from "@/components/home/OpenSourceCta";
import { BentoGrid } from "@/components/home/BentoGrid";

export default function Home() {
  return (
    <main>
      <Hero />
      <BentoGrid />
      <BlogListPreview />
      <ScrollBasedTextFooter />
    </main>
  );
}
