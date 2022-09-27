import { Avatar } from "../../assets/svg";
import styles from "./customer-card.module.scss";

const CustomerCard = ({ comment }) => {
  return (

    <div className={styles.customer}>
      <p className={styles.customer__comment}>“{comment}”</p>
      <div className={styles.customer__profile}>
        <div className={styles.customer__profile__avatar}>
          <Avatar />
        </div>
        <div className={styles.customer__profile__names}>
          <h5>Osemwengie Benjamin</h5>
          <p>Product Designer at Digift</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
