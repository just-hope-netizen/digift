import BusinessTopImage from "../../../assets/images/business-top.png";
import { TopStarIcon, ArrowRightIcon } from "../../../assets/svgs";
import RotatingText from "../../../components/RotatingText";
import styles from "./styles/top-section.module.scss";

const BusinessTopSection = () => {
  return (
    <section className={styles.top}>
      <div className={styles.top__left}>
        <div className={styles.top__left__title}>
          <h3>Expand the giftcard</h3>
          <h3>
            industry, <RotatingText text={["one card"]} />
          </h3>
          <h3>
            at a time! <TopStarIcon />
          </h3>
        </div>
        <p>
          Digift helps businesses connect with customers by letting them offer
          their business gift cards to a large number of people.
        </p>

        <div className={styles.top__left__btns}>
          <button className={styles.top__left__btns__start}>
            Get started <ArrowRightIcon />
          </button>
          <button className={styles.top__left__btns__sign}>
            Sign In <ArrowRightIcon color="#8A91A8" />
          </button>
        </div>
      </div>

      <img src={BusinessTopImage} alt="dashboard" />
    </section>
  );
};

export default BusinessTopSection;
