import React from "react";
import { AiFillCar } from "react-icons/ai";
import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import styles from "./CarDetails.module.css";

const CarListing: NextPage = ({ data, extraFeatures }: any) => {
  console.log("EXTRA FEATURES: ", extraFeatures);

  const features = Object.entries(extraFeatures);
  return (
    <div className="page">
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>{data.carName}</h1>
          <div className={styles.contentRow}>
            <div className={styles.imageWrapper}>
              <Image
                src={data.imageUrl}
                layout={"fill"}
                objectFit={"contain"}
              />
            </div>
            <div className={styles.extraFeatures}>
              <h2>Additional Features</h2>
              <div className={styles.detailsWrapper}>
                {features.map((item: any) => (
                  <div key={item[0] + item[1]} className={styles.detailItem}>
                    <span className={styles.detailValue}> {item[1]} </span>
                    <span className={styles.detailName}>{item[0]} </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Overview</h2>
            <div className={styles.featureSummary}>
              <div className={styles.featureItem}>
                <AiFillCar />
                <span> {data.city}</span>
              </div>
              <div className={styles.featureItem}>
                <AiFillCar />
                <span>{data.year}</span>
              </div>
              <div className={styles.featureItem}>
                <AiFillCar />
                <span>
                  {data.mileage} {data.mileageUnit}
                </span>
              </div>
              <div className={styles.featureItem}>
                <AiFillCar />
                <span>{data.transmission}</span>
              </div>
              <div className={styles.featureItem}>
                <AiFillCar />
                <span> {data.sellingCondition}</span>
              </div>
              <div className={styles.featureItem}>
                <AiFillCar />
                <span> {data.ccMeasurement}CC</span>
              </div>
              <div className={styles.featureItem}>
                <AiFillCar />
                <span> KSh. {data.marketplacePrice.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.query);
  const id = context.params?.id;
  const res = await fetch(
    `https://api.staging.myautochek.com/v1/inventory/car/${id}`
  );
  // console.log(res);

  const data = await res.json();
  console.log(data);

  const {
    vin,
    model: { wheelType },
    state,
    country,
    ownerType,
    fuelType,
    sellingCondition,
    bodyType: { name },
    city,
    hasFinancing,
    interiorColor,
    exteriorColor,
    engineType,
  } = data;

  const extraFeatures = {
    vin,
    "Wheel Type": wheelType,
    city,
    state,
    country,
    "Owner Type": ownerType,
    "Fuel Type": fuelType,
    Condition: sellingCondition,
    "Body Type": name,
    "Interior Color": interiorColor,
    "Exterior Color": exteriorColor,
    "Engine Type": engineType,
    "Financing Available": hasFinancing ? "Yes" : "No",
  };

  // if (!data) {
  //   return "notFound";
  // }
  return {
    props: {
      data,
      extraFeatures,
    },
  };
};

export default CarListing;
