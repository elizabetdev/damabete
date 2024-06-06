import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const splitTextIntoWords = (text: string) => {
  return text.split(" ").map((word, index) => ({ word, id: index }));
};

export const BlurScrollEffect = ({ text }: { text: string }) => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    if (text) {
      const splittedWords = splitTextIntoWords(text);
      setWords(splittedWords as any);
    }
  }, [text]);

  return (
    <div className="text-5xl leading-normal max-w-screen-md mx-auto text-zinc-300 z-30">
      <p>
        {words.map(({ word, id }) => (
          <Word key={id} word={word} />
        ))}
      </p>
    </div>
  );
};

const Word = ({ word }: { word: string }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-15% 0px -15% 0px" });

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        skewX: 0,
        filter: "blur(0px)",
        transition: {
          ease: "easeIn",
          duration: 0.5,
        },
      });
    } else {
      controls.start({
        opacity: 0,
        skewX: -20,
        filter: "blur(8px)",
        transition: {
          ease: "easeOut",
          duration: 0.5,
        },
      });
    }
  }, [controls, isInView]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, skewX: -20, filter: "blur(8px)" }}
      animate={controls}
      style={{ display: "inline-block", marginRight: "5px" }}
    >
      {word}
    </motion.span>
  );
};
