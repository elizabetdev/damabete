"use client";
import React, { useState, useEffect, useRef } from "react";
import { CardWithEffect } from "../CardWithEffect";
import { SectionTitle } from "../SectionTitle";
import { Spotify } from "../Spotify";
import { CassetteTape } from "./cassetteTape/CassetteTape";
import { CardVideo } from "../CardVideo";
import Link from "next/link";

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

            <article className="p-4 prose prose-md prose-invert pt-8">
              <h2>Fork this - Song</h2>
              <p>
                “Fork This” é uma música que foi lançada em Mar 8, 2020 como
                objetivo encorajar mulheres da tech a seguirem a sua paixão.
                Superar o síndrome do impostor é uma luta, mas, se simplesmente
                continuares, podes alcançar tudo o que desejares. O código da
                cassette foi feito por mim e para quem tem curiosidade o código
                encontra-se no{" "}
                <Link href="https://github.com/miukimiu/penpot-fork-this">
                  GitHub
                </Link>
                .
              </p>
            </article>
          </CardWithEffect>

          <div className="flex flex-col w-full md:w-1/2 gap-5 h-full md:h-[800px]">
            <CardWithEffect>
              <div className="flex flex-row gap-4 h-full w-full">
                <Spotify link="https://open.spotify.com/album/4hGIIxldD6HlmorHszswoL?si=IPAHik8nQ0eMUKky67HqVQ" />

                <article className="p-4 prose prose-md prose-invert pt-8">
                  <h2>De igual para igual</h2>
                  <p>
                    De Igual para Igual é o álbum de estreia de Dama Bete.
                    Lançado a 16 de julho de 2008, pela Universal Music
                    Portugal, foi o primeiro álbum a solo de uma rapper
                    portuguesa editado por um grande grupo de edição
                    discográfica
                  </p>
                </article>
              </div>
            </CardWithEffect>

            <CardVideo
              title="O que aconteceu, à Dama Bete"
              description="Muitas pessoas fazem esta pergunta e este vídeo é a resposta."
              videoSrc="https://www.youtube.com/embed/V4-PQP__65o"
              overlayImageSrc="/img/video/bento-video.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
