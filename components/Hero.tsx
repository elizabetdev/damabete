"use client";
import NextImage from "next/image";
import { GridItem } from "./GridItem";
import { SocialMediaList } from "./SocialMediaList";

export const Hero = () => {
  return (
    <div className="content flex flex-col flex-1 w-full relative items-center justify-center max-h-[800px] min-h-screen px-4">
      <div className="grid pointer-events-none absolute w-[200%] lg:w-[110%] h-[100%] top-0 left-0 grid grid-cols-[repeat(50,2%)] grid-rows-[repeat(50,2%)] opacity-70 grayscale-[20%]">
        <GridItem
          gridArea="10 / 1 / 26 / 7"
          backgroundImage="url(img/hero/1.jpg)"
        />
        <GridItem
          gridArea="4 / 20 / 16 / 31"
          backgroundImage="url(img/hero/2.jpg)"
        />
        <GridItem
          gridArea="1 / 36 / 14 / 42"
          backgroundImage="url(img/hero/3.jpg)"
        />
        <GridItem
          gridArea="13 / 11 / 32 / 18"
          backgroundImage="url(img/hero/4.jpg)"
        />
        <GridItem
          gridArea="17 / 32 / 32 / 38"
          backgroundImage="url(img/hero/5.jpg)"
        />
        <GridItem
          gridArea="18 / 42 / 33 / 50"
          backgroundImage="url(img/hero/6.jpg)"
        />
        <GridItem
          gridArea="43 / 1 / 51 / 10"
          backgroundImage="url(img/hero/7.jpg)"
        />
        <GridItem
          gridArea="36 / 12 / 46 / 22"
          backgroundImage="url(img/hero/8.jpg)"
        />
        <GridItem
          gridArea="37 / 26 / 51 / 32"
          backgroundImage="url(img/hero/9.jpg)"
        />
        <GridItem
          gridArea="37 / 39 / 48 / 47"
          backgroundImage="url(img/hero/10.jpg)"
        />
      </div>

      <div className="absolute inset-0 z-10">
        <div className="h-1/4 bg-gradient-to-b from-zinc-950 to-transparent absolute top-[-100px] w-full"></div>
        <div className="h-1/4 bg-gradient-to-t from-zinc-950 to-transparent absolute bottom-[-50px] w-full"></div>
      </div>

      <div className="flex flex-col flex-1 w-full h-screen relative items-center justify-center max-w-screen-md text-center z-30">
        <h1 className="relative no-select w-full  m-0">
          <NextImage
            alt=""
            src="img/hero/logo-hero.svg"
            width={966}
            height={300}
          />
        </h1>

        <p className="text-2xl leading-loose max-w-screen-lg mx-auto text-zinc-300">
          Rapper. Award-Winning Design Engineer. Tech Speaker.
        </p>

        <SocialMediaList />
      </div>
    </div>
  );
};
