import { SearchIcon } from "../../assets/svg";
import styles from "./search.module.scss";

const SearchBar = ({className}) => {
  return (
    <div className={`${styles.search} ${className && className}`}>
      <SearchIcon />
      <input placeholder="Find cards anywhere" />
    </div>
  );
};

export default SearchBar;
