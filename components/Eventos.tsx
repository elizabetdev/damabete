import React from "react";
import Image from "next/image";
import { syncopate } from "@/utils/fonts";
import { eventos } from "@/data/eventos";

export const Eventos: React.FC = () => {
  return (
    <section className="pt-24 pb-36 bg-gray-950 overflow-hidden">
      <div className="container px-4 mx-auto">
        <h2
          className={`mb-6 text-4xl md:text-6xl xl:text-7xl text-[--accent] font-bold font-heading tracking-px-n leading-none uppercase ${syncopate.className}`}
        >
          Eventos
        </h2>
        <p className="mb-20 text-lg text-gray-400 font-medium leading-normal md:max-w-xl">
          Lorem ipsum dolor sit amet, to the consectr adipiscing elit. Volutpat
          tempor to the condimentum vitae vel purus.
        </p>
        <div className="flex flex-wrap -m-8">
          {eventos.map((item, index) => (
            <div key={index} className="w-full md:w-1/3 p-8">
              <div className="p-4 h-full bg-gray-900 bg-opacity-70 rounded-xl">
                <div className="flex flex-col justify-between h-full">
                  <div className="mb-8">
                    <div className="mb-9 w-full overflow-hidden rounded-2xl">
                      <Image
                        className="w-full transform hover:scale-105 transition ease-in-out duration-1000"
                        src={item.img}
                        alt={item.img}
                        layout="responsive"
                        width={700}
                        height={475}
                      />
                    </div>
                    <p className="mb-3 text-sm text-gray-400 font-medium">
                      {item.type}
                    </p>
                    <a
                      className="inline-block text-white hover:text-gray-200 hover:underline"
                      href="#"
                    >
                      <h3 className="text-xl font-bold font-heading leading-normal">
                        {item.title}
                      </h3>
                    </a>

                    <p className="mb-3 text-sm text-gray-400 font-medium">
                      {item.description}
                    </p>
                  </div>
                  <p className="text-sm text-gray-400 font-medium">
                    {item.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
