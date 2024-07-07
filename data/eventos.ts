export type EventoProps = {
  title: string;
  description: string;
  location: string;
  type: string;
  youtube?: string;
  img?: string;
  alt?: string;
  link?: string;
  date: string;
};

export type EventosProps = EventoProps[];

export const eventos: EventosProps = [
  {
    title: "She Raps",
    description: "Juri do She Raps",
    location: "Lisboa",
    type: "Masterclass",
    link: "http://ops.com",
    img: "/img/eventos/she-raps.jpg",
    date: "Maio 2024",
  },
  {
    title: "UnHappy Hour",
    description: "Atelier Formativo de Beats, Rimas & DJing",
    location: "Skoola, Lisboa",
    type: "Masterclass",
    link: "http://ops.com",
    img: "/img/eventos/masterclass.jpg",
    date: "2024-12-02",
  },
  {
    title: "Quem tem medo de Zurita de Oliveira",
    location: "SMUP, Parede",
    description: "lorem",
    type: "Show",
    link: "http://ops.com",
    img: "/img/eventos/zurita.jpg",
    date: "2024-12-02",
  },
  {
    title: "Guerilla Girls no Sumol Summer Fest",
    location: "Sumol Summer Fest, Costa da Caprica",
    description: "lorem",
    type: "Show",
    link: "http://ops.com",
    img: "/img/eventos/guerilla-girls.jpg",
    date: "2023-07-02",
  },
  {
    title: "Penpot Fest 2023",
    location: "Barcelona, Espanha",
    description: "Crafting interactive audio experiences with Penpot and SVG",
    type: "Talk",
    youtube: "https://youtu.be/yhrrj4XIuwo",
    img: "/img/eventos/penpot-fest.jpg",
    alt: "",
    date: "2023-06-29",
  },
  {
    title: "React Day Berlin 2022",
    location: "Berlim, Alemanha",
    description: "Emotional & Functional UI Animations in React",
    type: "Talk",
    img: "/img/eventos/react-day-berlin.jpg",
    date: "2022-12-02",
    link: "https://reactday.berlin/",
  },
];
