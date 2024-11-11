import React from "react";
import Image from "next/image";
import type {
  CarouselParallaxContextInterface,
  CarouselParallaxContextsInterface,
} from "@/app/interfaces";
import { AnimationInRightWhenVisible, FadeInWhenVisible } from "@/app/animations/animation";

const CarouselParallax = (props: CarouselParallaxContextsInterface) => {
  return (
    <div className="relative ">
      {props.CarouselParallaxContext!.map(
        (content: CarouselParallaxContextInterface, index: number) => (
          <div className="flex flex-col bg-green-600 text-white  px-12" key={index}>
            <AnimationInRightWhenVisible >
              <div className="max-md:text-[4rem] md:text-[8rem] font-bold px-[2rem] whitespace-nowrap overflow-hidden">{content.title}</div>
            </AnimationInRightWhenVisible>
            <div className="flex justify-center">
              <div className="flex max-w-[1000px] gap-[12rem] py-[2rem]">
                <div className="md:w-[60%]">
                  <div className=" text-[3.5rem] font-bold leading-none row-span-1 py-[1rem]">
                {content.header}
                </div>
                <div className="">
                {content.description}
              </div></div>
                <div className="md:w-[40%] max-md:hidden">
                    <img src={content.section_icon} alt="section_image" style={{ width: "70%" }} className="row-span-1" />
                  </div>
              

              
              
            </div>
            </div>
              <div className="flex justify-center" >
              <FadeInWhenVisible>
                <Image src={content.image} alt="image" height={0} width={1200} />
                </FadeInWhenVisible>
              </div>
          </div>
        )
      )}
    </div>
  );
};


export default CarouselParallax;
