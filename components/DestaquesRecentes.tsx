import React from "react";
import { syncopate } from "@/utils/fonts";
import { destaques } from "@/data/destaques";
import { Destaques } from "./Destaques";
import Link from "next/link";

export const DestaquesRecentes: React.FC = () => {
  const destaquesRecentes = destaques.slice(0, 6);

  return (
    <section className="pt-24 pb-36 bg-zinc-950 overflow-hidden ">
      <div className="container px-4 mx-auto">
        <h2
          className={`mb-6 text-2xl md:text-6xl xl:text-6xl text-[--accent] font-bold font-heading tracking-px-n leading-none uppercase text-center ${syncopate.className}`}
        >
          Em Destaque
        </h2>
        <p className="mb-20 text-lg text-zinc-400 font-medium leading-normal md:max-w-2xl m-auto text-center">
          Descobre os eventos e participações onde vou estar presente, desde
          concertos e conferências até masterclasses e iniciativas especiais.
          Fica a par das minhas próximas atuações e explora os vídeos das
          participações anteriores.
        </p>
        <Destaques destaques={destaquesRecentes} />

        <div className="flex justify-center mt-12">
          <Link
            href="/destaques"
            className="bg-rose-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-rose-600 transition duration-300"
          >
            Ver todos os destaques
          </Link>
        </div>
      </div>
    </section>
  );
};
