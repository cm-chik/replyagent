import React from "react";
import Image from "next/image";
import type {
  ParallaxContextInterface,
  ParallaxContextsInterface,
} from "@/app/interfaces";
import { ParallaxFullScreenAnimation } from "@/app/animations/animation";

const Parallax = (props: ParallaxContextsInterface) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col py-[4rem] w-screen gap-y-[4rem]">
        {props.ParallaxContext!.map(
          (content: ParallaxContextInterface, index: number) => (
           <ParallaxFullScreenAnimation key={index}>
            <div className="flex justify-around" >
              <div className="flex flex-col justify-center w-[40rem]">
                  <div>{content.title}</div>
                  <div className="text-[4.5rem] font-bold leading-none py-[2rem]">
                    {content.header}
                  </div>
                  <div>{content.description}</div>
              </div>
              <div className="w-[20rem]" >
                <Image src={content.image} alt="image" width={400} height={800}/>
              </div>
            </div>
           </ParallaxFullScreenAnimation>
          )
          )}
        </div>
      </div>
  );
};


export default Parallax;
