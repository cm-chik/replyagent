import React from "react";

import type {
  CarouselCardInterface,
} from "@/app/interfaces";

const CarouselCard = (props: CarouselCardInterface) => {
  return (
<div className="px-12">
      <div className="flex flex-col text-center leading-[4rem] space-y-[4rem]">
        <div className="text-[4rem] font-bold tracking-tighter py-2 ">
          {props.carousel_title}
        </div>
        <div className="leading-normal md:px-[14rem]">{props.carousel_description}</div>
        <div className="flex w-[100%] max-md:flex-col justify-center gap-[2rem] max-md:space-y-[2rem] px-10">
          <div>
            {props.carousel_row}
            </div>
      </div>
      </div>
    </div>
  );
};

export default CarouselCard;
