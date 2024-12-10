import React from "react";
import { PageWrapper } from "./PageWrapper";
import { PageTitle } from "./PageTitle";
import NextImage from "next/image";

export const SobrePage: React.FC = () => {
  return (
    <PageWrapper>
      <article className="prose prose-lg prose-invert mx-auto">
        <PageTitle title="Sobre" className="text-left" />

        <section>
          <p className="lead">
            Hey! O meu nome é Elizabet, mas muitos conhecem-me por Dama Bete.
            Sou uma rapper luso-moçambicana e também design engineer. A minha
            vida tem sido uma jornada entre dois mundos que, à primeira vista,
            podem parecer opostos – a música e a tecnologia. Mas para mim,
            sempre estiveram conectados. Do palco para o código, da poesia
            rimada para a lógica do design, cada passo foi uma descoberta, uma
            aprendizagem e, claro, uma história para contar.
          </p>

          <p>
            A minha timeline é uma mistura de desafios e conquistas, que começou
            nas ruas da Madorna e me levou aos palcos internacionais e às
            conferências mais importantes da área de tech. Se quiseres saber
            mais sobre como esta viagem se desenrolou, espreita os momentos mais
            marcantes da minha carreira, desde os primeiros concertos até aos
            projetos que fundem hip-hop e programação.
          </p>
        </section>

        <section>
          <NextImage
            alt=""
            src="/img/timeline/madorna@2x.png"
            width={700}
            height={475}
            quality={90}
          />

          <h2 className="text-2xl font-semibold mt-4 mb-2">
            Madorna. Onde tudo começou
          </h2>
          <p>
            Cresci na Madorna, na Parede, concelho de Cascais. Foi lá que andei
            na creche, na escola primária e secundária. Mas foi na preparatória,
            em Matarraque, que ouvi pela primeira vez hip-hop português. Mais
            tarde, quando entrei para a escola secundária da Madorna, nos anos
            2000, assisti ao meu primeiro concerto de hip-hop português ao vivo.
            Foi o meu irmão, Macaco Simão, que organizou o evento. Ele era um
            grande impulsionador do movimento no concelho. Nesse concerto vi
            atuar a Telma T-von, com o grupo Backwordz, e foi ali que comecei a
            querer saber mais sobre o rap feminino.
          </p>
        </section>

        <section>
          <NextImage
            alt=""
            src="/img/timeline/hiphop-ladies@2x.png"
            width={700}
            height={475}
            quality={90}
          />

          <h2 className="text-2xl font-semibold mt-4 mb-2">
            Blacksystem & HipHop Ladies
          </h2>
          <p>
            O concerto das Backwordz foi um momento de inspiração para mim.
            Motivou-me a procurar outras mulheres a fazer rap e, a partir daí,
            criei um site. A ideia inicial era simples: uma plataforma para
            divulgar o hip-hop feminino português. Comecei a aprender a
            programar e criei o meu primeiro site. Com o tempo, esse projeto
            evoluiu e acabou por se transformar numa plataforma em WordPress
            chamada Hip-Hop Ladies.
          </p>
          <p>
            Entretanto, conheci a Blaya no mIRC, e juntamente com a minha irmã
            Ana, a minha amiga Marlene e a minha sobrinha Grace (que tem a mesma
            idade que eu), criámos o grupo Blacksystem. Começámos a dar os
            nossos primeiros concertos como grupo. Em 2005, organizei eventos da
            Hip-Hop Ladies, onde atuávamos a solo, mas também convidávamos
            outras mulheres, incluindo b-girls e DJs, para partilhar o palco.
          </p>
        </section>

        <section>
          <NextImage
            alt=""
            src="/img/timeline/de-igual-para-igual@2x.png"
            width={700}
            height={475}
            quality={90}
          />

          <h2 className="text-2xl font-semibold mt-4 mb-2">
            De igual para igual
          </h2>
          <p>
            Com o tempo, comecei a atuar sozinha como Dama Bete. Num desses
            momentos, no Festival Musidanças, onde abri o concerto da Sara
            Tavares, fui considerada artista revelação pela revista Blitz. Foi
            ali que conheci o meu futuro manager e, pouco tempo depois, assinei
            contrato com a Universal Music, através da qual lancei o álbum
            &quot;De Igual para Igual&quot;.
          </p>
          <p>
            Nesse mesmo período, concluí a minha licenciatura em Gestão do Lazer
            e Animação Turística na Escola Superior de Hotelaria do Estoril. O
            meu álbum saiu pouco depois e, durante algum tempo, tive vários
            concertos e entrevistas. No entanto, percebi que não estava
            totalmente preparada para a exposição que o álbum me trouxe. Comecei
            a questionar se a música me fazia realmente feliz, o que me deixou
            com sentimentos mistos em relação à carreira.
          </p>
        </section>

        <section>
          <NextImage
            alt=""
            src="/img/timeline/web-dev-musica@2x.png"
            width={700}
            height={475}
            quality={90}
          />

          <h2 className="text-2xl font-semibold mt-4 mb-2">
            Web Developer + música
          </h2>
          <p>
            Depois do lançamento do álbum e com a crise que atingiu Portugal em
            2008, comecei a sentir a falta de eventos e oportunidades. Durante
            este período, tentei conciliar a minha vida de artista com estágios
            e trabalhos temporários. Trabalhei na programação de eventos no
            Music Box Lisboa, passei por uma agência onde colaborei com artistas
            como Vitorino e Chullage, e organizei alguns eventos de world music
            e hip-hop. Mas os trabalhos eram mal pagos, e comecei a pensar
            seriamente em fazer algo diferente com a minha vida.
          </p>
          <p>
            Foi então que percebi que tinha uma paixão crescente pela
            tecnologia. Decidi focar-me na criação de um portfólio de web
            development e consegui o meu primeiro emprego na área, na Mix and
            Blend, na LX Factory. Esta empresa também estava ligada a eventos, e
            lá, além de criar sites, fizemos live streams de eventos como o Meo
            Like Music, transmitido ao vivo do Campo Pequeno. Foi aí que percebi
            que a tecnologia podia, de facto, aliar-se à música.
          </p>
        </section>

        <section>
          <NextImage
            alt=""
            src="/img/timeline/brasil@2x.png"
            width={700}
            height={475}
            quality={90}
          />

          <h2 className="text-2xl font-semibold mt-4 mb-2">
            Startups e Brasil
          </h2>
          <p>
            Durante este tempo, comecei a ganhar mais destaque como web
            developer e fui trabalhar para uma startup alemã de um fotógrafo
            internacionalmente conhecido, Marcus Mam. Tive ainda a oportunidade
            de ir ao Brasil duas vezes para atuar como Dama Bete.
          </p>
          <p>
            Foi difícil conciliar a música com o trabalho, e acabei por perder o
            emprego. Claro que fiquei a pensar que tinha perdido uma boa
            oportunidade, mas também percebi que era a altura de me focar
            completamente no desenvolvimento web. Quando voltei do Brasil,
            consegui um emprego como UX Designer na NOS, e pouco tempo depois,
            recebi uma oferta de trabalho para a Irlanda, que aceitei.
          </p>
        </section>

        <section>
          <NextImage
            alt=""
            src="/img/timeline/irlanda-e-viagens@2x.png"
            width={700}
            height={475}
            quality={90}
          />

          <h2 className="text-2xl font-semibold mt-4 mb-2">
            Viver na Irlanda e viagens
          </h2>
          <p>
            Na Irlanda, aprendi o que era ser valorizada. As pessoas
            apoiavam-nos a crescer e fui incentivada a participar em meetups,
            conferências e eventos. Durante esse período, viajei por vários
            países e, graças à minha paixão pelo hip-hop, criei um projeto
            chamado Cassette Tape, que explorava a Web Audio API. O projeto
            tornou-se inovador e foi apresentado no site Experiments with
            Google, o que me levou a ser convidada para o Google IO de Dublin.
          </p>
        </section>

        <section>
          <NextImage
            alt=""
            src="/img/timeline/conferencias@2x.png"
            width={700}
            height={475}
            quality={90}
          />

          <h2 className="text-2xl font-semibold mt-4 mb-2">
            Prémio e conferências pelo mundo
          </h2>
          <p>
            Em 2018, o meu projeto open-source React Kawaii tornou-se trending
            no GitHub, o que me levou a ganhar o prémio de &quot;Fun Project of
            the Year&quot; na React Amsterdam. Foi um marco importante, que
            abriu portas para falar em conferências de React.js por todo o
            mundo. A minha primeira palestra foi em Las Vegas, e depois disso,
            os convites não pararam. Falei em eventos desde Yerevan a Sofia,
            Amsterdão e Berlim, entre muitos outros.
          </p>
          <p>
            Em algumas palestras, consegui conciliar a tecnologia com a música,
            mas, curiosamente, omitia muitas vezes o meu passado como rapper.
          </p>
        </section>

        <section>
          <NextImage
            alt=""
            src="/img/timeline/reconciliacao@2x.png"
            width={700}
            height={475}
            quality={90}
          />

          <h2 className="text-2xl font-semibold mt-4 mb-2">
            Reconciliação com a música e tecnologia
          </h2>
          <p>
            Hoje em dia, considero-me uma artista multidisciplinar. Sou design
            engineer, rapper e desenvolvedora. Finalmente encontrei o equilíbrio
            entre a música e a tecnologia, duas paixões que me definem, e é
            através delas que consigo expressar quem sou em todos os meus
            projetos.
          </p>
        </section>
      </article>
    </PageWrapper>
  );
};
