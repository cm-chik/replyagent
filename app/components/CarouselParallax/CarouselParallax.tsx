import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import type {
  CarouselParallaxContextInterface,
  CarouselParallaxContextsInterface,
} from "@/app/interfaces";

const CarouselParallax = (props: CarouselParallaxContextsInterface) => {
  return (
    <div className="relative">
      {props.CarouselParallaxContext!.map(
        (content: CarouselParallaxContextInterface, index: number) => (
          <div className="flex flex-col bg-green-600 text-white  px-12" key={index}>
            <AnimatePresence >
              <motion.div
                  className="title"
                  initial={{ x: '100%', opacity: 1 }}
                  whileInView={{ x: '15%', opacity: 1 }}
                  transition={{ duration: 1 }}
                >
            <div className="text-[8rem] font-bold px-[2rem] whitespace-nowrap">{content.title}</div>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center">
              <div className="flex  max-w-[1000px] gap-[12rem] py-[2rem]">
                <div className="w-[60%]">
                  <div className=" text-[3.5rem] font-bold leading-none row-span-1 py-[1rem]">
                {content.header}
                </div>
                <div className="">
                {content.description}
              </div></div>
                <div className="w-[40%]">
                  <img src={content.section_icon} alt="section_image" style={{width: "70%"}} className="row-span-1" />
                  </div>
              

              
              
            </div>
            </div>
              <div className="flex justify-center" >
                <Image src={content.image} alt="image" height={0} width={1200} />
              </div>
          </div>
        )
      )}
    </div>
  );
};


export default CarouselParallax;
