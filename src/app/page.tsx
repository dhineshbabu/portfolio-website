import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import WorkHighlights from "@/components/WorkHighlights";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <WorkHighlights />
      <Experience />
      <Certifications />
      <Contact />
    </main>
  );
}
