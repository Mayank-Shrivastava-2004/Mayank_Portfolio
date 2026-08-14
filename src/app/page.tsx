import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { getFullPortfolioPayload } from "@/lib/data";

export const revalidate = 3600; // ISR cache revalidation

export default async function Home() {
  const data = getFullPortfolioPayload();

  return (
    <main className="min-h-screen bg-bg text-text selection:bg-primary selection:text-white">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <Hero metrics={data.metrics} />
      <About />
      <Skills skills={data.skills} />
      <Experience experience={data.experience} />
      <Projects projects={data.projects} />
      <Education education={data.education} />
      <Certifications certifications={data.certifications} />
      <Contact />
      <Footer />
    </main>
  );
}
