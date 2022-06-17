import Image from "next/image";
import logo from "../assets/logo.jpg";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.footer}>
        <div>
          <div className={styles.row}>
            <div className={styles.footercol}>
              <Image
                className="nav-logo"
                src={logo}
                alt="Logo"
                width="100"
                height="30"
              />
              <ul className={styles.ul}>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
              </ul>
            </div>
            <div className={styles.footercol}>
              <h4>Categories</h4>
              <ul className={styles.ul}>
                <li>
                  <a href="#">Location</a>
                </li>
                <li>
                  <a href="#">hello@myautochek.demo</a>
                </li>
                <li>
                  <a href="#">0722 222 222</a>
                </li>
              </ul>
            </div>
            <div className={styles.footercol}>
              <h4>Quicklinks</h4>
              <ul className={styles.ul}>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
              </ul>
            </div>
            <div className={styles.footercol}>
              <h4>Address</h4>
              <span className={styles.addy}>
                <ul className={styles.ul}>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                  <li>Link</li>
                </ul>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>@2022 MyAutochek Demo&trade; | Dev by Byron Yego</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
