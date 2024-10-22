"use client";
import React, { useState, useEffect, useRef } from "react";
import { CardWithEffect } from "../CardWithEffect";
import { SectionTitle } from "../SectionTitle";
import { Spotify } from "../Spotify";
import { CassetteTape } from "./cassetteTape/CassetteTape";
import { CardVideo } from "../CardVideo";
import { Ripple } from "../Ripple";

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
    <section className="pt-24 pb-24 bg-zinc-950 overflow-hidden">
      <div className="container px-4 mx-auto">
        <SectionTitle
          title="Música"
          description="Acompanha as últimas novidades sobre as minhas participações em eventos, entrevistas e artigos que tenho escrito."
        />

        <div className="flex flex-col md:flex-row gap-4 w-full">
          <CardWithEffect>
            <CassetteTape />

            <article className="p-4 prose prose-lg prose-invert">
              <h2>De igual para igual</h2>
              <p>Um projecto que </p>
            </article>
          </CardWithEffect>

          <div className="flex flex-col w-full md:w-1/2 gap-5 h-full md:h-[800px]">
            <CardWithEffect>
              <div className="flex flex-row gap-4 h-full w-full">
                <Spotify link="https://open.spotify.com/album/4hGIIxldD6HlmorHszswoL?si=IPAHik8nQ0eMUKky67HqVQ" />

                <article className="p-4 prose prose-lg prose-invert">
                  <h2>De igual para igual</h2>
                  <p>
                    Muitas pessoas fazem esta pergunta e este vídeo é a
                    resposta.
                  </p>
                </article>
              </div>
            </CardWithEffect>

            <CardVideo
              title="O que aconteceu, à Dama Bete"
              description="Muitas pessoas fazem esta pergunta e este vídeo é a resposta."
              videoSrc="https://www.youtube.com/embed/V4-PQP__65o"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
