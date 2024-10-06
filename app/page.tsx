"use client";

import { FirstCard, SecondCard } from "./components/CardContent";
import Hero from "./components/Hero";
import { FirstRollingSection } from "./components/RollingContent";
import ThreeCards from "./components/ThreeCards";
import VerticalRollingFixedScreenshot from "./components/VerticalRollingFixedScreenshot";
import Transition from "./animations/animation";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] ">
      <main className="flex flex-col gap-16">
        <Hero />
        <ThreeCards {...FirstCard} />
        <ThreeCards {...SecondCard} />
        <Transition>
          <VerticalRollingFixedScreenshot {...FirstRollingSection} />{" "}
        </Transition>
      </main>
    </div>
  );
}
