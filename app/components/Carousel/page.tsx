import React from "react";
import Image from "next/image";
import type { CarouselCardInterface } from "@/app/interfaces";
import { motion } from "framer-motion";

const CarouselCard = (props: CarouselCardInterface) => {
  return (
    <div className="px-12">
      <div className="flex flex-col text-center leading-[4rem] space-y-[4rem]">
        <div className="text-[4rem] font-bold tracking-tighter py-2 ">
          {props.carousel_title}
        </div>
        <div className="leading-normal md:px-[14rem]">
          {props.carousel_description}
        </div>
        <div className="flex w-[100%] max-md:flex-col justify-center gap-[2rem] max-md:space-y-[2rem] px-10">
          <motion.div
            animate={{ x: ["0%", "-100%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            style={{ display: "inline-block" }} // Ensure the content is inline for horizontal scrolling
          >
            <div className="flex gap-2  space-x-[4rem] justify-center items-center">
              {props.carousel_row.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col space-y-[3rem]"
                  style={{
                    position: "relative",
                    width: "40px",
                    height: "40px",
                  }}
                >
                  <Image
                    src={item.carousel_image}
                    alt={item.carousel_word}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                  <div className="text-[0.5rem] leading-none w-[40px] text-center">
                    {item.carousel_word}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
