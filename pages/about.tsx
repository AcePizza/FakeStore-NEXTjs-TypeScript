import React from "react";
import styles from "../styles/Home.module.css";

type Props = {
  data: Data[];
};

type Data = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export const getServerSideProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data: Data = await res.json();
  return { props: { data } };
};

const about = (props: Props) => {
  return (
    <div>
      <h3 className={styles.title}>My About Page</h3>
      {props.data.map((element: Data, index: number) => {
        return (
          <React.Fragment key={index}>
            <p>{element.title}</p>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default about;
