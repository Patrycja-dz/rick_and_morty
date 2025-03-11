export const fetchCharacters = async (page: number = 1) => {
  const lastPage = 42;
  if (page > lastPage) return;
  const res = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  const data = await res.json();
  return data;
};

export const fetchEpisodes = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  return data.name;
};
