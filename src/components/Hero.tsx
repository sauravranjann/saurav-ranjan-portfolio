import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download } from "lucide-react";
import { useEffect, useState } from "react";

const roles = [
  "React Native Developer",
  "Java & Spring Boot Engineer",
  "Backend API Developer",
  "AI/ML Project Contributor",
  "DSA Practitioner (700+ problems)",
];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spotlight gradient background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Left: Text Content */}
          <div className="text-left animate-fade-up space-y-8">
            <div className="inline-block">
              <Badge variant="secondary" className="px-4 py-2 text-sm border border-primary/20">
                Available for Full-Time Opportunities
              </Badge>
            </div>

            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                Saurav Ranjan
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-muted-foreground mb-6">
                Full-Stack Engineer
                <br />
                <span className="text-primary">(React Native • Java • Spring Boot)</span>
              </p>
            </div>

            <div className="h-8 font-mono text-base text-accent flex items-center">
              <span className="animate-pulse">{roles[currentRoleIndex]}</span>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              I design and build scalable mobile + backend systems with clean architecture and precise execution.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="gap-2">
                <a href="#contact">
                  Let's Get Started
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <a href="https://drive.google.com/file/d/17e-ngD_bcSFeV0eeAAnVBlxBoNzcBldm/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5" />
                  Download Résumé
                </a>
              </Button>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-card to-card/50 border border-border/50 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-9xl font-bold text-primary/20">
                  SR
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
