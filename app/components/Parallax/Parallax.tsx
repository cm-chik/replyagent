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
      <div className="hidden md:flex md:flex-col  md:w-screen md:p-[4rem] md:items-center">
        {props.ParallaxContext!.map(
          (content: ParallaxContextInterface, index: number) => (
           <ParallaxFullScreenAnimation key={index}>
            <div className="flex flex-col md:flex-row gap-x-[5rem]" >
              <div className="flex flex-col justify-center w-1/2 max-w-[40rem] ">
                  <div>{content.title}</div>
                  <div className="text-[2.5rem] md:text-[4rem] font-bold leading-none py-[2rem]">
                    {content.header}
                  </div>
                  <div>{content.description}</div>
              </div>
              <div className="relative w-[40rem] h-[40rem] p-[2rem] " >
                  <Image src={content.image} alt="image" fill style={{objectFit: "contain"}}/>
              </div>
            </div>
           </ParallaxFullScreenAnimation>
          )
          )}
      </div>
      <div className="flex flex-col md:hidden p-12 w-screen ">
        {props.ParallaxContext!.map(
          (content: ParallaxContextInterface, index: number) => (
            <div key={index} className="flex flex-col y-[4rem] pb-[8rem]">
              <div className="text-[1.5rem] md:text-[2.5rem]">{content.title}</div>
              <div className="text-[2.5rem] md:text-[4.5rem] font-bold  tracking-tighter leading-none py-[3rem]">
                {content.header}
              </div>
              <div className="pb-[3rem]">{content.description}</div>
              <div className="relative self-center pt-8 py-24 w-[250px] h-[450px] "> 
                <Image src={content.image} alt="image" fill style={{objectFit: "contain"}}/>
              </div>
            </div>
          )
        )}
      </div>
      </div>
  );
};


export default Parallax;
