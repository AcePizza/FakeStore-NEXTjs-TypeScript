import Link from "next/link";
import React from "react";
import styles from "../../styles/Photos.module.css";

type Props = {
  data: [];
  error: {};
};

export const getStaticProps = async (props: Props) => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log("data :>> ", data);
    return { props: { data } };
  } catch (error) {
    return { props: { error } };
  }
};

const index = (props: Props) => {
  console.log("props", props);

  return (
    <>
      <h3>Products Page</h3>
      {props.data.map((product: {}, index: number) => {
        return (
          <Link href={"/photos/" + product.id} key={product.id}>
            <div className={styles.single}>
              <h3 className={styles.title}>{product.title}</h3>
              <img
                className={styles.image}
                src={product.image}
                alt={product.title}
                height={"400px"}
                width={"400px"}
              />
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default index;
