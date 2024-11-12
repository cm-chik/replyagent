"use client";

import { FirstCard, SecondCard, GetStartedCard} from "./components/ThreeCards/Context";
import { ChannelCards } from "./components/SixCards/Context";
import Hero from "./components/Hero";
import ThreeCards, {ThreeCardsWithButton } from "./components/ThreeCards/ThreeCards";
import Parallax from "./components/Parallax/Parallax";
import { ParallaxContexts } from "./components/Parallax/Context";
import { CarouselParallaxContexts } from "./components/CarouselParallax/Context";
import SixCards from "./components/SixCards/SixCards";
import CarouselParallax from "./components/CarouselParallax/CarouselParallax";
import CarouselCard from "./components/Carousel/Carousel";
import CarouselCardContext from "./components/Carousel/Context";
import { WhyReplyAgent } from "./components/NineCards/Context";
import NineCards from "./components/NineCards/NineCards";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col">
        <Hero />
        <ThreeCards {...FirstCard} />
        <ThreeCards {...SecondCard} /> 
        <Parallax {...ParallaxContexts} />
        <SixCards {...ChannelCards} /> 
        <CarouselParallax {...CarouselParallaxContexts} />
        <CarouselCard {...CarouselCardContext} />
        <NineCards {...WhyReplyAgent} />
        <ThreeCardsWithButton {...GetStartedCard} />
      </main>
    </div>
  );
}
