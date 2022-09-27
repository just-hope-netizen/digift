import { useState } from 'react';
import { CloseIcon, MenuBar, SearchIcon } from '../../assets/svg';
import SearchBar from '../../components/Search';
import styles from './menu.module.scss';

const Menu = ({ onClick, className, toggle }) => {
  const [showBar, setShowBar] = useState();

  return (
    <div className={className}>
      <div className={styles.icons}>
          <CloseIcon
            onClick={() => setShowBar(!showBar)}
            className={`${styles.icons__close} ${
              showBar && styles.icons__close__active
            }`}
          />
          
          {
            showBar ? null
            : 
          <SearchIcon
            className={styles.searchIcon}
            onClick={() => setShowBar(!showBar)}
          />
          }
      </div>
      <SearchBar
        className={`${styles.searchBar} ${showBar && styles.searchBar__active}`}
      />
      <button onClick={onClick} className={styles.menu__btn}>
        {toggle ? <CloseIcon /> : <MenuBar />}
      </button>
    </div>
  );
};
export default Menu;
