import { AmazonIcon, NotificationIcon, Chevron } from "../../assets/svgs";
import cx from "classnames";
import styles from "./giftcard.module.scss";

const GiftCard = ({ index, total }) => {
  return (
    <div
      className={cx(
        styles.giftcard,
        total === 3
          ? index < 3
            ? styles.giftcard__top
            : styles.giftcard__bottom
          : index < 3
          ? styles.giftcard__top
          : index < 6
          ? null
          : index >= 9
          ? styles.giftcard__bottom
          : null
      )}
    >
      <div className={styles.giftcard__body}>
        <div className={styles.giftcard__body__tag}>
          <p>Giftcard</p>
        </div>
        <div className={styles.giftcard__body__header}>
          <AmazonIcon />
          <h5>Amazon Gift Card</h5>
        </div>

        <p className={styles.giftcard__body__sub}>
          Amazon Gift Card is a global fashion destination for 20-somethings,
          selling all the freshest styles complemented by exclusive content....
        </p>

        <div className={styles.giftcard__body__notif}>
          <NotificationIcon />
          <p>This card has a fee of $ 0.99</p>
        </div>

        <button>
          Purchase card <Chevron />
        </button>
      </div>
    </div>
  );
};

export default GiftCard;
