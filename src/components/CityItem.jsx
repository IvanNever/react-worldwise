import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";
import { flagEmojiToPNG } from "../utils/flagEmojiToPNG.jsx";
import { useCities } from "../contexts/CitiesContext.jsx";
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
export default function CityItem({ city }) {
  const { cityName, date, id, position, emoji } = city;
  const { currentCity } = useCities();

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${id === currentCity.id && styles["cityItem--active"]}`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>
          {emoji ? flagEmojiToPNG(emoji) : ""}
        </span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}
