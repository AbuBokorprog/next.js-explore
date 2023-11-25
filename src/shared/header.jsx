import React from "react";
import Link from "next/link";

const header = () => {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </>
  );
};

export default header;
