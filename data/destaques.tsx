import { ReactNode } from "react";

export type DestaqueProps = {
  title: string;
  description: string | ReactNode;
  location: string;
  type: string;
  youtube?: string;
  img?: string;
  alt?: string;
  link?: string;
  date: string;
};

export type Destaques = DestaqueProps[];

export const destaques: Destaques = [
  {
    title: "Throwback Open Air",
    description: (
      <>
        <p>
          No dia 31 de agosto, irá realizar-se o Throwback Open Air, edição
          especial de aniversário. Onde se vai celebrar o melhor do Hip Hop e
          R&B dos anos 2000 no Monsantos Open Air.
        </p>
        <p>Irei marcar presença com um concerto imperdível.</p>
      </>
    ),
    location: "Monsantos Open Air",
    type: "Show",
    link: "https://e.3cket.com/throwback-open-air-birthday-edition",
    img: "/img/destaques/throwback.jpg",
    date: "2024-08-31",
  },
  {
    title: "She Raps",
    description: (
      <>
        <p>
          A She Raps será a primeira incubadora para profissionalizar mulheres
          rappers, com apoio da União Europeia. Em Portugal, a Skoola será a
          parceira do projeto. 28 mulheres serão selecionadas para formação em
          vários países.
        </p>
        <p>
          O júri em Portugal inclui Dama Bete, Chong Kwong, Telma Tvon, Nuno
          Varela e D-Mars.
        </p>
      </>
    ),
    location: "Lisboa",
    type: "Incubadora",
    link: "http://ops.com",
    img: "/img/destaques/she-raps.jpg",
    date: "2024-05-1",
  },
  {
    title: "UnHappy Hour",
    description: (
      <>
        <p>
          A UnHappy Hour promoveu um evento para promover a paridade salarial
          entre homens e mulheres em parceria com a Cerveja Musa, Skoola e a She
          Said So Portugal, 6 mulheres participaram em workshops de Beats, Rimas
          e DJing.
        </p>
        <p>
          Eu conduzi uma masterclass, partilhando a minha história na música e
          como foi lançar o meu álbum &quot;De Igual para Igual&quot; a 16 anos
          atrás, num meio hip-hop masculinizado, onde tudo era novo e
          desconhecido.
        </p>
      </>
    ),
    location: "Skoola, Lisboa",
    type: "Masterclass",
    link: "http://ops.com",
    img: "/img/destaques/masterclass.jpg",
    date: "2024-12-02",
  },
  {
    title: "Quem tem medo de Zurita de Oliveira",
    location: "SMUP, Parede",
    description: (
      <>
        <p>
          Este evento angariará fundos para o filme &quot;Quem tem Medo de
          Zurita de Oliveira?&quot;, sobre a vida de Zurita, pioneira do rock em
          Portugal. A história percorre a música e a sociedade desde os anos 60.
        </p>
        <p>
          Participarei no filme e darei um concerto no evento para apoiar a
          angariação de fundos.
        </p>
      </>
    ),
    type: "Angariação de Fundos",
    link: "http://ops.com",
    img: "/img/destaques/zurita.jpg",
    date: "2024-12-02",
  },
  {
    title: "Guerrilla Girls no Sumol Summer Fest",
    location: "Sumol Summer Fest, Costa da Caparica",
    description: (
      <>
        <p>
          A 13.ª edição do Sumol Summer Fest terá uma atuação especial no dia 1
          de julho. Cíntia, Carla Prata, Eva RapDiva, Blaya, Muleca XIII, Dama
          Bete e DJ Allexia atuarão juntas como Guerrilla Girls.
        </p>
        <p>
          Será uma apresentação inspiradora, unindo talentosas mulheres no
          cenário musical.
        </p>
      </>
    ),
    type: "Show",
    link: "https://www.instagram.com/culturanomuro_smup/p/C4F4Czes8ex/",
    img: "/img/destaques/guerilla-girls.jpg",
    date: "2023-07-02",
  },
  {
    title: "Penpot Fest 2023",
    location: "Barcelona, Espanha",
    description: (
      <>
        <p>
          O Penpot Fest 2023 aconteceu em Barcelona de 28 a 30 de junho. Um
          evento aberto a todos, com palestrantes, workshops e atividades
          divertidas no verão de Barcelona.
        </p>
        <p>
          O vídeo da minha palestra &quot;Crafting Interactive Audio Experiences
          with Penpot and SVG&quot; já se encontra disponível.
        </p>
      </>
    ),
    type: "Conferência",
    youtube: "https://youtu.be/yhrrj4XIuwo",
    img: "/img/destaques/penpot-fest.jpg",
    alt: "",
    date: "2023-06-29",
  },
  {
    title: "React Day Berlin 2022",
    location: "Berlim, Alemanha",
    description: (
      <>
        <p>
          O React Day Berlin oferece novas oportunidades e colaborações em
          tecnologia. Participe de palestras, workshops e conecte-se com
          entusiastas de React.
        </p>
        <p>
          O vídeo da minha a palestra &quot;Emotional & Functional UI Animations
          in React&quot; já se encontra disponível.
        </p>
      </>
    ),
    type: "Conferência",
    img: "/img/destaques/react-day-berlin.jpg",
    date: "2022-12-02",
    link: "https://reactday.berlin/",
  },
];
