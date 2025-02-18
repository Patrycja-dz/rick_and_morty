import { useEffect, useState } from "react";
import { Character } from "../models/characters";
import { fetchCharacters } from "../api/api";
import { getPageNumber } from "../util/getPageNumber";
import CharacterCards from "./CharacterCards";
import Card from "./Card";

const InfiniteScroll = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchCharacters().then((data) => {
      setCharacters([...data.results]);
      const nextPage = getPageNumber(data.info.next);
      if (nextPage) setPage(nextPage);
    });
  }, []);

  return (
    <CharacterCards
      characters={characters}
      characterKeyFn={(character) => character.id}
    >
      {(character) => <Card item={character} />}
    </CharacterCards>
  );
};

export default InfiniteScroll;
