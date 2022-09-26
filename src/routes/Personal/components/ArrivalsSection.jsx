import { useState } from 'react';
import GiftCard from '../../../components/GiftCard';
import Checkbox from '../../../components/Checkbox';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
} from '../../../assets/svg';
import styles from './styles/arrivals-section.module.scss';

const filters = [
  'Ecommerce',
  'Popular',
  'Airtime & Electricity',
  'Gaming',
  'Electronics',
  'Clothes and Fashion',
  'Jewelry & Watches',
  'Home and furnitures',
  'Sports & Entertainment',
];

const ArrivalsSection = () => {
  const [show, setShow] = useState(6);
  const [dropdown, setDropdown] = useState();
  const data = Array(show).fill(1);
  const toggleIcon = () => {
    setDropdown(!dropdown);
  };

  return (
    <section className={styles.arrivals}>
      <h3>Latest Arrivals</h3>
      <div>
        <div className={styles.arrivals__content}>
          <div className={styles.arrivals__content__filter}>
            <div className={styles.arrivals__content__filter__header}>
              <h4>Filters</h4>
              <button>Reset</button>
            </div>

            <div className={styles.arrivals__content__filter__categories}>
              <h5>
                Categories
                <span>
                  {dropdown ? (
                    <ArrowUpIcon onClick={toggleIcon} />
                  ) : (
                    <ArrowDownIcon onClick={toggleIcon} />
                  )}
                </span>
              </h5>
              {filters.map((item, index) => (
                <div
                  key={index}
                  className={`${styles.arrivals__content__filter__categories__item}
                  ${dropdown && styles.active}`}
                >
                  <Checkbox />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.arrivals__content__cards}>
            {data.map((item, index) => (
              <GiftCard key={index} />
            ))}
          </div>
        </div>
        {show === 6 ? (
          <button className={styles.arrivals__load} onClick={() => setShow(12)}>
            Load more products <ArrowRightIcon />
          </button>
        ) : (
          <p className={styles.arrivals__end}>End of product list</p>
        )}
      </div>
    </section>
  );
};

export default ArrivalsSection;
