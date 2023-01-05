import { useEffect, useState } from "react";
import { getHeroesApi } from "../../apis/getHeroesApi";

export const useFetchHeroes = () => {
  const [heroes, setHeroes] = useState([]);

  const getHeroes = async () => {
    const newHeroes = await getHeroesApi();
    setHeroes(newHeroes);
  };

  useEffect(() => {
    getHeroes();
  }, []);



  return {
    heroes,
  };
};
