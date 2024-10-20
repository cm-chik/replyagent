import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { ParallaxContextInterface } from "@/app/interfaces";

export const ParallaxImage = (src: string) => {
  const { targetRef, setTargetRef } = useState(0);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const _ = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <motion.div
      ref={targetRef}
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        backgroundColor: "red",
        scale: scale,
      }}
    ></motion.div>
  );
};

export const ParallaxContextCretor = (
  title: string,
  header: string,
  description: string
) => {
  return (
    <>
      <motion.div>
        <p>
          {title},{header},{description}
        </p>
      </motion.div>
    </>
  );
};

export const ParallaxComponent = (props: ParallaxContextInterface) => {
  return (
    <div>
      <ParallaxImage src: {props.image} />
      <div>{props.title}</div>
      <div>{props.header}</div>
      <div>{props.description}</div>
    </div>
  );
    </div>
  );
};
