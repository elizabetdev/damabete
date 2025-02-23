import { VelocityScroll } from "@/components/ScrollBasedText";

export const ScrollBasedTextFooter = () => {
  return (
    <div className="pb-24">
      <VelocityScroll
        text="De Igual Para Igual"
        default_velocity={2}
        className={`font-display text-center text-4xl font-bold font-heading text-zinc-800 drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem] uppercase`}
      />
    </div>
  );
};
