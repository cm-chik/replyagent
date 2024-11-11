import Image from "next/image";
import Link from "next/link";
import React from "react";
import AnimatedButton from "./AnimatedButton";
const Navbar = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center row-screen p-4 bg-white ">
        <div className="flex justify-normal gap-12 items-center row-screen p-4">
          <Image
            src="/images/logo/logo_bright.png"
            alt="logo"
            width={180}
            height={40}
            style={{ maxWidth: "73vw" }}
          />
          <Link href={"/overview"}>Overview</Link>
          <Link href={"/whitelabel"}>Whitelabel</Link>
          <Link href={"/pricing"}>Pricing</Link>
          <div className="flex gap-2 items-center">
            Features
            <Image
              src="/images/icons/arrow-down.svg"
              alt=""
              width={20}
              height={20}
              //<Link href={"/"}>Features</Link>
            />
          </div>
        </div>
        <div className="flex gap-8">
          <div className="flex gap-2 items-center">
            <Image
              src="/images/i18n/gb.svg"
              alt="GB"
              width={20}
              height={20}
              //<Link href={"/"}>Features</Link>
            />
            <button>EN</button>
          </div>
          <AnimatedButton title="Try it FREE!" icon="/images/icons/cart.svg" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
