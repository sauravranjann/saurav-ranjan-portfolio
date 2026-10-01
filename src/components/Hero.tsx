import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Github, Linkedin, Mail, Code2, Check, Copy, Cpu, Layers } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { RESUME_URL, LINKS } from "@/data/profile";
import NetworkCanvas from "@/components/NetworkCanvas";
import { toast } from "sonner";

const roles = [
  "Spring Boot & Microservices",
  "High-Throughput REST APIs",
  "Event-Driven Systems (Kafka)",
  "Low-Latency Caching (Redis)",
  "Distributed Systems Architecture",
];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const heroRef = useRef<HTMLElement | null>(null);
  const photoCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    // 3D Tilt calculation for photo card
    if (photoCardRef.current) {
      const pRect = photoCardRef.current.getBoundingClientRect();
      const pCenterX = pRect.left + pRect.width / 2;
      const pCenterY = pRect.top + pRect.height / 2;
      const deltaX = (e.clientX - pCenterX) / (pRect.width / 2);
      const deltaY = (e.clientY - pCenterY) / (pRect.height / 2);

      // Clamp tilt angles
      const rotY = Math.max(-12, Math.min(12, deltaX * 10));
      const rotX = Math.max(-12, Math.min(12, -deltaY * 10));
      setTilt({ rotateX: rotX, rotateY: rotY });
    }
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(LINKS.email);
    setCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      ref={heroRef}
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 hero-gradient" />

      {/* Dynamic specular mouse spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-45 transition-opacity duration-300"
        style={{
          background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(28, 222, 70, 0.14), transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Interactive Microservice Network Canvas with Fiber-Optic Packets */}
      <NetworkCanvas />

      {/* Modern High-End Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-7xl mx-auto">
          {/* Left Column: Clean, Minimal, High-Impact Typography */}
          <div className="lg:col-span-8 text-left animate-fade-up space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-md shadow-glow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="font-mono text-xs font-medium text-foreground/90 tracking-wide">
                Open to Backend Engineer / Java Developer roles
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-none">
                Saurav Ranjan
              </h1>
              <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary">
                Java Backend Engineer
              </p>
            </div>

            {/* Minimalist Terminal Role Ticker */}
            <div className="font-mono text-sm sm:text-base flex items-center gap-2 text-muted-foreground" aria-live="polite">
              <span className="text-primary font-bold">$</span>
              <span className="text-foreground font-medium">{roles[currentRoleIndex]}</span>
              <span className="animate-pulse text-primary font-bold">_</span>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I build reliable backend systems using Java, Spring Boot, and Microservices, with
              hands-on experience in REST APIs, event-driven processing, caching, databases, and
              production systems.
            </p>

            {/* Main CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Button asChild size="lg" className="gap-2 font-medium shadow-glow-sm hover:shadow-glow transition-all">
                <a href="#projects">
                  View My Work
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 font-medium border-border/80 hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                onClick={handleCopyEmail}
                className="gap-2 text-xs sm:text-sm font-mono border border-border/50 hover:border-primary/40 hover:bg-secondary/70 transition-all"
              >
                {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
                {copied ? "Copied!" : "Copy Email"}
              </Button>
            </div>

            {/* Clean Social Quick Links */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                { icon: Github, label: "GitHub", href: LINKS.github },
                { icon: Linkedin, label: "LinkedIn", href: LINKS.linkedin },
                { icon: Mail, label: "Email", href: `mailto:${LINKS.email}` },
                { icon: Code2, label: "Codolio", href: LINKS.codolio },
              ].map((item) => (
                <Button
                  key={item.label}
                  asChild
                  variant="ghost"
                  size="sm"
                  className="gap-2 text-xs text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
                >
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <item.icon className="w-3.5 h-3.5" />
                    {item.label}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Interactive Parallax Portrait with Clean Single Badge */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end animate-scale-in">
            <div
              ref={photoCardRef}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                transition: "transform 0.15s ease-out",
              }}
              className="relative flex flex-col items-center group cursor-pointer"
            >
              {/* Concentric Ambient Radial Green Aura */}
              <div className="absolute inset-0 bg-primary/25 rounded-full blur-3xl group-hover:bg-primary/35 transition-all duration-700 animate-pulse" />

              {/* High-End Dual Ring Glowing Frame */}
              <div className="relative p-1.5 rounded-full bg-gradient-to-tr from-primary via-emerald-400/40 to-primary/20 shadow-[0_0_60px_rgba(28,222,70,0.35)] transition-all duration-500 group-hover:shadow-[0_0_80px_rgba(28,222,70,0.5)]">
                <img
                  src="/profile.jpg"
                  alt="Saurav Ranjan - Java Backend Engineer"
                  width={240}
                  height={240}
                  loading="eager"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.fallback) {
                      target.dataset.fallback = "true";
                      target.src = "https://drive.google.com/uc?export=view&id=1MWUs6KVVuKcdba3J-bSRv-qswUhzRduu";
                    }
                  }}
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 rounded-full object-cover border-2 border-border/80 group-hover:border-primary/50 transition-colors"
                />
              </div>

              {/* Tech Chips below portrait */}
              <div className="mt-4 flex flex-col gap-1.5 items-center w-full max-w-[280px]">
                <div className="w-full flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full cyber-border shadow-glow-sm hover:border-primary/60 transition-all backdrop-blur-xl bg-black/75">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse flex-shrink-0" />
                  <span className="font-mono text-xs font-semibold text-foreground">
                    Java <span className="text-primary font-bold">8 / 17 / 21 / 25 / 27</span>
                  </span>
                </div>

                <div className="w-full flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full cyber-border shadow-glow-sm hover:border-primary/60 transition-all backdrop-blur-xl bg-black/75">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                  <span className="font-mono text-xs font-medium text-muted-foreground">
                    Spring Boot <span className="text-foreground font-semibold">3 / 4</span> • Microservices
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
