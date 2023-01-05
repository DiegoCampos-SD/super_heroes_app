// import { heroes } from "../data/heroes";

import { useFetchHeroes } from "../hooks/useFetchHeroes";

export const getHeroesByPublisher = (publisher) => {
  const { heroes } = useFetchHeroes();
  const validPublishers = ["DC Comics", "Marvel Comics"];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`${publisher} is not valid publisher`);
  }

  const finalHeroes = heroes.filter((hero) => hero.publisher === publisher);

  return finalHeroes;
};
