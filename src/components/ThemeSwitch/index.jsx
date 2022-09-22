import { useState } from "react";
import cx from "classnames";

import { LightIcon, DarkIcon } from "../../assets/svgs";
import styles from "./themeswitch.module.scss";

const ThemeSwitch = () => {
  const [active, setActive] = useState("light");

  return (
    <div className={styles.switch}>
      <div
        className={cx(
          styles.switch__item,
          active === "light" && styles.switch__active
        )}
        onClick={() => setActive("light")}
        role="button"
        aria-label="Light mode"
      >
        <LightIcon />
      </div>
      <div
        className={cx(
          styles.switch__item,
          active === "dark" && styles.switch__active
        )}
        onClick={() => setActive("dark")}
        role="button"
        aria-label="Dark mode"
      >
        <DarkIcon />
      </div>
    </div>
  );
};

export default ThemeSwitch;
