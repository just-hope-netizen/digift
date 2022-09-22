import { Link } from "react-router-dom";

import {
  Logo,
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedInIcon,
  ArrowRightIcon,
  PolygonIcon,
} from "../../assets/svgs";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__top}>
        <div className={styles.footer__top__socials}>
          <Logo />
          <p>Creating Happiness One Giftcard at a Time.</p>
          <div className={styles.footer__top__socials__logos}>
            <InstagramIcon />
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />
          </div>
        </div>

        <div className={styles.footer__top__contact}>
          <div>
            <h5>Contact us</h5>
            <p>hello@digiftng.com</p>
          </div>

          <div>
            <h5>Office</h5>
            <p>226, Awolowo road, Ikoyi, Lagos State, Nigeria</p>
          </div>

          <div className={styles.footer__top__contact__terms}>
            <div className={styles.footer__top__contact__terms__item}>
              <p>Our privacy policy</p>
              <ArrowRightIcon />
            </div>
            <div className={styles.footer__top__contact__terms__item}>
              <p>Terms and Condition</p>
              <ArrowRightIcon />
            </div>
          </div>
        </div>

        <div className={styles.footer__top__list}>
          <h5>Company</h5>
          <Link to="#">Careers</Link>
          <Link to="#">FAQ</Link>
        </div>

        <div className={styles.footer__top__list}>
          <h5>Products</h5>
          <Link to="#">Personal</Link>
          <Link to="#">Business</Link>
          <Link to="#">Vendor</Link>
        </div>

        <div className={styles.footer__top__list}>
          <h5>Contact</h5>
          <Link to="#">Instagram</Link>
          <Link to="#">Twitter</Link>
          <Link to="#">LinkedIn</Link>
          <Link to="#">Facebook</Link>
        </div>
      </div>

      <div className={styles.footer__bottom}>
        <PolygonIcon />
        <p>
          The website www.digiftng.com is owned and operated by Blinksky Nigeria
          Limited, a company duly registered under the Laws of the Federal
          Republic of Nigeria with RC Number: 1656204. Trademark to all logos of
          Giftcards are owned by their respective brands and Blinksky Nigeria
          Limited doesn’t claim ownership of these trademarks. All Giftcards
          dominated in USD are provided in conjunction with BlinkSky Inc. Users
          must have valid US account and in some cases a valid US address before
          purchasing.
        </p>
      </div>

      <p className={styles.footer__footnote}>
        Copyright © 2022 Blinksky Nigeria Limited
      </p>
    </footer>
  );
};

export default Footer;
