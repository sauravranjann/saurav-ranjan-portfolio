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
