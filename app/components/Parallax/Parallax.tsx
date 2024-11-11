import React from "react";
import Image from "next/image";
import type {
  ParallaxContextInterface,
  ParallaxContextsInterface,
} from "@/app/interfaces";
import { ParallaxFullScreenAnimation } from "@/app/animations/animation";

const Parallax = (props: ParallaxContextsInterface) => {
  return (
    <div className="flex flex-col py-[4rem] relative  px-12 justify-center items-center">
      {props.ParallaxContext!.map(
        (content: ParallaxContextInterface, index: number) => (
          <ParallaxFullScreenAnimation key={index}>
              <div className="object-cover w-[80%] flex flex-col justify-center">
                <div>{content.title}</div>
                <div className="text-[4.5rem] font-bold leading-none py-[1rem]">
                  {content.header}
                </div>
                <div>{content.description}</div>
              </div>
              <div className="self-center justify-self-center" style={{height: "600px", width: "400px"}} >
                <Image src={content.image} alt="image" width={300} height={0}  />
              </div>
          </ParallaxFullScreenAnimation>
        )
      )}
    </div>
  );
};


export default Parallax;
