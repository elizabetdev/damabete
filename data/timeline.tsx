import { ReactNode } from "react";

export type TimelineItemProps = {
  date: string;
  title: string;
  content: string | ReactNode;
  image?: string;
};

export const timelineItems: TimelineItemProps[] = [
  {
    date: "2000",
    title: "Madorna. Onde tudo começou.",
    content: (
      <>
        <p>
          Cresci na Madorna, que fica na Parede concelho de Cascais. E foi aqui
          que andei na creche, escola primária e secundária. Mas foi na escola
          preparatoria, em Matarraque que pela primeira vez ouvi Hip-hop
          português.
        </p>
        <p>
          Mais tarde, quando fui para a escola secundária da Madorna nos anos
          2000 que pela primeira vez vi um concerto de hip-hop português ao
          vivo. Este concerto foi organizado pelo meu irmão, Macaco Simão que na
          altura era grande impulsionador do hip-hop no concelho de Cascais. Foi
          neste concerto, nos anos 2000 que vi actuar a Telma T-von. Na altura
          com o seu grupo Backwordz.
        </p>
      </>
    ),
    image: "/img/timeline/madorna@2x.png",
  },
  {
    date: "2003 a 2008",
    title: "Blacksystem & HipHop Ladies",
    content: (
      <>
        <p>
          Ter visto o concerto das Backwordz motivou-me para perceber se haviam
          outras mulheres a fazer rap e isto motivou-me a fazer um site. A ideia
          do site era uma plataforma de divulgação do hip-hop feminino
          português.
        </p>
        <p>
          Aprendi a fazer código e fiz o meu primeiro site. Esse site começou de
          uma forma muito básica com o tempo fui aprendendo mais código e design
          e acabei por criar um plataforma em wordpress chamada Hip-hop Ladies.
          Também conheci a Blaya no No mIrc e conjuntamente com a minha irmã,
          Ana, a minha amiga Marlene e a minha sobrinha (que tem a mesma idade
          que eu), Grace, criamos um grupo, as Blacksystem. Tivemos os nossos
          primeiros concertos como grupo. Em 2005, comecei a organizar eventos
          da hip-hop ladies e fomos todas actuando a solo e também convidei
          outras mulheres, podendo ser b-girls ou djs para actuarem.
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
          Com o tempo comecei a ter concertos a nome individual como Dama Bete e
          durante uma actuação no festival Musidanças, onde abri o concerto da
          Sara Tavares tive a sorte de ser considerada artista revelação pela
          revista Blitz.
        </p>
        <p>
          Depois disto conheci aquela que viria a ser o meu manager e pouco
          tempo depois assinei pela Universal Music
        </p>
        <p>
          E foi também nesta altura que termineu a minha primeira licencitura em
          Gestão do Lazer e da Animação Turística na escola Superior de
          Hotelaria do Estoril. E o meu albúm saiu pouco tempo depois.
        </p>
        <p>
          Durante algum tempo, tive alguns concertos, entrevistas. Também
          percebi nesta fase que não estava preparada para a exposição que o
          album me trouxe. E foi aqui que comecei a ter mix feelings se a música
          realmente me fazia feliz.
        </p>
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
          Tentei conciliar a minha vida de artista e passei por alguns estágios
          e trabalhos, fiz programação no Music Box Lisboa, passei por uma
          agência onde trabalhei com nomes como o Vitorino e o Chullage e
          organizei alguns eventos de world music e hip-hop. Foi difícil. Os
          trabalhos eram sempre mal remunerados. E foi aí que comecei a pensar
          que deveria fazer outra coisa da vida.
        </p>
        <p>
          Percebi que tinha outra paixão, pela tecnologia e comecei a focar-me
          mais em criar um portfolio de web development. E arranjei o meu
          primeiro emprego nesta área, na Mix and Blend na LX factory. Quis o
          destino que esta empresa tivesse ligado a eventos. E para alem de
          sites faziamos também live streams de eventos como o Meo Like Music
          que era transmitodo live do campo pequeno. Comecei aí a perceber que a
          tecnologia também poderia ser aliada à musica.
        </p>
      </>
    ),
    image: "/img/timeline/web-dev-musica@2x.png",
  },
  {
    date: "2013 e 2014",
    title: "Startups e Brasil",
    content: (
      <>
        <p>
          Durante esta época, comecei a vingar no mundo do web developmente e
          comecei a travalhar para uma startup alemã de um fotografo
          internacinalmente conhecido, Marcus Mam. E tive a oportunidade de ir
          para o Brasil por duas vezes para actuar como Dama Bete.
        </p>
        <p>
          Foi dificil, de conseguir conciliar a música com o trabalho que tinha
          e acabeu por perder o trabalho.Claro que fiquei, a pensar que tinha
          perdido um bom trabalho e claro lá ia eu voltar à precariedade. Por
          isso quando voltei do Brasil, devidi que era altura de me focar só na
          web. E acabei por conseguir um trabalho como UX Designer na NOS.
          Depois disse tive uma oferta de trabalho para a Irlanda, e aceitei.
        </p>
      </>
    ),
    image: "/img/timeline/brasil@2x.png",
  },
  {
    date: "2015 a 2018",
    title: "Viver na Irlanda e viagens",
    content: (
      <>
        <p>
          Na Irlanda, apredi o que é ser valorizado e as pessoas apoiam-nos a
          crescer. Fui incentivada a particiar e falar em meetups, conferências
          e eventos.
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
    image: "/img/timeline/irlanda-e-viagens@2x.png",
  },

  {
    date: "2018 até 2023",
    title: "Prémio e conferências pelo Mundo",
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
        <p>
          Nesse mesmo ano falei na minha primeira conferencia, de React.js,
          framework do Facebook que aconteceu em Las vegas.
        </p>
        <p>
          Depois disso os convites não pararam e tive a sorte de falar em muitas
          conferências pelo mundo. Desde Yerevan, Sofia, Amsterdão, Berlim entre
          muitos mais sítios.
        </p>
        <p>
          Em algumas das minhas paletras conciliei a tecnolofia com a música mas
          ainda assim muitas vezes omitia o meu passado como rapper.
        </p>
      </>
    ),
    image: "/img/timeline/conferencias@2x.png",
  },
  {
    date: "2023",
    title: "Reconciliação com a música e tecnologia",
    content:
      "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.",
    image: "/img/timeline/reconciliacao@2x.png",
  },
];
