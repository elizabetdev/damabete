export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <main className="text-center py-20">
      <section className="pt-24 pb-36 bg-zinc-950 overflow-hidden">
        <div className="container px-4 mx-auto">{children}</div>
      </section>
    </main>
  );
}
