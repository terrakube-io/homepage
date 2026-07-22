import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Sponsors from "./components/Sponsors";
import Support from "./components/Support";
import Community from "./components/Community";

export default function Home() {
  return (
    <div className="relative min-h-dvh">
      <Header />
      <main>
        <Hero />
        <Features />
        <Sponsors />
        <Support />
        <Community />
      </main>
    </div>
  );
}
