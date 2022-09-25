import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

type Props = {};

const about = (props: Props) => {
  return (
    <div>
      <h3 className={styles.title}>My About Page</h3>
      <p className={styles.text}>
        This is my about page. I created this page about a year ago, so I
        thought I'd update it for a while. I should probably spend some time
        going through my entire about page and make it a bit more coherent, but
        I'm too lazy for that. After much deliberation, my blog is no longer
        called Alphabe - Thursday.
      </p>
    </div>
  );
};

export default about;
