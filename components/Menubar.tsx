import { BsFillCaretDownFill } from "react-icons/bs";
import styles from "../styles/Menubar.module.css";
const Menubar = () => {
  return (
    <div>
      <ul className={styles.menulist}>
        <li>Home</li>
        <li>
          All Makes <BsFillCaretDownFill />
        </li>
        <li>Appliances</li>
        <li>About Us</li>
        <li>
          New Arrivals <BsFillCaretDownFill />
        </li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default Menubar;
