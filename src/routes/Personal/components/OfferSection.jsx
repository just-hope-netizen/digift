import RectangleImg from "../../../assets/images/Rectangle.png";
import { LightningIcon } from "../../../assets/svgs";
import styles from "./styles/offer-section.module.scss";

const OfferSection = () => {
  return (
    <div className={styles.offer}>
      <img src={RectangleImg} alt="" />
      <div className={styles.offer__content}>
        <h4>
          Create happiness from buying a gift card today. <LightningIcon />
        </h4>
      </div>
    </div>
  );
};

export default OfferSection;
