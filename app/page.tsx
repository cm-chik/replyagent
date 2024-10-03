import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="flex items-center justify-items-center min-h-screen pb-4 gap-4 sm:px-14 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero />
      </main>
    </div>
  );
}
