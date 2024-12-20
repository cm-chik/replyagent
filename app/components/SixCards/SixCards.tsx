import { FadeInWhenVisible } from "@/app/animations/animation";
import { CardsInterface } from "@/app/interfaces";
import Image from "next/image";
import React from "react";

export default function SixCards(props: CardsInterface) {
  return (
    <div className="flex flex-col space-y-[2rem] px-12 py-[4rem] items-center">
        <div className="text-[2.5rem] md:text-[5rem] font-bold tracking-tighter py-2 text-center leading-none max-w-[60rem]">
          {props.section_header}
        </div>
      <div className="px-10 md:px-[12rem] max-w-[60rem]"> { props.section_description}
      </div>
      <div className="flex justify-center">
      <div className="md:grid px-12 grid-cols-3 grid-rows-2 gap-[2rem] max-md:space-y-[2rem] max-w-[1100px] w-screen">
        {props.cards.map((card, index) => (
          <FadeInWhenVisible key={index}>
          <div
            key={index}
            className=" bg-blue-50 rounded-xl p-8 space-y-2 "
          >
            <span className="">
              <Image
                src={card.card_image}
                alt=""
                height={30}
                width={30}
                className=""
              />
            </span>
            <div className="text-2xl font-bold overflow-hidden ">
              {card.card_title}
            </div>
            <div className="font-light">{card.card_description}</div>
            <div className="text-blue-500">More info -{">"} </div>
            </div>
            </FadeInWhenVisible>
        ))}
          </div>
      </div>
    </div>
  );
}
