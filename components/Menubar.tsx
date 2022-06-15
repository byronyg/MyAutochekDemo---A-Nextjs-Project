import styles from "../styles/Menubar.module.css";
const Menubar = () => {
  return (
    <div>
      <ul className={styles.menulist}>
        <li>Home</li>
        <li>Electronics</li>
        <li>Appliances</li>
        <li>About Us</li>
        <li>New Arrivals</li>
      </ul>
    </div>
  );
};

export default Menubar;
