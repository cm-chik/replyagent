import React from "react";
import { motion } from "framer-motion";

export const ParallaxImage = (imgsrc: string) => {
  return (
    <motion.div style={{ backgroundImage: `url(${imgsrc})` }}></motion.div>
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
