// import { useFetchHeroById } from "../hooks/useFetchHeroById";
import { useFetchHeroes } from "../hooks/useFetchHeroes";

export const getHeroById = (id) => {
  const { heroes } = useFetchHeroes();

  const heroeFound = heroes.filter((hero) => hero.id == id);

  return heroeFound;
};
