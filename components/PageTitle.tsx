import { syncopate } from "@/utils/fonts";

export const PageTitle = ({
  title,
  description,
}: {
  title: string;
  description?: string | React.ReactNode;
}) => {
  return (
    <>
      <h2
        className={`mb-6 text-4xl md:text-6xl xl:text-7xl text-[--accent] font-bold font-heading tracking-px-n leading-none uppercase ${syncopate.className}`}
      >
        {title}
      </h2>

      {description && typeof description === "string" ? (
        <p className="mb-20 text-lg text-zinc-400 font-medium leading-normal md:max-w-xl m-auto">
          {description}
        </p>
      ) : (
        description
      )}
    </>
  );
};
