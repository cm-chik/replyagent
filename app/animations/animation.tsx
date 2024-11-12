"use client";

import { AnimatePresence, motion } from "framer-motion";

export function FadeInWhenVisible({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }}
    >
      {children}
    </motion.div>
  );
}


export function AnimationInRightWhenVisible({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence >
      <motion.div
        className="overflow-hidden max-w-screen"
        initial={{ x: '80%', opacity: 1 }}
        whileInView={{ x: '5%', opacity: 1 }}
        transition={{ duration: 1 }}
      >
       {children}
      </motion.div>
    </AnimatePresence>
  )
}

export function CarouselAnimation({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence >
    <motion.div animate={{ x: ["0%","-40%"] }} transition={{ duration: 20, ease: "linear", repeat: Infinity }} style={{ display: "inline-block" }}>
      {children}
    </motion.div>
    </AnimatePresence>
  )
}


export function ParallaxFullScreenAnimation({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence >
    <motion.div 
              className="h-[80vh] sticky top-[30vh] bg-white"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}>
      {children}
      </motion.div>
      </AnimatePresence>
  )
}
