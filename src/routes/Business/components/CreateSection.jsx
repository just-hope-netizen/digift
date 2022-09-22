import { PlusStarIcon } from "../../../assets/svgs";
import { DiskIcon } from "../../../assets/svgs";
import RectBg from "../../../components/RectBg";
import styles from "./styles/create-section.module.scss";

const CreateSection = () => {
  return (
    <RectBg>
      <div className={styles.create}>
        <div className={styles.create__header}>
          <PlusStarIcon />
          <p>Digift helps businesses </p>
        </div>
        <div className={styles.create__title}>
          <h3>Why do fast-growing</h3>
          <h3> merchant and vendor </h3>
          <div className={styles.create__title__bottom}>
            <h3> choose</h3>
            <div className={styles.create__title__bottom__disk}>
              <DiskIcon />
            </div>
            <h3>us?</h3>
          </div>
        </div>

        <div className={styles.create__sub}>
          <p>
            Whether you’re a business looking to sell your own gift cards, a
            company looking for bulk gift card solution, digift is for you.
          </p>
        </div>

        <button>Create an account today</button>
      </div>
    </RectBg>
  );
};

export default CreateSection;
