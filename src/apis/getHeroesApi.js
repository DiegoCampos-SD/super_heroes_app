export const getHeroesApi = async () => {
  const url = "https://akabab.github.io/superhero-api/api/all.json";
  const resp = await fetch(url);
  const heroes = await resp.json();

  const fixedHeroes = heroes.map((hero) => ({
    id: hero.id,
    superhero: hero.name,
    publisher: hero.biography.publisher,
    full_name: hero.biography.fullName,
    first_appearance: hero.biography.firstAppearance,
    alignment: hero.biography.alignment,
    occupation: hero.work.occupation,
    image: hero.images.lg,
    placeOfBirth: hero.biography.placeOfBirth,
    alignment: hero.biography.alignment,
    groupAffiliation: hero.connections.groupAffiliation,
    relatives: hero.connections.relatives,
    race: hero.appearance.race,
  }));

  return fixedHeroes;
};
