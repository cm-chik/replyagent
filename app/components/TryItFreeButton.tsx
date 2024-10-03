import React from "react";
import Image from "next/image";
export default function TryItFreeButton() {
  return (
    <button className="relative bg-green-600 text-white px-7 py-2 rounded-xl w-[140px] h-[40px] overflow-hidden group">
      <span className="relative z-10 group-hover:hidden">Try it FREE!</span>
      <Image
        src="/images/icons/cart.svg"
        width={20}
        height={20}
        className="absolute right-1/2 top-1/2 transform translate-x-1/2 -translate-y-1/2 hidden group-hover:block group-hover:z-1 bg-blue-300 p-1 rounded-full"
        alt="Try it FREE!"
      ></Image>
      <span className="absolute inset-0 bg-blue-500 transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center rounded-xl group-hover:z-0"></span>
    </button>
  );
}
