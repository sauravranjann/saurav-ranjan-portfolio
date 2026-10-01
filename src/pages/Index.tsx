import { useEffect } from "react";
import { LINKS } from "@/data/profile";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StatsBanner from "@/components/StatsBanner";
import About from "@/components/About";
import Experience from "@/components/Experience";
import BackendSimulator from "@/components/BackendSimulator";
import Projects from "@/components/Projects";
import BackendEngineering from "@/components/BackendEngineering";
import Skills from "@/components/Skills";
import CodingProfiles from "@/components/CodingProfiles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  useEffect(() => {
    const handleFirstClick = () => {
      if (sessionStorage.getItem("linkedin_redirected")) return;
      sessionStorage.setItem("linkedin_redirected", "true");
      window.open(LINKS.linkedin, "_blank");
    };

    if (!sessionStorage.getItem("linkedin_redirected")) {
      window.addEventListener("click", handleFirstClick, { once: true });
    }

    return () => {
      window.removeEventListener("click", handleFirstClick);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <StatsBanner />
      <About />
      <Experience />
      <BackendSimulator />
      <Projects />
      <BackendEngineering />
      <Skills />
      <CodingProfiles />
      <Contact />
      <Footer />
      <InteractiveTerminal />
      <ScrollToTop />
    </div>
  );
};

export default Index;
