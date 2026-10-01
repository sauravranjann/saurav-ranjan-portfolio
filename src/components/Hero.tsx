import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Github, Linkedin, Mail, Code2 } from "lucide-react";
import { useEffect, useState } from "react";
import { RESUME_URL, LINKS } from "@/data/profile";

const roles = [
  "Java Backend Engineer",
  "Spring Boot Developer",
  "Microservices Engineer",
  "REST API Developer",
  "Distributed Systems Engineer",
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="container mx-auto px-4 relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          <div className="text-left animate-fade-up space-y-7">
            <Badge variant="secondary" className="px-4 py-2 text-sm border border-primary/20">
              Open to Backend Engineer / Java Developer roles
            </Badge>

            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                Saurav Ranjan
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-primary mb-4">
                Java Backend Engineer
              </p>
              <p className="font-mono text-sm md:text-base text-muted-foreground">
                Java • Spring Boot • Microservices • REST APIs • Kafka • Redis
              </p>
            </div>

            <div className="h-7 font-mono text-base text-accent flex items-center" aria-live="polite">
              <span>{roles[currentRoleIndex]}</span>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              I build reliable backend systems using Java, Spring Boot, and Microservices, with
              hands-on experience in REST APIs, event-driven processing, caching, databases, and
              production systems.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="gap-2">
                <a href="#projects">
                  View My Work
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { icon: Github, label: "GitHub", href: LINKS.github },
                { icon: Linkedin, label: "LinkedIn", href: LINKS.linkedin },
                { icon: Mail, label: "Email", href: `mailto:${LINKS.email}` },
                { icon: Code2, label: "Codolio", href: LINKS.codolio },
              ].map((item) => (
                <Button key={item.label} asChild variant="ghost" size="sm" className="gap-2">
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/15 rounded-full blur-3xl" />
              <img
                src="/profile.jpg"
                alt="Saurav Ranjan - Java Backend Engineer"
                width={384}
                height={384}
                loading="eager"
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border border-primary/30 shadow-glow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
