import { useState, useEffect } from "react";
import styles from "../styles/Featured.module.css";
import Listing from "../components/Listing";
import Link from "next/link";

const Featuredcars = (props: any) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.staging.myautochek.com/v1/inventory/car/search")
      .then((res) => res.json())
      .then((data) => {
        console.log("FEATURED: ", data.result);
        setData(data.result);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.featuredWrapper}>
        <div className={styles.cardholder}>
          {data.map((item: any, i: number) => (
            <Listing key={item.id} data={item} />
          ))}
        </div>
      </div>
      <Link href={`all_cars?page=1`}>
        <button className="primary-button">View All Cars</button>
      </Link>
    </div>
  );
};

export default Featuredcars;
