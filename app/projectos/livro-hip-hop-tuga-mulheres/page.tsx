"use client";
import { PieChart } from "@/components/projects/livroHhTugaMulheres/PieChart";
import { ScatterPlot } from "@/components/projects/livroHhTugaMulheres/ScatterPlot";
import { LineChart } from "@/components/projects/livroHhTugaMulheres/LineChart";

export default function LivroHipHopTugaMulheres() {
  return (
    <main className="text-center">
      <section className="flex flex-col items-center justify-center pb-8">
        <h2 className="text-3xl font-bold mb-4">
          Distribuição por Género dos Rappers de Hip-Hop
        </h2>
        <p className="mb-8 text-center max-w-3xl">
          Este gráfico apresenta a distribuição por género dos rappers de
          hip-hop em Portugal, com base nos dados coletados do livro &quot;Hip
          Hop Tuga - Quatro Décadas de RAP em Portugal&quot; de Ricardo Farinha.
          Os dados abrangem o período de 1983 a 2022, oferecendo uma visão
          detalhada sobre a presença de artistas femininas e masculinos na cena
          do hip-hop nacional. Através deste gráfico, podemos observar a
          predominância de rappers masculinos em comparação com as rappers
          femininas ao longo das quatro décadas analisadas.
        </p>
        <div className="w-full max-w-md bg-zinc-800 shadow-lg rounded-lg p-4">
          <PieChart />
        </div>
      </section>

      <section className="flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-4">
          Distribuição dos Rappers por Ano
        </h2>
        <p className="mb-8 text-center max-w-3xl">
          Este gráfico de dispersão mostra a distribuição dos rappers ao longo
          dos anos. As rappers femininas estão representadas em rosa e os
          rappers masculinos estão representados em azul. O valor Y é fictício e
          usado apenas para visualização.
        </p>
        <div className="w-full max-w-3xl bg-zinc-800 shadow-lg rounded-lg p-4">
          <ScatterPlot />
        </div>
      </section>

      <section className="flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-4">
          Distribuição dos Rappers por Ano
        </h2>
        <p className="mb-8 text-center max-w-3xl">
          Este gráfico de dispersão mostra a distribuição dos rappers ao longo
          dos anos. As rappers femininas estão representadas em rosa e os
          rappers masculinos estão representados em azul. O valor Y é fictício e
          usado apenas para visualização.
        </p>
        <div className="w-full max-w-3xl bg-zinc-800 shadow-lg rounded-lg p-4">
          <LineChart />
        </div>
      </section>
    </main>
  );
}
