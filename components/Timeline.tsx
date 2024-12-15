"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { PageTitle } from "./PageTitle";
import { TimelineMarker } from "./TimelineMarker";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  year: string | number;
}

export type TimelineProps = {
  intro: React.ReactNode;
  data: TimelineEntry[];
};

export const Timeline: React.FC<TimelineProps> = ({ intro, data }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full" ref={containerRef}>
      <article className="prose prose-lg prose-invert mx-auto">
        <PageTitle title="Sobre" className="text-left" />

        <section>{intro}</section>

        <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-40 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start">
                <TimelineMarker title={item.title} year={item.year} />
              </div>

              <div className="relative pr-4 pl-20 w-full">{item.content}</div>
            </div>
          ))}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-rose-300 via-rose-500 to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
        </div>
      </article>
    </div>
  );
};
