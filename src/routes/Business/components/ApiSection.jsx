import ApiImage from "../../../assets/images/api.png";
import { ArrowRightIcon } from "../../../assets/svgs";
import RotatingText from "../../../components/RotatingText";
import styles from "./styles/api-section.module.scss";

const ApiSection = () => {
  return (
    <section className={styles.api}>
      <div className={styles.api__div}>
        <h3>Our API is built to</h3>{' '}
        <h3>
          be as <RotatingText text={['lightweight']} />
        </h3>
        <h3> and efficient as</h3>
        <h3>possible.</h3>
        <p>We offer client and server libraries in everything from our API</p>
        <div className={styles.api__btns}>
          <button className={styles.api__btns__start}>
            Get started <ArrowRightIcon />
          </button>
          <button className={styles.api__btns__sign}>
            Sign In <ArrowRightIcon color='#8A91A8' />
          </button>
        </div>
      </div>
      <img src={ApiImage} alt='dashboard' className={styles.api__img} />
    </section>
  );
};

export default ApiSection;
