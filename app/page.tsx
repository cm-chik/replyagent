"use client";

import { FirstCard, SecondCard } from "./components/ThreeCards/Context";
import Hero from "./components/Hero";
import ThreeCards from "./components/ThreeCards/page";
import Parallax from "./components/Parallax/page";
import { ParralaxContext } from "./components/Parallax/Context";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] ">
      <main className="flex flex-col gap-[50vh]">
        <Hero />
        <ThreeCards {...FirstCard} />
        <ThreeCards {...SecondCard} />
        <Parallax {...ParralaxContext} />
        <ThreeCards {...FirstCard} />
      </main>
    </div>
  );
}
