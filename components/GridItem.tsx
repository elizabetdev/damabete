"use client";
import { FC } from "react";
import { useEffect } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { getRandomNumber, lerp, map } from "@/utils";

type GridItemProps = {
  gridArea: string;
  backgroundImage: string;
};

export const GridItem: FC<GridItemProps> = ({ gridArea, backgroundImage }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const tx = useMotionValue(0);
  const ty = useMotionValue(0);

  // Initialize random start and end movement boundaries
  const xstart = getRandomNumber(15, 60);
  const ystart = getRandomNumber(15, 60);

  const handleMouseMove = (event: any) => {
    mouseX.set(event.clientX);
    mouseY.set(event.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useAnimationFrame(() => {
    const winsize = { width: window.innerWidth, height: window.innerHeight };
    const newTx = lerp(
      tx.get(),
      map(mouseX.get(), 0, winsize.width, -xstart, xstart),
      0.07
    );
    const newTy = lerp(
      ty.get(),
      map(mouseY.get(), 0, winsize.height, -ystart, ystart),
      0.07
    );
    tx.set(newTx);
    ty.set(newTy);
  });

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg"
      style={{ gridArea: gridArea, x: tx, y: ty }}
    >
      <div
        className="relative w-[101%] h-[101%] bg-cover bg-center"
        style={{ backgroundImage: backgroundImage }}
      />
    </motion.div>
  );
};
