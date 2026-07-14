import { config } from "@/config/portfolio.config";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/common/ScrollProgress";
import { CustomCursor } from "@/components/common/CustomCursor";
import { LoadingScreen } from "@/components/common/LoadingScreen";

import { Hero } from "@/components/sections/Hero";
import { TechMarquee } from "@/components/common/TechMarquee";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { CurrentlyLearning } from "@/components/sections/CurrentlyLearning";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Achievements } from "@/components/sections/Achievements";
import { GitHubSection } from "@/components/sections/GitHub";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";

const s = config.sections;

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        {s.hero && <Hero />}
        {s.skills && <TechMarquee />}
        {s.about && <About />}
        {s.skills && <Skills />}
        {s.learning && <CurrentlyLearning />}
        {s.projects && <Projects />}
        {s.experience && <Experience />}
        {s.education && <Education />}
        {s.certifications && <Certifications />}
        {s.achievements && <Achievements />}
        {s.github && <GitHubSection />}
        {s.blog && <Blog />}
        {s.contact && <Contact />}
      </main>
      <Footer />
    </>
  );
}
