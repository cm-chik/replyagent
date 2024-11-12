"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import AnimatedButton from "./AnimatedButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-screen flex justify-between items-center p-4 bg-white">
        <div className="flex justify-normal gap-12 items-center">
          <Image
            src="/images/logo/logo_bright.png"
            alt="logo"
            width={180}
            height={40}
            style={{ maxWidth: "73vw" }}
          />
          <div className="hidden md:flex gap-[1rem] items-center">
            <Link href={"/overview"}>Overview</Link>
            <Link href={"/whitelabel"}>Whitelabel</Link>
            <Link href={"/pricing"}>Pricing</Link>
            <Link href={"/features"}>Features</Link>
          </div>
        </div>
        <div className="flex gap-8 items-center">
          <div className="hidden md:flex px-[2rem] gap-2 items-center">
            <Image
              src="/images/i18n/gb.svg"
              alt="GB"
              width={20}
              height={20}
            />
            <button>EN</button>
          <AnimatedButton title="Try it FREE!" icon="/images/icons/cart.svg" />
          </div>
          <button
            className="md:hidden flex items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Image
              src={isOpen ? "/images/icons/cross.svg" : "/images/icons/hamburger.svg"}
              alt={isOpen ? "Close Menu" : "Open Menu"}
              width={30}
              height={30}
            />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col items-start p-4 gap-4 bg-white">
          <Link href={"/overview"}>Overview</Link>
          <Link href={"/whitelabel"}>Whitelabel</Link>
          <Link href={"/pricing"}>Pricing</Link>
          <Link href={"/features"}>Features</Link>
          <div className="flex gap-2 items-center">
            <Image
              src="/images/i18n/gb.svg"
              alt="GB"
              width={20}
              height={20}
            />
            <button>EN</button>
          </div>
          <AnimatedButton title="Try it FREE!" icon="/images/icons/cart.svg" />
        </div>
      )}
    </>
  );
};

export default Navbar;
