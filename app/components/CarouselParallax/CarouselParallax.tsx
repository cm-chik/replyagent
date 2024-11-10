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
                  whileInView={{ x: '0%', opacity: 1 }}
                  exit={{x:'-100%',opacity: 0 }}
                  transition={{ duration: 1 }}
                >
            <div className="text-[8rem] font-bold px-[2rem]">{content.title}</div>
              </motion.div>
            </AnimatePresence>
            <div className="grid grid-flow-row grid-cols-[auto_1fr] gap-x-[4rem] gap-y-[2rem] px-[10rem] py-[3rem] justify-items-center">
              <div className=" text-[2rem] font-bold leading-none row-span-1">
                {content.header}
              </div>

              <Image src={content.section_icon} alt="section_image" height={0} width={80} className="row-span-1" />
              <div className="col-span-2">
                {content.description}
              </div>
            </div>
              <div className="" >
                <Image src={content.image} alt="image" height={0} width={1200} />
              </div>
          </div>
        )
      )}
    </div>
  );
};


export default CarouselParallax;
