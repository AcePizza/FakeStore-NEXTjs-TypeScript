import React, { useState } from "react";
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

export const getServerSideProps = async (props: Props) => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data: Data = await res.json();
  return { props: { data } };
};

const about = (props: Props) => {
  const [textValue, setTextValue] = useState<string>();

  const onClickHandler = async () => {
    console.log("This runs");
    const res = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username: "mor_2314",
        password: "83r5^_",
      }),
    });
    const data = await res.json();
    console.log("data :>> ", data);
  };

  const onChangeHandler = (e: { target: { value: string } }) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <h3 className={styles.title}>My About Page</h3>
      <form>
        <input value={textValue} onChange={onChangeHandler}></input>
      </form>
      <button onClick={onClickHandler}>Button</button>
      {props.data.map((element, index) => {
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
