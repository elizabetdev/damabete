export type TimelineItemProps = {
  date: string;
  title: string;
  content: string | ReactNode;
  image?: string;
};

import { ReactNode } from "react";

export const timelineItems: TimelineItemProps[] = [
  {
    date: "2000",
    title: "Madorna. Onde tudo começou.",
    content:
      "Tudo começou nos anos 2000 quando eu andava na Escola secundária da Madorna. O meu irmão foi grande impulsionador do hip-hop na Madorna e a Telma T-Von foi a das primeiras artistas que vi actuar. Na época na escola da Madorna.",
    image: "/img/timeline/madorna.jpg",
  },
  {
    date: "2003 a 2008",
    title: "Blacksystem & HipHop Ladies",
    content: (
      <>
        <p>
          Durante estes anos quis descobri se haviam outras mulheres a fazer
          rap. E isso motivou-me para aprender código e a fazer um site. Esse
          site começou de uma forma muito básica com o tempo fui aprendendo mais
          código e design e acabei por criar um plataforma em wordpress. Também
          conheci a Blaya no No mIrc e conjuntamente com a minha irmã, Ana, a
          minha amiga Marlene e a minha sobrinha, Grace criamos um grupo a
          Blacksystem. Tivemos os nossos primeiros concertos como grupo. Em
          2005, comecei a organizar eventos da hip-hop ladies e fomos todas
          actuando a solo e também convidei outras mulheres, podendo ser b-girls
          ou djs para actuarem.
        </p>
      </>
    ),
    image: "/img/timeline/hiphop-ladies@2x.png",
  },
  {
    date: "2008",
    title: "De igual para igual",
    content: (
      <>
        <p>
          Foi nesta altura que termineu a minha licencitura em Gestão do Lazer e
          da Animação Turística. E o meu albúm saiu pouco tempo depois.
        </p>
        <p>Durante algum tempo, tive alguns concertos, entrevistas.</p>
      </>
    ),
    image: "/img/timeline/de-igual-para-igual@2x.png",
  },
  {
    date: "2012",
    title: "Web Developer + música",

    content: (
      <>
        <p>
          Depois do hype do álbum ter passado e estando Portugal ainda na famosa
          crise que se iniciou em 2008. Haviam poucos eventos.
        </p>
        <p>
          Tentei conciliar a música e passei por alguns estágios e organizei
          alguns eventos. Mas percebi que tinha outra paixão, pela tecnologia.
          Por fazer sites e então decedi perseguir essa paixão e comecei a
          focar-me mais em criar um portfolio de web development. E arranjei o
          meu primeiro emprego nesta área.
        </p>
      </>
    ),
    image: "/img/timeline/de-igual-para-igual@2x.png",
  },
  {
    date: "2013 e 2014",
    title: "Brasil",
    content: (
      <>
        <p>
          Durante esta época, comecei a vingar no mundo do web development. E
          tive a oportunidade de ir para o Brasil por duas vezes para actuar.
        </p>
        <p>
          Foi dificil, de conseguir conciliar a música com os trabalhos que
          tinha. E quando voltei a segunda vez do Brasil, após estar lá durante
          1 mês, decidi que era altura de me focar mais no mundo da web. Sentia
          que na música já tinha vivido o que ambicionava.
        </p>
      </>
    ),
  },
  {
    date: "2015 a 2018",
    title: "Viver na Irlanda e viagens",
    content: (
      <>
        <p>
          Em 2015 tive uma oferta de emprego para a Irlanda como UI Developer. E
          como não tinha nada a perder decidi aceitar.
        </p>
        <p>
          Na Irlanda tive a oportunidade de viajar por diversos países. E devido
          a minha paixão pelo Hip-Hop criei um projecto chamado cassette tape
          uma experiência que na altura explorava a web audio API. Por ser um
          projecto inovativo e por estar no site{" "}
          <a href="https://experiments.withgoogle.com/cassette-tape">
            Experiments with Google
          </a>
          fui convidada para apresentar o projecto no Google IO de Dublin.
        </p>
      </>
    ),
  },
  {
    date: "2018",
    title: "O prémio, primeira conferência em Las Vegas",
    content: (
      <>
        <p>
          Em 2018 um dos meus projectos open source, React Kawaii, que
          desenvolvi ficou trending no GitHub, plataforma da Microsoft. Por
          cause disso em Abril de 2018 recebi um prémio de Fun Project of the
          Year pela React Amsterdam.
        </p>
        <p>
          Nesse mesmo ano falei na minha primeira conferencia, de React.js,
          framework do Facebook que aconteceu em Las vegas.
        </p>
      </>
    ),
  },
  {
    date: "2018 até 2023",
    title: "Conferências pelo Mundo e Miuki Miu",
    content: (
      <>
        <p>
          Depois disso os convites não pararam e tive a sorte de falar em muitas
          conferências pelo mundo.De Yerevan, Sofia, Amsterdão, Berlim entre
          muitos mais sítios.
        </p>
        <p>
          Em algumas das minhas paletras conciliei a tecnolofia com a música.
        </p>
      </>
    ),
  },
  {
    date: "2023",
    title: "Guerilla Girls",
    content:
      "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.",
  },
];
