import { FaTruckPickup } from "react-icons/fa";
import Link from "next/link";


import styles from "../styles/Menubar.module.css";
const Menubar = () => {

  return (
    <div>
      <ul className={styles.menulist}>
        <li>Home</li>
        <li>
          <Link href={`all_cars?page=1`}>
            <p>
              All Cars <FaTruckPickup />
            </p>
          </Link>
        </li>
        <li>Accesories</li>
        <li>About Us</li>
        <li>Imports</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default Menubar;
