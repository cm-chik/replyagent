import { FirstCard, SecondCard } from "./components/CardContent";
import Hero from "./components/Hero";
import ThreeCards from "./components/ThreeCards";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] ">
      <main className="flex flex-col gap-16">
        <Hero />
        <ThreeCards {...FirstCard} />
        <ThreeCards {...SecondCard} />
      </main>
    </div>
  );
}
