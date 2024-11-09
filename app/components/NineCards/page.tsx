import { CardsInterface } from "@/app/interfaces";
import Image from "next/image";
import React from "react";

export default function NineCards(props: CardsInterface) {
  return (
    <div className="flex flex-col items-center px-12 py-[20vh] text-center">
      <div className="text-[4rem] font-bold tracking-tighter py-2">
        {props.section_header}
      </div>
      <div className="md:grid justify-items-center grid-cols-3 px-12 grid-rows-2 gap-[2rem]">
        {props.cards.map((card, index) => (
          <div
            key={index}
            className="  rounded-xl p-8 space-y-8 "
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
            <div className="text-3xl font-bold overflow-hidden text-center">
              {card.card_title}
            </div>
            <div className="text-center">{card.card_description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
