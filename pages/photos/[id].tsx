import { GetStaticPaths } from "next";
import Image from "next/image";
import React from "react";
import styles from "../../styles/Photos.module.css";

type Props = {
  data: {
    image: string;
    title: string;
    description: string;
  };
};

type StaticPaths = {
  paths: {};
  fallback: boolean;
};

type PhotoContext = {
  id: string;
  params: {
    id: any;
    product: { id: string };
  };
};

export const getStaticPaths = async (params: PhotoContext) => {
  const res = await fetch("https://fakestoreapi.com/products/");
  const data = await res.json();
  const paths = data.map((product: PhotoContext) => {
    return {
      params: { id: product.id.toString() },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps = async (context: PhotoContext) => {
  console.log("constext :>> ", context);
  const id = context.params.id;
  const response = await fetch("https://fakestoreapi.com/products/" + id);
  const result = await response.json();
  return {
    props: { data: result },
  };
};

const photos = (props: Props) => {
  console.log("props", props);
  return (
    <div className={styles.single}>
      <h3 className={styles.title}>{props.data.title}</h3>
      <img
        className={styles.image}
        src={props.data.image}
        alt={props.data.title}
        height={"400px"}
        width={"400px"}
      />
      <hr />
      <p>{props.data.description}</p>
      <div></div>
    </div>
  );
};

export default photos;
