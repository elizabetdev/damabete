"use client";
import { FC, ReactNode } from "react";
import {
  FaInstagram,
  FaTiktok,
  FaXTwitter,
  FaGithub,
  FaSpotify,
} from "react-icons/fa6";
import { SectionTitle } from "./SectionTitle";
import { Section } from "./Section";

const StatCard = ({
  number,
  title,
  icon,
}: {
  number: string;
  title: string;
  icon: ReactNode;
}) => {
  return (
    <div className="w-fit rounded-[25px] bg-zinc-800 p-8 flex flex-col items-center aspect-square">
      <div className="h-12">{icon}</div>
      <div className="my-2">
        <h2 className="text-4xl font-bold">
          <span>{number}</span>
        </h2>
      </div>

      <div>
        <p className="mt-2 font-sans text-base font-medium text-gray-100">
          {title}
        </p>
      </div>
    </div>
  );
};

export const Stats = () => {
  return (
    <Section>
      <SectionTitle title="Estatísticas" description="" />

      <div className="flex flex-wrap justify-center gap-8">
        <StatCard
          number="1,094"
          title="followers"
          icon={<FaInstagram className="text-zinc-100" size={50} />}
        />
        <StatCard
          number="13"
          title="followers"
          icon={<FaTiktok className="text-zinc-100" size={50} />}
        />
        <StatCard
          number="7,070"
          title="followers"
          icon={<FaXTwitter className="text-zinc-100" size={50} />}
        />
        <StatCard
          number="972"
          title="followers"
          icon={<FaGithub className="text-zinc-100" size={50} />}
        />
        <StatCard
          number="2,104"
          title="followers"
          icon={<FaSpotify className="text-zinc-100" size={50} />}
        />
      </div>
    </Section>
  );
};
