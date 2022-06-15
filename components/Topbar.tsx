import styles from "../styles/Topbar.module.css";

function Topbar() {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li>Offers on top deal and Discount</li>
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
