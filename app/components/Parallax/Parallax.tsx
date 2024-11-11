import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import type {
  ParallaxContextInterface,
  ParallaxContextsInterface,
} from "@/app/interfaces";

const Parallax = (props: ParallaxContextsInterface) => {
  return (
    <div className="flex flex-col py-[4rem] relative  px-12 justify-center items-center">
      {props.ParallaxContext!.map(
        (content: ParallaxContextInterface, index: number) => (
          <AnimatePresence key={index}>
            <motion.div
              key={index}
              className="h-screen sticky top-0 grid grid-cols-[50%_50%] px-[6%] bg-white gap-12"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
            >
              <div className="object-cover w-[80%] flex flex-col justify-center">
                <div>{content.title}</div>
                <div className="text-[4.5rem] font-bold leading-none py-[1rem]">
                  {content.header}
                </div>
                <div>{content.description}</div>
              </div>
              <div className="self-center justify-self-center" style={{height: "600px", width: "400px"}} >
                <Image src={content.image} alt="image" width={300} height={0}  />
              </div>
            </motion.div>
          </AnimatePresence>
        )
      )}
    </div>
  );
};


export default Parallax;
