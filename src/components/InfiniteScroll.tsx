import { useEffect, useRef, useState } from "react";
import { Character } from "../models/characters";
import { fetchCharacters } from "../api/api";
import { getPageNumber } from "../util/getPageNumber";
import CharacterCards from "./CharacterCards";
import Card from "./Card";

const InfiniteScroll = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const lastCharacterRef = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver>(null);
  useEffect(() => {
    fetchCharacters().then((data) => {
      setCharacters([...data.results]);
      const nextPage = getPageNumber(data.info.next);
      if (nextPage) setPage(nextPage);
    });
  }, []);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchCharacters(page).then((data) => {
            setCharacters((prevCharacters) => {
              return [...prevCharacters, ...data.results];
            });
            const nextPage = getPageNumber(data.info.next);
            if (nextPage) setPage(nextPage);
          });
        }
      },
      {
        root: document,
        threshold: 0.75,
      }
    );
    if (lastCharacterRef.current) {
      observer.current.observe(lastCharacterRef.current);
    }
    return () => {
      observer.current?.disconnect();
    };
  }, [page]);

  return (
    <CharacterCards
      characters={characters}
      characterKeyFn={(character) => character.id}
    >
      {(character, index) => {
        if (index === characters.length - 1) {
          return <Card item={character} ref={lastCharacterRef} />;
        } else {
          return <Card item={character} />;
        }
      }}
    </CharacterCards>
  );
};

export default InfiniteScroll;
