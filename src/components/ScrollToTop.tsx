import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={scrollToTop}
      className="fixed bottom-6 right-24 sm:right-36 z-40 h-10 w-10 rounded-full cyber-border bg-black/80 shadow-glow-sm hover:shadow-glow hover:border-primary text-foreground transition-all duration-300 animate-scale-in"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-4 h-4 text-primary" />
    </Button>
  );
};

export default ScrollToTop;
