import React, { useState } from "react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Listing from "../components/Listing";
import styles from "../styles/AllCars.module.css";

export default function AllCars({
  allCars,
  currentPage,
  total,
  pageSize,
}: any) {
  const router = useRouter();

  const goToPrevious = () => {
    if (currentPage === 1) {
      alert("This is the first page!");
    } else {
      router.push(`all_cars?page=${+currentPage - 1}`);
    }
  };

  const goToNext = () => {
    if (currentPage === Math.ceil(total / pageSize)) {
      alert("This is the last page!");
    } else {
      router.push(`all_cars?page=${+currentPage + 1}`);
    }
  };

  return (
    <div className="page">
      <div className={styles.content}>
        <div className={styles.featuredWrapper}>
          {allCars.map((car: any) => (
            <Listing key={car.id} data={car} />
          ))}
        </div>

        <div className={styles.paginationWrapper}>
          <button className="primary-button" onClick={goToPrevious}>Previous</button>
          <span>
            Page {+currentPage} of {Math.ceil(total / pageSize)}
          </span>
          <button className="primary-button" onClick={goToNext}>Next Page</button>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  console.log(context);
  const page = context.query.page;
  // lets assume there is a page param in this endpoint for pagination purposes
  // this has not been explicitly provided in the material related to this task
  // this implementation gives a rough idea of how to fetch the next page with ssr
  const res = await fetch(
    `https://api.staging.myautochek.com/v1/inventory/car/search?next_page=${page}`
  );
  const data = await res.json();
  const {
    result,
    pagination: { total, pageSize },
  } = data;

  console.log("ALL CARS: ", data);

  return {
    props: {
      allCars: result,
      currentPage: page,
      total,
      pageSize,
    },
  };
};
