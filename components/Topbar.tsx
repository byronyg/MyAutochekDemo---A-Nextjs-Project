import styles from "../styles/Topbar.module.css";
import { BsGrid3X3GapFill } from "react-icons/bs";

function Topbar() {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li>
          <BsGrid3X3GapFill />
          &nbsp;Offers on top deal and Discount
        </li>
        <li>Select Location</li>
        <li>Track Order</li>
        <li>Phone</li>
        <li>Login</li>
        <li>Register</li>
      </ul>
    </div>
  );
}

export default Topbar;
