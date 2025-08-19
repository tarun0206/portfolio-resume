import { NetflixHeader } from "@/components/NetflixHeader";
import { NetflixHero } from "@/components/NetflixHero";
import { NetflixExperience } from "@/components/NetflixExperience";
import { NetflixSkills } from "@/components/NetflixSkills";
import { NetflixEducation } from "@/components/NetflixEducation";
import { NetflixContact } from "@/components/NetflixContact";
import { NetflixScrollIndicator } from "@/components/NetflixScrollIndicator";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <NetflixScrollIndicator />
      <NetflixHeader />
      <main>
        <section id="home">
          <NetflixHero />
        </section>
        <NetflixExperience />
        <NetflixSkills />
        <NetflixEducation />
        <NetflixContact />
      </main>
    </div>
  );
}
