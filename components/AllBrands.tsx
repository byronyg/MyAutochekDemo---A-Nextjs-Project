import styles from "../styles/Allbrands.module.css";
import Image from "next/image";

const AllBrands = (props: any) => {
  console.log("INALLBRANDS", props.brands);
  return (
    <div className={styles.container}>
      <div className={styles.cardholder}>
        {props.brands.map((item: any) => (
          <div key={`popular_brands_${item.id}`} className={styles.card}>
            {item.name}
            <Image
              src={item.imageUrl}
              alt={item.name}
              layout="intrinsic"
              width="160"
              height={160}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBrands;
