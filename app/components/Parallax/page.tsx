import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import type {
  ParallaxContextInterface,
  ParallaxContextsInterface,
} from "@/app/interfaces";

const Parallax = (props: ParallaxContextsInterface) => {
  return (
    <div className="px-12 relative">
      {props.ParallaxContext!.map(
        (content: ParallaxContextInterface, index: number) => (
          <AnimatePresence key={index}>
            <motion.div
              key={index}
              className="h-screen w-screen justify-items-center sticky top-0 grid grid-cols-2 bg-white "
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
            >
              <div className="object-cover flex flex-col justify-center space-y-4">
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
