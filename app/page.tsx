"use client";

import { FirstCard, SecondCard } from "./components/ThreeCards/ThreeCardsContent";
import Hero from "./components/Hero";
import { FirstRollingSection } from "./components/Parallax/ParallaxContent";
import ThreeCards from "./components/ThreeCards/ThreeCards";
import Parallax from "./components/Parallax/Parallax";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] ">
      <main className="flex flex-col gap-16">
        <Hero />
        <ThreeCards {...FirstCard} />
        <ThreeCards {...SecondCard} />
        <Parallax {...FirstRollingSection} />{" "}
      </main>
    </div>
  );
}
