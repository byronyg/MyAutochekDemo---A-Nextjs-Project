import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import AllBrands from "../components/AllBrands";
import Featuredcars from "../components/Featuredcars";
import Footer from "../components/Footer";
import { Iconbar } from "../components/Iconbar";
import Imageslider from "../components/Imageslider";
import Menubar from "../components/Menubar";
import Topbar from "../components/Topbar";
import styles from "../styles/Home.module.css";

const Home: NextPage = ({ brands, allCars }: any) => {
  console.log("Fromprops: ", allCars);
  return (
    <div className={styles.container}>
      <Head>
        <title>My Autochek Demo</title>
        <link rel="icon" type="/favicon.ico" />
      </Head>

      {/*Topbar */}
      <Topbar />

      {/*Iconbar*/}
      <Iconbar />

      {/* Menubar */}
      <Menubar />

      {/*Image Slider */}
      <Imageslider />

      {/* All Brands */}
      <h3 className={styles.title}>All Brands</h3>
      <AllBrands brands={brands} />

      {/* Featured Cars */}
      <Featuredcars />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (someObject) => {
  console.log({ someObject });
  const res = await fetch(
    "https://api.staging.myautochek.com/v1/inventory/make?popular=true"
  );

  const data = await res.json();

  const brands = data.makeList;

  // console.log("AllBrands ", allCars);

  return {
    props: {
      brands,
    },
  };
};
export default Home;
