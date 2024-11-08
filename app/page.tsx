"use client";

import { FirstCard, SecondCard } from "./components/ThreeCards/Context";
import { ChannelCards } from "./components/SixCards/Context";
import Hero from "./components/Hero";
import ThreeCards from "./components/ThreeCards/page";
import Parallax from "./components/Parallax/page";
import { ParallaxContexts } from "./components/Parallax/Context";
import { CarouselParallaxContexts } from "./components/CarouselParallax/Context";
import SixCards from "./components/SixCards/page";
import CarouselParallax from "./components/CarouselParallax/page";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] ">
      <main className="flex flex-col gap-[50vh]">
        <Hero />
        <ThreeCards {...FirstCard} />
        <ThreeCards {...SecondCard} />
        <Parallax {...ParallaxContexts} />
        <SixCards {...ChannelCards} /> 
        <CarouselParallax {...CarouselParallaxContexts}/>
      </main>
    </div>
  );
}
