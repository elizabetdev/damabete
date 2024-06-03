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

export const ImageGridMotion = () => {
  return (
    <div className="content flex flex-col flex-1 w-full h-full relative items-center justify-center">
      <div className="grid pointer-events-none absolute w-[110%] h-[110%] top-[-5%] left-[-5%] grid grid-cols-[repeat(50,2%)] grid-rows-[repeat(50,2%)]">
        <ImageGridItem
          gridArea="10 / 1 / 26 / 7"
          backgroundImage="url(img/1.jpg)"
        />
        <ImageGridItem
          gridArea="1 / 18 / 9 / 27"
          backgroundImage="url(img/2.jpg)"
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
          gridArea="20 / 46 / 28 / 51"
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

      <h1 className="text-10vw font-light leading-none m-0 relative no-select">
        <NextImage alt="" src="img/hero_title.svg" width={870} height={320} />
      </h1>
    </div>
  );
};
