import React from "react";
import { PageWrapper } from "./PageWrapper";
import { destaques } from "@/data/destaques";
import { PageTitle } from "./PageTitle";
import { DestaquesList } from "./DestaquesList";
import { Timeline } from "@/components/Timeline";

export const SobrePage: React.FC = () => {
  return (
    <PageWrapper>
      <PageTitle
        title="Sobre"
        description={
          <>
            <p className="max-w-3xl mx-auto">
              Dama Bete é uma rapper luso-moçambicana, conhecida por ser a
              primeira MC feminina, em Portugal, a assinar com uma editora
              multinacional. Em 2003 criou o projeto Hip-Hop Ladies, pioneiro na
              promoção do hip-hop feminino no país e na luta pela igualdade
              dentro do género. Foi considerada artista revelação pela revista
              Blitz, em 2005, após atuar no Festival Musidanças, levando-a pouco
              depois a assinar pela Universal Music, através da qual lançou o
              álbum “De Igual Para Igual”.
            </p>
            <p className="max-w-3xl mx-auto my-6">
              Da música para a tecnologia, Dama Bete acabou, mais tarde, por se
              dedicar a uma carreira enquanto product designer e frontend
              developer. Rapidamente se tornou uma referência no meio, dando
              palestras pelo mundo inteiro e ainda ganhando o prémio de “Fun
              Project of the Year” pelo seu projeto React Kawaii, na React
              Amsterdam. Já em 2020, sob o pseudónimo Miuki Miu, lança o tema
              “Fork This”, aliando os dois mundos - hip hop e tech. Finalmente,
              em 2023, aceita o desafio de participar no cypher do projeto
              Guerrilla Girls, apresentado no Sumol Summer Fest, marcando o seu
              regresso aos palcos.
            </p>
          </>
        }
      />
      <Timeline />
    </PageWrapper>
  );
};
