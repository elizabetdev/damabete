import { syncopate } from "@/utils/fonts";

export const SectionTitle = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <>
      <h2
        className={`mb-6 text-2xl md:text-6xl xl:text-6xl text-[--accent] font-bold font-heading tracking-px-n leading-none uppercase text-center ${syncopate.className}`}
      >
        {title}
      </h2>

      {description && (
        <p className="mb-20 text-lg text-zinc-400 font-medium leading-normal md:max-w-2xl m-auto text-center">
          {description}
        </p>
      )}
    </>
  );
};
