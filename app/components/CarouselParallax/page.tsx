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
          <div className="flex flex-col bg-green-600 text-white items-center" key={index}>
            <AnimatePresence >
              <motion.div
                  className="title"
                  initial={{ x: '100%', opacity: 1 }}
                  whileInView={{ x: '0%', opacity: 1 }}
                  exit={{x:'-100%',opacity: 0 }}
                  transition={{ duration: 1 }}
                >
            <div className="text-[14rem] font-bold">{content.title}</div>
              </motion.div>
            </AnimatePresence>
            <div className="grid grid-flow-row grid-cols-[500px_auto] gap-x-[4rem] gap-y-[2rem] px-[10rem] py-[3rem]">
              <div className=" text-[3.6rem] font-bold leading-none">
                {content.header}
              </div>
              <Image src={content.section_icon} alt="section_image" height={0} width={80} className="row-span-2" />
              <div className="row-span-1 col-span-1">
                {content.description}
              </div>
            </div>
              <div className="" >
                <Image src={content.image} alt="image" height={0} width={600} />
              </div>
          </div>
        )
      )}
    </div>
  );
};


export default CarouselParallax;
