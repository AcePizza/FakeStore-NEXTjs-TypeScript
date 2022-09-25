import { PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import styles from "../styles/Home.module.css";

type Props = {
  users: {};
};

type StaticProps = {
  params?: ParsedUrlQuery;
  preview?: boolean;
  previewData?: PreviewData;
};

type User = {
  address: {
    city: string;
    geo: { lat: string; lng: string };

    street: string;
    suite: string;
    zipcode: string;
  };
  company: { bs: string; catchPhrase: string; name: string };

  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
};

export const getStaticProps = async (params: StaticProps) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await response.json();
  return { props: { data: result } };
};

const profile = (props: Props) => {
  console.log("props :>> ", props);
  return (
    <div>
      <h3 className={styles.title}>Profile Page</h3>
      {props.data.map((user: User, index: number) => {
        return (
          <React.Fragment key={index}>
            <p>{user.name}</p>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default profile;
