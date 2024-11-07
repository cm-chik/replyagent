import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import type {
  ParallaxContextInterface,
  ParallaxContextsInterface,
} from "@/app/interfaces";

const Parallax = (props: ParallaxContextsInterface) => {
  return props.ParallaxContext!.map(
    (content: ParallaxContextInterface, index: number) => (
      <motion.div
        key={index}
        className=" sticky top-0 "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ amount: "all" }}
      >
        <div className="bg-gray-200">
          <div className="h-screen w-screen rounded-3xl object-cover flex items-center justify-between ">
            <div className="flex flex-col space-y-2">
              <div>{content.title}</div>
              <div className="text-[4rem] font-bold leading-tight">
                {content.header}
              </div>
              <div>{content.description}</div>
            </div>
            <Image src={content.image} alt="image" height={500} width={200} />
          </div>
        </div>
      </motion.div>
    )
  );
};


export default Parallax;
