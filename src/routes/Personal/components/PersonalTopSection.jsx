import { CreditCard, AmazonCard, LightningIcon } from "../../../assets/svgs";
import RectBg from "../../../components/RectBg";
import styles from "./styles/personal-top.module.scss";

const PersonalTopSection = () => {
  return (
    <div className={styles.top}>
      <RectBg>
        <div className={styles.top__content}>
          <h3>Eliminate bank restrictions with our unique gift cards.</h3>

          <p>
            Shop on Amazon, ASOS, 1800 flowers, Whilst paying for utilities and
            even more.
          </p>

          <button>Start Shopping</button>

          <div className={styles.top__content__leftslash}>
            <LightningIcon />
          </div>
          <div className={styles.top__content__rightslash}>
            <LightningIcon />
          </div>
        </div>

        <div className={styles.top__amazon}>
          <AmazonCard />
        </div>
        <div className={styles.top__credit}>
          <CreditCard />
        </div>
      </RectBg>
    </div>
  );
};

export default PersonalTopSection;
