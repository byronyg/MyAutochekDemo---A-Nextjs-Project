import { BsFillBasket3Fill } from "react-icons/bs";
import styles from "../styles/Iconbar.module.css";

export const Iconbar = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <img
          className="nav-logo"
          src="https://media.autochek.africa/file/publicAssets/full-color-logo-new.png"
          alt=""
          width="150px"
        />
      </div>
      <div className={styles.search}>
        <input type="text" placeholder="Search vehicle by title" />
        <button type="button">Search</button>
      </div>
      <div className={styles.cart}>
        <button type="button">
          <BsFillBasket3Fill />
        </button>
      </div>
    </div>
  );
};
