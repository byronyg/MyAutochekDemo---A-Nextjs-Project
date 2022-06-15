import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={styles.footer}>
        <div>
          <div className={styles.row}>
            <div className={styles.footercol}>
              <img
                className="nav-logo"
                src="https://i0.wp.com/oseikromtv.com/wp-content/uploads/2022/02/47116/autochek-africa-new-employment-opportunity.png"
                alt=""
                width="100px"
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
                  <a href="mailto:hello@cashia.com">hello@cashia.com</a>
                </li>
                <li>
                  <a href="tel:+254115777777">0115 777 777</a>
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
              <h4>address</h4>
              <span className={styles.addy}>
                <ul className={styles.ul}>
                  <li>
                    The Gallant Mall, Westlands, <br />
                    Nairobi, Kenya.
                  </li>
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
