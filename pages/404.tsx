import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

type Props = {};

const NotFound = (props: Props) => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Something went wrong</h1>
      <p>
        Go back to <Link href={"/"}>Home</Link>
      </p>
    </div>
  );
};

export default NotFound;
