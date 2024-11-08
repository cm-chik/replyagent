import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import type {
  ParallaxContextInterface,
  ParallaxContextsInterface,
} from "@/app/interfaces";

const Parallax = (props: ParallaxContextsInterface) => {
  return (
    <div className="relative">
      {props.ParallaxContext!.map(
        (content: ParallaxContextInterface, index: number) => (
          <AnimatePresence>
            <motion.div
              key={index}
              className="h-screen sticky top-0 flex justify-between align-middle items-center bg-white px-[20rem] space-x-[10rem]"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
            >
              <div className="w-[550px] object-cover flex flex-col justify-center space-y-4 ">
                <div>{content.title}</div>
                <div className="text-[3.6rem] font-bold leading-none">
                  {content.header}
                </div>
                <div>{content.description}</div>
              </div>

              <div className="self-center align-middle" >
                <Image src={content.image} alt="image" height={600} width={400} />
              </div>
            </motion.div>
          </AnimatePresence>
        )
      )}
    </div>
  );
};


export default Parallax;
