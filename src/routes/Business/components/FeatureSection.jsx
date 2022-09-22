import FeatureCard from "../../../components/FeatureCard";
import styles from "./styles/feature-section.module.scss";

const FeatureSection = () => {
  return (
    <div className={styles.feature}>
      <FeatureCard>
        <p>
          Designed for today’s <span>ambitious</span> businesses.
        </p>
        <p>
          We give merchants the ability to sell digital Gift Cards for their
          business quickly, intuitively and affordably.{' '}
        </p>
      </FeatureCard>
      <FeatureCard>
        <p>
          Features that <span>empower</span> your business.
        </p>
        <p>
          Automate your sales and marketing so you can focus on other areas of
          your business.
        </p>
      </FeatureCard>
    </div>
  );
};

export default FeatureSection;
