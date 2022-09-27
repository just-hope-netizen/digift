import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Chevron, Logo, StarIcon } from '../../assets/svg';
import Menu from '../../layout/Menu';
import SearchBar from '../Search';
import styles from './navbar.module.scss';

const Navbar = () => {
  const [menu, setMenu] = useState();

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <nav className={styles.nav}>
      <Logo />
      <Menu onClick={toggleMenu} className={styles.menu} toggle={menu} />
      <div
        className={`${styles.links__wrapper} ${
          menu && styles.links__wrapper__active
        }`}
      >
        <div className={styles.nav__links}>
          <Link to='/' onClick={toggleMenu}>
            Personal <Chevron />
          </Link>
          <Link to='/business' onClick={toggleMenu}>
            Business <Chevron />
          </Link>
          <SearchBar />
        </div>
        <div className={styles.nav__btns}>
          <button className={styles.nav__btns__login}>Login</button>
          <button className={styles.nav__btns__started}>
            Get started <StarIcon />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
