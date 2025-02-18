import { Character } from "../models/characters";
import styles from "./Card.module.css";
import { FC } from "react";
type CardProps = {
  item: Character;
};
const Card: FC<CardProps> = ({ item }) => {
  return (
    <article className={styles.card}>
      <img src={item.image} alt={item.name} />
      <div>
        <h2>{item.name}</h2>
      </div>
    </article>
  );
};
export default Card;
