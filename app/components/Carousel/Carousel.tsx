import React from "react";
import Image from "next/image";
import type { CarouselCardInterface } from "@/app/interfaces";
import { CarouselAnimation } from "@/app/animations/animation";

const CarouselCard: React.FC<CarouselCardInterface> = (props) => {
  return (
    <div className="px-12 w-screen overflow-hidden h-[800px] flex flex-col justify-around text-center gap-[4rem] items-center py-[12rem]">
        <div className="text-[4rem] font-bold leading-none  max-w-[40rem]">
          {props.carousel_title}
        </div>
        <div className="leading-normal max-w-[40rem]">
          {props.carousel_description}
        </div>

        <div className="flex max-md:flex-col justify-center">
          <CarouselAnimation>
            <div className="flex">
            <div className="flex gap-[2rem] space-x-[4rem]">
              {props.carousel_row.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col space-y-[5rem] text-center"
                  style={{
                    position: "relative",
                    width: "4rem",
                    height: "4rem",
                  }}
                >
                  <Image
                    src={item.carousel_image}
                    alt={item.carousel_word}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                  <div className="text-[0.8rem] leading-none ">
                    {item.carousel_word}
                  </div>
                </div>
              ))}
            <div className="flex gap-[2rem] space-x-[4rem]">
              {props.carousel_row.map((item, index) => (
                <div
                key={index}
                className="flex flex-col space-y-[5rem] text-center"
                style={{
                  position: "relative",
                  width: "4rem",
                  height: "4rem",
                }}
                >
                  <Image
                    src={item.carousel_image}
                    alt={item.carousel_word}
                    fill
                    style={{ objectFit: "contain" }}
                    />
                  <div className="text-[0.8rem] leading-none w-[4rem]">
                    {item.carousel_word}
                  </div>
                </div>
              ))}
              </div>
              </div>
              </div>
          </CarouselAnimation>
        </div>
      </div>

  );
};

export default CarouselCard;
