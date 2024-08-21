"use client";
import { Hero } from "@/components/Hero";
import React from "react";
import { DestaquesRecentes } from "@/components/DestaquesRecentes";

export default function Home() {
  return (
    <main>
      <Hero />
      <DestaquesRecentes />
    </main>
  );
}
