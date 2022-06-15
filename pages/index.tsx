import type { NextPage } from "next";
import Head from "next/head";
import { Iconbar } from "../components/Iconbar";
import Menubar from "../components/Menubar";
import Topbar from "../components/Topbar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
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
    </div>
  );
};

export default Home;