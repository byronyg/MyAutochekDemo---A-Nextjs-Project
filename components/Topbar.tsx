import styles from "../styles/Topbar.module.css";
import Link from "next/link";
import {
  BsFillPersonFill,
  BsGeoAltFill,
  BsGrid3X3GapFill,
  BsTelephoneFill,
} from "react-icons/bs";

function Topbar() {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li>
          <BsGrid3X3GapFill />
          &nbsp;Offers on top deal and Discount
        </li>
        <li>
          <BsGeoAltFill /> Select Location
        </li>
        <li>Track Order</li>
        <li>
          <BsTelephoneFill />
          &nbsp;0722 345 678
        </li>
        <li>
          <Link href={""}>Login</Link>
        </li>
        <li>
          <BsFillPersonFill /> Register
        </li>
      </ul>
    </div>
  );
}

export default Topbar;
