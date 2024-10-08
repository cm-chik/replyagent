import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const ParallaxImage = (imgsrc: string) => {
  const { targetRef, setTargetRef } = useState(0);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const capacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <motion.div
      ref={targetRef}
      style={{
        backgroundImage: `url(${imgsrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        backgroundColor: "red",
        scale: scale,
      }}
    ></motion.div>
  );
};

export const ParallaxWord = (
  title: string,
  header: string,
  description: string
) => {
  return (
    <motion.div>
      {title},{header},{description}
    </motion.div>
  );
};
