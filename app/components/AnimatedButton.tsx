import React from "react";
import Image from "next/image";
export default function AnimatedButton(props: {title: string, icon: string}) {
  return (
    <>
      <button className="relative bg-green-600 border-[1px] border-white text-white px-7 py-2 rounded-xl w-[160px] h-[40px] overflow-hidden group">
        <span className="z-10 group-hover:hidden">{props.title}</span>
        <div className="flex justify-center absolute inset-0 bg-blue-500 transform scale-0 group-hover:scale-100 transition-transform group-hover:duration-300 ease-out group-hover:z-0 ">
          <div className="flex h-[30px] w-[30px] justify-items-center justify-center group-hover:duration-1000 bg-blue-100 rounded-full">
            <Image
              src={props.icon}
              width={20}
              height={20}
              className="scale-0 group-hover:scale-100 transition-transform rounded-full group-hover:z-10 group-hover:delay-300 duration-700"
              alt={props.title}
            ></Image>
          </div>
        </div>
      </button>
    </>
  );
}
