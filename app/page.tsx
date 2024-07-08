"use client";
import { Hero } from "@/components/Hero";
import React from "react";
import { Eventos } from "@/components/Eventos";

export default function Home() {
  return (
    <main>
      <Hero />
      <Eventos />
    </main>
  );
}
