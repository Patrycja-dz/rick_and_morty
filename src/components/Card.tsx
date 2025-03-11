import { Character } from "../models/characters";
import styles from "./Card.module.css";
import { FC, forwardRef, useEffect, useState } from "react";
import { fetchEpisodes } from "../api/api";

type CardProps = {
  item: Character;
};
const Card: FC<CardProps> = forwardRef(({ item }, ref) => {
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

  return (
    <article className={styles.card} ref={ref}>
      <img src={item.image} alt={item.name} />
      <div>
        <h2>{item.name}</h2>
        <p>
          {checkStatus(item.status)} {item.status} - {item.species}
        </p>
        <p>First seen in:</p>

        <p className={styles.firstSeen}>{firstAppearance}</p>
      </div>
    </article>
  );
});
export default Card;
