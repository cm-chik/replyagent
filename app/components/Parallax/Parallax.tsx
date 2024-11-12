import React from "react";
import Image from "next/image";
import type {
  ParallaxContextInterface,
  ParallaxContextsInterface,
} from "@/app/interfaces";
import { ParallaxFullScreenAnimation } from "@/app/animations/animation";

const Parallax = (props: ParallaxContextsInterface) => {
  return (
    <div className="flex justify-center pt-[20vh]">
      <div className="hidden md:flex md:flex-col md:py-[4rem] md:w-screen md:p-[4rem] md:items-center">
        {props.ParallaxContext!.map(
          (content: ParallaxContextInterface, index: number) => (
           <ParallaxFullScreenAnimation key={index}>
            <div className="flex flex-col md:flex-row gap-x-[4rem] align-middle" >
              <div className="flex flex-col justify-center w-1/2 max-w-[40rem] ">
                  <div>{content.title}</div>
                  <div className="text-[2.5rem] md:text-[4.5rem] font-bold leading-none py-[2rem]">
                    {content.header}
                  </div>
                  <div>{content.description}</div>
              </div>
              <div className="w-1/2" >
                {/* <Image src={content.image} alt="image" width={400} height={800} style={{objectFit: "contain"}}/> */}
              </div>
            </div>
           </ParallaxFullScreenAnimation>
          )
          )}
      </div>
      <div className="flex flex-col md:hidden p-12 w-screen ">
        {props.ParallaxContext!.map(
          (content: ParallaxContextInterface, index: number) => (
            <div key={index} className="flex flex-col  y-[4rem]">
              <div className="text-[1.5rem] md:text-[2.5rem]">{content.title}</div>
              <div className="text-[2.5rem] md:text-[4.5rem] font-bold  tracking-tighter leading-none py-[2rem]">
                {content.header}
              </div>
              <div className=" py-[1rem]">{content.description}</div>
              <div className="relative justify-items-center pt-8 py-24 w-[100%] md:w-screen "> 
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
