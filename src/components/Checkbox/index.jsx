import { useState } from "react";
import cx from "classnames";

import { CheckIcon } from "../../assets/svgs";
import styles from "./checkbox.module.scss";

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label>
      <input
        type="checkbox"
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
      <span
        className={cx(styles.checkbox, isChecked && styles.checkbox__active)}
        aria-hidden="true"
      >
        <CheckIcon />
      </span>
    </label>
  );
};

export default Checkbox;
