import { LivroHhTugaData } from "@/data/livroHhTugaData";

export const getFemaleRappersByYear = (
  data: LivroHhTugaData[]
): { [key: number]: number } => {
  return data
    .filter((rapper) => rapper.gender === "female")
    .reduce((acc: { [key: number]: number }, rapper) => {
      acc[rapper.year] = (acc[rapper.year] || 0) + 1;
      return acc;
    }, {});
};

export const getFemaleRappersByYearInclZeros = (
  data: LivroHhTugaData[]
): { [key: number]: number } => {
  const startYear = 1985;
  const endYear = 2020;
  const result: { [key: number]: number } = {};

  for (let year = startYear; year <= endYear; year++) {
    result[year] = 0; // Inicializa com 0
  }

  data
    .filter((rapper) => rapper.gender === "female")
    .forEach((rapper) => {
      if (rapper.year >= startYear && rapper.year <= endYear) {
        result[rapper.year] = (result[rapper.year] || 0) + 1;
      }
    });

  return result;
};
