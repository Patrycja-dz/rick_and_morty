import { Character } from "../models/characters";
import styles from "./Card.module.css";
import { FC, useEffect, useState } from "react";
import { fetchEpisodes } from "../api/api";
type CardProps = {
  item: Character;
};
const Card: FC<CardProps> = ({ item }) => {
  const [firstAppearance, setFirstAppearance] = useState("");
  useEffect(() => {
    if (item.episode.length > 0) {
      fetchEpisodes(item.episode[0]).then((data) => {
        setFirstAppearance(data);
      });
    }
  }, [item]);
  const checkStatus = (status: string) => {
    if (status === "Alive") {
      return "🟢";
    } else if (status === "Dead") {
      return "🔴";
    } else {
      return "🟡";
    }
  };
  console.log(item, firstAppearance);
  return (
    <article className={styles.card}>
      <img src={item.image} alt={item.name} />
      <div>
        <h2>{item.name}</h2>
        <p>
          {checkStatus(item.status)} {item.status} - {item.species}
        </p>
        <p>First seen in:</p>
        <p>
          <p className={styles.firstSeen}>{firstAppearance}</p>
        </p>
      </div>
    </article>
  );
};
export default Card;
