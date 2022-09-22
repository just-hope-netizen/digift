import RectangleImg from "../../assets/images/Rectangle.png";
import styles from "./rect-bg.module.scss";

const RectBg = ({ children }) => {
  return (
    <section className={styles.rect}>
      <img src={RectangleImg} alt="rectangle-bg" />
      <div className={styles.rect__content}>{children}</div>
    </section>
  );
};

export default RectBg;
