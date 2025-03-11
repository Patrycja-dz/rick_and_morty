import { Character } from "../models/characters";
import styles from "./CharacterCards.module.css";
import { FC, ReactNode } from "react";
interface CharacterCardsProps {
  characters: Character[];
  characterKeyFn: (character: Character) => number;
  children: (character: Character, index: number) => ReactNode;
}
const CharacterCards: FC<CharacterCardsProps> = ({
  characters,
  characterKeyFn,
  children,
}) => {
  return (
    <ul className={styles.characters}>
      {characters.map((character, index) => (
        <li key={characterKeyFn(character)}>{children(character, index)}</li>
      ))}
    </ul>
  );
};

export default CharacterCards;
