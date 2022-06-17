import Image from "next/image";
import Link from "next/link";
import { BsFillBasket3Fill } from "react-icons/bs";
import logo from "../assets/mainlogo.png";
import styles from "../styles/Iconbar.module.css";

export const Iconbar = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <Link href="/">
          <Image
            className="nav-logo"
            src={logo}
            alt="Logo"
            width="150"
            height="36"
          />
        </Link>
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
