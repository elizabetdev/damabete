import React from "react";
import { destaques } from "@/data/destaques";
import { DestaquesList } from "./DestaquesList";
import { SectionTitle } from "./SectionTitle";
import Link from "next/link";

export const DestaquesRecentes: React.FC = () => {
  const destaquesRecentes = destaques.slice(0, 6);

  return (
    <section className="pt-24 pb-36 bg-zinc-950 overflow-hidden ">
      <div className="container px-4 mx-auto">
        <SectionTitle
          title="Em Destaque"
          description=" Descobre os eventos e participações onde vou estar presente, desde
          concertos e conferências até masterclasses e iniciativas especiais.
          Fica a par das minhas próximas atuações e explora os vídeos das
          participações anteriores."
        />

        <DestaquesList destaques={destaquesRecentes} />

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
