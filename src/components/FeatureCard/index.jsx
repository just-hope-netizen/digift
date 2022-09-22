import FeatureImg from "../../assets/images/features.png";
import styles from "./feature-card.module.scss";

const FeatureCard = ({ children }) => {
  return (
    <div className={styles.featureCard}>
      {children}
      <img src={FeatureImg} alt="FeatureCardItem" />
    </div>
  );
};

export default FeatureCard;
