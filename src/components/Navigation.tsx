import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#coding", label: "Coding" },
  { href: "#contact", label: "Contact" },
];

const Navigation = () => {
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("#home");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    const handleScroll = () => {
      const y = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? y / docHeight : 0;
      setScrollProgress(progress);

      setIsScrolled(y > 50);
      setIsHidden(y > 150 && y > lastScrollY.current);
      lastScrollY.current = y;

      // Section spy
      const sectionIds = ["contact", "coding", "skills", "projects", "experience", "about", "home"];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(`#${id}`);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <>
      {/* Laser Top Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-50 origin-left shadow-[0_0_12px_rgba(28,222,70,0.8)] pointer-events-none"
        style={{ transform: `scaleX(${scrollProgress})`, transition: "transform 0.05s linear" }}
        aria-hidden="true"
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        } ${isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/50" : "bg-transparent"}`}
      >
        <a
          href="#about"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:px-3 focus:py-2 focus:bg-card focus:rounded-md"
        >
          Skip to content
        </a>
        <nav className="container mx-auto px-4" aria-label="Main">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="text-xl font-bold text-gradient flex items-center gap-1.5 group">
              <span className="w-2 h-2 rounded-full bg-primary group-hover:animate-ping" />
              <span>SR</span>
            </a>

            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`text-xs font-mono font-medium px-3 py-1.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? "text-primary bg-primary/10 border border-primary/30 shadow-[0_0_15px_rgba(28,222,70,0.2)]"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/60 border border-transparent"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
    </>
  );
};

export default Navigation;
