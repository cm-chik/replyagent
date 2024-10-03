import React from "react";
import Image from "next/image";
export default function TryItFreeButton() {
  return (
    <>
      <button className="relative bg-green-600 text-white px-7 py-2 rounded-xl w-[160px] h-[40px] overflow-hidden group">
        <span className="z-10 group-hover:hidden">Try it FREE!</span>
        <div className="flex justify-center absolute inset-0 bg-blue-500 transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out group-hover:z-0 ">
          <div className="flex justify-center items-center align-middle group-hover:duration-900">
            <Image
              src="/images/icons/cart.svg"
              width={30}
              height={30}
              className="p-[8px] bg-blue-100 scale-0  group-hover:scale-100 transition-transform rounded-full group-hover:z-10 group-hover:delay-300 duration-700"
              alt="Try it FREE!"
            ></Image>
          </div>
        </div>
      </button>
    </>
  );
}
