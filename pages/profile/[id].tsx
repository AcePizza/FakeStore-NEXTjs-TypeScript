import { useRouter } from "next/router";
import React from "react";

type DetailsProps = {
  result: React.ReactNode;
};

type StaticPaths = {
  paths: {};
  fallback: boolean;
};

type DetailsContext = {
  params: { id: string };
};

export const getStaticPaths = async (params: StaticPaths) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await response.json();
  const paths = result.map((user: User) => {
    return {
      params: { id: user.id.toString() },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps = async (context: DetailsContext) => {
  const id = context.params.id;
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + id
  );
  const result = await response.json();
  return {
    props: { data: result },
  };
};

const Details: React.FC<User> = ({ data }) => {
  const router = useRouter();
  console.log("result", data);

  return (
    <div>
      <h3>{data.name}</h3>
      <p>{data.email}</p>
      <p>{data.address.city}</p>
      <p>{data.website}</p>
    </div>
  );
};

export default Details;
