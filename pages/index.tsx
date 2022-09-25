import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h3>My Home Page</h3>
      <p>
        This is my home page; this is where you can find me, if you want to. The
        3 people in my real life know about it. It's also the link to my other
        blog, a lassie blog about ordinary things (who would have thought that
        you could do ordinary things on the internet?)
      </p>
    </div>
  );
};

export default Home;
