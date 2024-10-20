"use client";

import { FirstCard, SecondCard } from "./components/ThreeCards/ThreeCardsContent";
import Hero from "./components/Hero";
import ThreeCards from "./components/ThreeCards/ThreeCards";
import Parallax from "./components/Parallax/Parallax";
import { ParralaxContexts } from "./components/Parallax/ParallaxCopies";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] ">
      <main className="flex flex-col gap-[50vh]">
        <Hero />
        <ThreeCards {...FirstCard} />
        <ThreeCards {...SecondCard} />
        <Parallax {...ParralaxContexts} />
      </main>
    </div>
  );
}
