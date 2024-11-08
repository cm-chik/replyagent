import React from "react";

import type {
  CarouselCardInterface,
} from "@/app/interfaces";

const CarouselCard = (props: CarouselCardInterface) => {
  return (
<div className="flex flex-col items-center">
      <div className="flex flex-col text-center w-[50rem] leading-[4rem] space-y-[4rem]">
        <div className="text-[4rem] font-bold tracking-tighter py-2">
          {props.carousel_title}
        </div>
        <div className="leading-normal">{props.carousel_description}</div>
              <div className="flex w-[100%] max-md:flex-col justify-center gap-[2rem] max-md:space-y-[2rem] px-10">
        {props.carousel_row}
      </div>
      </div>
    </div>
  );
};

export default CarouselCard;
