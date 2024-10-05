import { CardMessage } from "@/app/interfaces";
import Image from "next/image";
import React from "react";

export default function ThreeCards(props: CardMessage) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col text-center py-8 align-middle xl:w-[50vw] leading-tight">
        <div>{props.section_header}</div>
        <div className="text-[4rem] font-bold tracking-tight ">
          {props.section_title}
        </div>
        <div>{props.section_description}</div>
      </div>
      <div className="grid grid-flow-col justify-stretch  gap-[2rem] max-md:space-y-[2rem] w-full">
        {props.cards.map((card, index) => (
          <div
            key={index}
            className=" border-2 border-gray-500 rounded-xl p-8 space-y-8 w-[1/3]"
          >
            <span className="flex justify-center">
              <Image
                src={card.card_image}
                alt=""
                height={48}
                width={48}
                className=""
              />
            </span>
            <div className="text-2xl font-bold">{card.card_title}</div>
            <div className="text-center">{card.card_description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
