import { CassetteTape } from "@/components/cassetteTape/CassetteTape";
import { syncopate } from "@/utils/fonts";

export default function Musica() {
  return (
    <main className="text-center py-20">
      <section className="flex flex-col items-center justify-center">
        <CassetteTape />
      </section>

      <section className="my-20 flex flex-col items-center justify-center">
        <h2
          className={`text-4xl font-bold mb-6 text-center uppercase ${syncopate.className}`}
        >
          Música
        </h2>

        <p className="max-w-3xl mx-auto">
          Dama Bete é uma renomada rapper, engenheira de design e oradora de
          tecnologia com uma paixão por ligar a criatividade à tecnologia...
        </p>
      </section>
    </main>
  );
}
