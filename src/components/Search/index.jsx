import { SearchIcon } from "../../assets/svgs";
import styles from "./search.module.scss";

const SearchBar = () => {
  return (
    <div className={styles.search}>
      <SearchIcon />
      <input placeholder="Find cards anywhere" />
    </div>
  );
};

export default SearchBar;
