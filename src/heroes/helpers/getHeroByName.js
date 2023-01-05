import { useFetchHeroes } from "../hooks/useFetchHeroes";

export const getHeroByName = (name = "") => {
  const { heroes } = useFetchHeroes();
  name = name.toLocaleLowerCase().trim();

  if (name.length === 0) return [];



  return heroes.filter((hero) =>
    hero.superhero.toLocaleLowerCase().includes(name)
  );
};
