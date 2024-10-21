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
      <div key={index} className="relative h-[10vh] bg-sky-100">
        <div className="sticky top-0">
          <motion.div>
            <StickyImage src={content.image} />
            <p>
              {content.title},{content.header},{content.description}
            </p>
          </motion.div>
        </div>
      </div>
    )
  );
};

const StickyImage = (props: { src: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: "all" }}
      onViewportEnter={() => console.log("enter")}
      onViewportLeave={() => console.log("leave")}
      className=" sticky z-0 rounded-3xl h-[500px]  object-cover -top-[--header-height] "
    >
      <Image src={props.src} alt="image" fill className="sticky " />
    </motion.div>
  );
};

export default Parallax;
