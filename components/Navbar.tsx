import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav>
      <div className="logo">
        <Image src="/favicon.ico" height={15} width={15} /> NEXT.js
      </div>
      <Link href={"/"}>
        <a>Home</a>
      </Link>
      <Link href={"/about"}>
        <a>About</a>
      </Link>
      <Link href={"/profile"}>
        <a>Profile</a>
      </Link>
    </nav>
  );
};

export default Navbar;
