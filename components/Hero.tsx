import NextImage from "next/image";
import { FC } from "react";

type ImageGridItemProps = {
  gridArea: string;
  backgroundImage: string;
};

const ImageGridItem: FC<ImageGridItemProps> = ({
  gridArea,
  backgroundImage,
}) => (
  <div className="relative overflow-hidden" style={{ gridArea: gridArea }}>
    <div
      className="relative w-[101%] h-[101%] bg-cover bg-center"
      style={{ backgroundImage: backgroundImage }}
    />
  </div>
);

export const Hero = () => {
  return (
    <div className="content flex flex-col flex-1 w-full relative items-center justify-center max-h-[800px] lg:max-h-[100%] h-[100%]">
      <div className="grid pointer-events-none absolute w-[200%] lg:w-[110%] h-[100%] top-0 left-0 grid grid-cols-[repeat(50,2%)] grid-rows-[repeat(50,2%)] opacity-70">
        <ImageGridItem
          gridArea="10 / 1 / 26 / 7"
          backgroundImage="url(img/1.jpg)"
        />
        <ImageGridItem
          gridArea="4 / 20 / 16 / 31"
          backgroundImage="url(img/2.jpg)"
          å
        />
        <ImageGridItem
          gridArea="1 / 36 / 14 / 42"
          backgroundImage="url(img/3.jpg)"
        />
        <ImageGridItem
          gridArea="13 / 11 / 32 / 18"
          backgroundImage="url(img/4.jpg)"
        />
        <ImageGridItem
          gridArea="17 / 32 / 32 / 38"
          backgroundImage="url(img/5.jpg)"
        />
        <ImageGridItem
          gridArea="18 / 42 / 33 / 50"
          backgroundImage="url(img/6.jpg)"
        />
        <ImageGridItem
          gridArea="43 / 1 / 51 / 10"
          backgroundImage="url(img/7.jpg)"
        />
        <ImageGridItem
          gridArea="36 / 12 / 46 / 22"
          backgroundImage="url(img/8.jpg)"
        />
        <ImageGridItem
          gridArea="40 / 26 / 51 / 32"
          backgroundImage="url(img/9.jpg)"
        />
        <ImageGridItem
          gridArea="37 / 39 / 48 / 47"
          backgroundImage="url(img/10.jpg)"
        />
      </div>

      <div className="flex flex-col flex-1 w-full h-full relative items-center justify-center max-w-screen-md text-center">
        <h1 className="text-10vw font-light leading-none m-0 relative no-select">
          <NextImage alt="" src="img/logo.svg" width={392} height={244} />
        </h1>

        <p>
          Olá! I'm Elizabet, a Rapper and Award Winner Design Engineer from
          Portugal, daughter of Portuguese and Mozambican parents. I was the
          first female solo rapper to sign with a major label in Portugal. I
          lived in Dublin for four years, which gave me a ton of stories and a
          taste for Guinness! I speak at tech conferences around the world,
          sharing my insights and passion. Currently, I work as a Staff Design
          Engineer at Xata, a San Francisco based company led by an inspiring
          female CEO. I love both music and technology, and I'm especially
          passionate about combining the two to create innovative and exciting
          experiences.
        </p>
      </div>
    </div>
  );
};
