import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

const roles = [
  "React-Native",
  "Java/Spring Boot",
  "PostgreSQL",
  "REST APIs",
  "DSA",
];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: "700+", label: "DSA Problems Solved" },
    { value: "50,000+", label: "Users Reached" },
    { value: "3+", label: "Years Experience" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Solid background with subtle gradient overlay */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 hero-gradient opacity-5" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <div className="mb-6 inline-block">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              Available for Full-Time Opportunities
            </Badge>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Saurav Ranjan</span>
          </h1>

          <div className="text-2xl md:text-3xl font-semibold mb-4 text-foreground/90">
            React Native & Spring Boot Engineer
          </div>

          <div className="h-8 mb-6 font-mono text-lg text-accent">
            <span className="animate-pulse">{roles[currentRoleIndex]}</span>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I build reliable mobile apps and backends that scale—AI, healthcare, and data-driven systems.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button asChild size="lg" className="gap-2 shadow-glow">
              <a href="https://drive.google.com/file/d/17e-ngD_bcSFeV0eeAAnVBlxBoNzcBldm/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5" />
                Download Résumé
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <a href="mailto:sauravranjann@gmail.com">
                <Mail className="w-5 h-5" />
                Email Me
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <a href="https://github.com/sauravranjann" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <a href="https://linkedin.com/in/saurav-ranjann" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="animate-scale-in p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
