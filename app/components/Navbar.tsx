import Image from "next/image";
import Link from "next/link";
import React from "react";
import TryItFreeButton from "./TryItFreeButton";
const Navbar = () => {
  return (
    <>
      <div className="flex justify-around items-center row-screen p-4">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={180}
          height={40}
          style={{ maxWidth: "73vw" }}
        />
        <Link href={"/overview"}>Overview</Link>
        <Link href={"/whitelabel"}>Whitelabel</Link>
        <Link href={"/pricing"}>Pricing</Link>
        <Link href={"/"}>Features</Link>
        <button>EN</button>
        <TryItFreeButton />
      </div>
    </>
  );
};

export default Navbar;
