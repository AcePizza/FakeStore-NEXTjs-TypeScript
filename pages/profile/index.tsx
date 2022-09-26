import { PreviewData } from "next";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import styles from "../../styles/Profile.module.css";

export const getStaticProps = async (params: StaticProps) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await response.json();
  return { props: { data: result } };
};

const index = (props: ProfileProps) => {
  console.log("props :>> ", props);
  return (
    <div>
      <h3 className={styles.title}>Profile Page</h3>
      {props.data.map((user: User, index: number) => {
        return (
          <Link href={`/profile/${user.id}`} key={user.id}>
            <a className={styles.single}>
              <h3>{user.name}</h3>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default index;
