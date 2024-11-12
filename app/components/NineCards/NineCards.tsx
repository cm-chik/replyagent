import { CardsInterface } from "@/app/interfaces";
import Image from "next/image";
import React from "react";

export default function NineCards(props: CardsInterface) {
  return (
    <div className="flex flex-col items-center px-12 py-[4rem] text-center  w-screen">
      <div className="text-[2.5rem] md:text-[4rem] font-bold tracking-tighter py-2 w-screen">
        {props.section_header}
      </div>
      <div className="md:grid justify-items-center grid-cols-3 px-12 grid-rows-2 gap-[2rem]  w-screen">
        {props.cards.map((card, index) => (
          <div
            key={index}
            className="rounded-xl p-8 space-y-8"
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
            <div className="text-center max-w-[20rem]">{card.card_description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
