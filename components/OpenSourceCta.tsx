import React from "react";
import Link from "next/link";
import { getGitHubStars } from "@/utils/github";
import { cn } from "@/utils/classes";
import { FaGithub } from "react-icons/fa6";
import { syncopate } from "@/utils/fonts";

interface OpenSourceCtaProps {
  className?: string;
}

export const OpenSourceCta = async (props: OpenSourceCtaProps) => {
  const { className } = props;
  const stars = (await getGitHubStars()) ?? 99999;

  return (
    <section
      className={cn("mx-auto max-w-2xl px-6 text-center mb-24", className)}
    >
      <h2
        className={`mx-auto mt-8 max-w-2xl text-2xl font-bold tracking-tighter lg:text-4xl uppercase ${syncopate.className}`}
      >
        Proudly <span className="text-rose-500">open-source</span>
      </h2>
      <p className="mt-4 text-lg text-fg-muted">
        Our source code is available on GitHub - feel free to read, review, or
        contribute to it however you want!
      </p>
      <div className="mt-10 flex justify-center space-x-2">
        <Link
          href="https://github.com/miukimiu/damabete"
          target="_blank"
          rel="noreferrer"
          className="group flex"
        >
          <div className="flex h-10 items-center justify-center space-x-2 rounded-md bg-zinc-800 px-4 transition-colors group-hover:bg-zinc-800-hover">
            <FaGithub size={18} />
            <span className="truncate">Star me on GitHub</span>
          </div>
          <div className="flex items-center">
            <div className="h-4 w-4 border-y-8 border-l-0 border-r-8 border-solid border-zinc-800 border-y-transparent transition-colors group-hover:border-zinc-800-hover group-hover:border-y-transparent" />
            <div className="flex h-10 items-center rounded-md bg-zinc-800 px-4 font-medium transition-colors group-hover:bg-zinc-800-hover">
              {stars}
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};
