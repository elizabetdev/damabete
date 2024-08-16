import React from "react";
import { PageWrapper } from "./PageWrapper";
import { destaques } from "@/data/destaques";
import { PageTitle } from "./PageTitle";
import { DestaquesList } from "./DestaquesList";

export const DestaquesPage: React.FC = () => {
  return (
    <PageWrapper>
      <PageTitle
        title="Destaques"
        description="Descobre os eventos e participações onde vou estar presente, desde
            concertos e conferências até masterclasses e iniciativas especiais.
            Fica a par das minhas próximas atuações e explora os vídeos das
            participações anteriores. Junta-te a mim em experiências que
            celebram a música, a criatividade e a inovação."
      />
      <DestaquesList destaques={destaques} />
    </PageWrapper>
  );
};
