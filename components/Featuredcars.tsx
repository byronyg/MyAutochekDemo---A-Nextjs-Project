import { useState, useEffect } from "react";
import styles from "../styles/Featured.module.css";

const Featuredcars = (props: any) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.staging.myautochek.com/v1/inventory/car/search")
      .then((res) => res.json())
      .then((data) => {
        setData(data.result);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.cardholder}>
        {data.map((item: any, i: number) => (
          <div key={item.id}>
            <h3>{i + 1}</h3>
            <p>{item.title}</p>
            <p>{item.imageUrl}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featuredcars;
