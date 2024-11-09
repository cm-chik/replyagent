import { CardsInterface } from "@/app/interfaces";
import Image from "next/image";
import React from "react";

export default function SixCards(props: CardsInterface) {
  return (
    <div className="space-y-[2rem] px-12 py-[40vh]">
        <div className="text-[5rem] font-bold tracking-tighter py-2 text-center leading-none">
          {props.section_header}
        </div>
      <div className="px-10  md:px-[12rem]"> { props.section_description}
        </div>
      <div className="md:grid px-12 grid-cols-3 grid-rows-2 gap-[2rem] max-md:space-y-[2rem]">
        {props.cards.map((card, index) => (
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
        ))}
      </div>
    </div>
  );
}
