import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import AllBrands from "../components/AllBrands";
import Featuredcars from "../components/Featuredcars";
import Imageslider from "../components/Imageslider";
import Menubar from "../components/Menubar";
import styles from "../styles/Home.module.css";

const Home: NextPage = ({ brands, allCars }: any) => {
  console.log("Fromprops: ", brands);
  return (
    <div
      className="page"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Head>
        <title>My Autochek Demo</title>
        <link rel="icon" type="/favicon.ico" />
      </Head>

      {/* Menubar */}
      <Menubar />

      {/*Image Slider */}
      <Imageslider />

      {/* All Brands */}
      <h3 className={styles.title}>All Brands</h3>
      <AllBrands brands={brands} />

      {/* Featured Cars */}
      <h3 className={styles.title}>Featured Cars</h3>
      <Featuredcars />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (someObject) => {
  const res = await fetch(
    "https://api.staging.myautochek.com/v1/inventory/make?popular=true"
  );

  const data = await res.json();

  const brands = data.makeList;

  return {
    props: {
      brands,
    },
  };
};
export default Home;
