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
      <section key={index} className="relative h-[100vh]">
        <ParallaxContext {...content} />
      </section>
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

const ParallaxContext = (props: ParallaxContextInterface) => {
  return (
    <div className="relative flex items-center justify-center">
      <motion.div>
        <div className="absolute flex flex-col">
          <StickyImage src={props.image} />
          <p>
            {props.title},{props.header},{props.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Parallax;
