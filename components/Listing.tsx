import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/Listing.module.css";

interface Props {
  data?: any;
}

function Listing(props: Props) {
  const { data } = props;
  const router = useRouter();

  const handleClick = (e: React.SyntheticEvent<HTMLDivElement>) => {
    e.preventDefault();
    router.push(`/car/${data.id}`);
  };
  return (
    <div onClick={handleClick} className={styles.card}>
      <Image src={data.imageUrl} width="200" height="200" alt={data.title} />
      <h2>{data.title}</h2>
      <p>
        <small>
          {data.year} | {data.fuelType} | {data.mileage} {data.mileageUnit} |{" "}
          {data.transmission}
        </small>
      </p>
      <p>
        <strong>KSh. {data.marketplaceOldPrice.toLocaleString()}</strong>
      </p>
    </div>
  );
}

export default Listing;
