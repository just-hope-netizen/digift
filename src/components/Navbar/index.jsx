import { Link } from "react-router-dom";

import { Logo, Chevron } from "../../assets/svgs";
import SearchBar from "../Search";
import ThemeSwitch from "../ThemeSwitch";
import { StarIcon } from "../../assets/svgs";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Logo />
      <div className={styles.nav__links}>
        <Link to="/">
          Personal <Chevron />
        </Link>
        <Link to="/business">
          Business <Chevron />
        </Link>
        <SearchBar />
      </div>
      <div className={styles.nav__btns}>
        <ThemeSwitch />

        <button className={styles.nav__btns__login}>Login</button>
        <button className={styles.nav__btns__started}>
          Get started <StarIcon />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
