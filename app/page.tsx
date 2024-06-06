"use client";
import { Hero } from "@/components/Hero";
import React from "react";
import { BlurScrollEffect } from "@/components/BlurScrollEffect";

export default function Home() {
  const text =
    "Hi there! I'm Elizabet, a Rapper and Award-Winning Design Engineer from Portugal, daughter of Portuguese and Mozambican parents. I speak at tech conferences globally and work as a Staff Design Engineer at Xata, a San Francisco company led by an inspiring female CEO. I'm passionate about open source and leveraging technology to make a difference.";

  return (
    <>
      <Hero />

      <BlurScrollEffect text={text} />
    </>
  );
}
