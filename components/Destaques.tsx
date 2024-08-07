import React from "react";
import Image from "next/image";
import { DestaqueProps } from "@/data/destaques";

type DestaquesProps = {
  destaques: DestaqueProps[];
};

export const Destaques: React.FC<DestaquesProps> = ({ destaques }) => {
  return (
    <div className="flex flex-wrap -m-8">
      {destaques.map((item, index) => (
        <div key={index} className="w-full md:w-1/3 p-8">
          <div className="p-4 h-full bg-zinc-900 bg-opacity-70 rounded-xl">
            <div className="flex flex-col justify-between h-full">
              <div className="mb-8">
                <div className="mb-9 w-full overflow-hidden rounded-2xl">
                  <Image
                    className="w-full transform hover:scale-105 transition ease-in-out duration-1000"
                    src={item.img as any}
                    alt={item.alt as any}
                    layout="responsive"
                    width={700}
                    height={475}
                  />
                </div>

                <div className="flex flex-row gap-4">
                  <span className="mb-3 text-sm text-zinc-400 font-medium">
                    {item.type}
                  </span>
                  <span className="text-sm text-zinc-400 font-medium">
                    {item.date}
                  </span>
                </div>

                <a
                  className="inline-block text-white hover:text-zinc-200 hover:underline"
                  href={item.link}
                >
                  <h3 className="text-xl font-bold font-heading leading-normal">
                    {item.title}
                  </h3>
                </a>

                {typeof item.description === "string" ? (
                  <p className="mb-3 text-sm text-zinc-400 font-medium">
                    {item.description}
                  </p>
                ) : (
                  item.description
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
