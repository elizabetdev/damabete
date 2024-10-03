"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CardWithEffect } from "../CardWithEffect";
import { SectionTitle } from "../SectionTitle";
import { Spotify } from "../Spotify";
import { CassetteTape } from "./k7/CassetteTape";

export const BentoGrid = () => {
  const chartRef = useRef(null);
  const [isChartVisible, setIsChartVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsChartVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, [chartRef]);

  return (
    <section className="pt-24 pb-24 bg-zinc-950 overflow-hidden ">
      <div className="container px-4 mx-auto">
        <SectionTitle
          title="Projectos"
          description="Acompanha as últimas novidades sobre as minhas participações em eventos, entrevistas e artigos que tenho escrito."
        />

        <div className="flex flex-col md:flex-row gap-4 w-full ">
          <CardWithEffect>
            <CassetteTape />
          </CardWithEffect>

          <div className="flex flex-col w-full md:w-1/2 gap-5 h-full md:h-[800px]">
            <CardWithEffect>
              <div className="flex flex-row gap-4">
                <Spotify link="https://open.spotify.com/album/4hGIIxldD6HlmorHszswoL?si=IPAHik8nQ0eMUKky67HqVQ" />

                <article className="prose dark:prose-invert p-4">
                  <h2>Cassette Tape</h2>
                  <p>Um projecto que </p>
                </article>
              </div>
            </CardWithEffect>

            <Spotify
              wide
              link="https://open.spotify.com/album/4fiUzPGD9c9BOGxyJl61J5?si=f0MXr8FySamKRCnEIai4AQ"
            />

            <CardWithEffect>
              <div>Ops</div>

              <article className="prose dark:prose-invert p-4">
                <h2>Talks</h2>
                <p>Um projecto que </p>
              </article>
            </CardWithEffect>
          </div>
        </div>
      </div>
    </section>
  );
};
