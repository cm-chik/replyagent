import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import type {
  ParallaxContextInterface,
  ParallaxContextsInterface,
} from "@/app/interfaces";
import {} from "@/app/interfaces";

const Parallax = (props: ParallaxContextsInterface) => {
  return props.ParallaxContext!.map(
    (content: ParallaxContextInterface, index: number) => (
      <motion.div
        key={index}
        className=" sticky top-0 h-[100vh]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ amount: "all" }}
      >
        <div className="h-[300px]  bg-red-500  mt-[50vh]">
          <div className="rounded-3xl h-[500px]  object-cover">
            <Image src={content.image} alt="image" height={100} width={100} />
          </div>
        </div>
        <p>
          {content.title},{content.header},{content.description}
        </p>
      </motion.div>
    )
  );
};


export default Parallax;
