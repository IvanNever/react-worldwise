import styles from "./CountryItem.module.css";
import { flagEmojiToPNG } from "../utils/flagEmojiToPNG.jsx";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji ? flagEmojiToPNG(country.emoji) : ""}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
