export const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="pt-24 pb-36 bg-zinc-950 overflow-hidden">
      <div className="container px-4 mx-auto">{children}</div>
    </section>
  );
};
