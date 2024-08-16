"use client";
import { Hero } from "@/components/Hero";
import React from "react";
import { DestaquesRecentes } from "@/components/DestaquesRecentes";
import { Stats } from "@/components/Stats";

export default function Home() {
  return (
    <main>
      <Hero />
      <DestaquesRecentes />
      <Stats />
    </main>
  );
}
