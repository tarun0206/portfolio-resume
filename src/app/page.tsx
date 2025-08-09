import { Header } from "@/components/Header";
// import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
// import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
// import { Contact } from "@/components/Contact";
import { AdalineHero } from "@/components/AdalineHero";
import { Marquee } from "@/components/Marquee";
import { Metrics } from "@/components/Metrics";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgress } from "@/components/ScrollProgress";
import { InteractiveExperience } from "@/components/InteractiveExperience";
import { InteractiveContact } from "@/components/InteractiveContact";
import { WalkingEngineerGLTF } from "@/components/ui/walking-engineer-gltf";

export default function Home() {
  return (
    <div className="font-sans">
      <div className="noise-overlay" />
      <SmoothScroll />
      <ScrollProgress />
      <Header />
      <WalkingEngineerGLTF />
      <main>
        {/* Adaline-style motion hero */}
        <AdalineHero />
        <Marquee />
        <Metrics />
        <InteractiveExperience />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Skills />
          <Education />
          <InteractiveContact />
        </div>
      </main>
    </div>
  );
}
