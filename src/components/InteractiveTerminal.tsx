import { useState, useRef, useEffect } from "react";
import { Terminal, X, Minimize2, Maximize2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_URL, LINKS } from "@/data/profile";

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

const InteractiveTerminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: "welcome",
      output: (
        <div>
          <p className="text-primary font-bold">
            Saurav Ranjan — Java Backend Engineer Interactive Shell (v2.4.0)
          </p>
          <p className="text-muted-foreground text-xs mt-1">
            Type <span className="text-primary font-bold">help</span> to list available commands or <span className="text-primary font-bold">services</span> to inspect the microservices.
          </p>
        </div>
      ),
    },
  ]);

  const endRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      endRef.current?.scrollIntoView({ behavior: "smooth" });
      inputRef.current?.focus();
    }
  }, [isOpen, history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode = null;

    switch (cmd) {
      case "help":
        output = (
          <div className="space-y-1 text-xs text-muted-foreground">
            <p><span className="text-primary font-semibold">services</span> - List microservices & status (Omni, Order, FEP, Inventory)</p>
            <p><span className="text-primary font-semibold">kafka</span> - Display Kafka topic & consumer group lag</p>
            <p><span className="text-primary font-semibold">redis</span> - Inspect Redis caching layer status</p>
            <p><span className="text-primary font-semibold">curl /health</span> - Query Spring Boot actuator health endpoint</p>
            <p><span className="text-primary font-semibold">whoami</span> - Display professional identity</p>
            <p><span className="text-primary font-semibold">resume</span> - Download latest resume PDF</p>
            <p><span className="text-primary font-semibold">contact</span> - Show direct contact details</p>
            <p><span className="text-primary font-semibold">clear</span> - Clear terminal screen</p>
          </div>
        );
        break;

      case "services":
        output = (
          <div className="space-y-1.5 text-xs font-mono">
            <p className="text-primary font-bold">NNR Microservices (13+ System Architecture):</p>
            <p>● Omni Service: <span className="text-emerald-400">UP</span> (Port: 8081) - Multi-channel order normalization</p>
            <p>● Order Service: <span className="text-emerald-400">UP</span> (Port: 8082) - Order lifecycle & Kafka event producer</p>
            <p>● FEP Service: <span className="text-emerald-400">UP</span> (Port: 8083) - Front-end business validations</p>
            <p>● Inventory Service: <span className="text-emerald-400">UP</span> (Port: 8084) - Stock reservations & allocations</p>
            <p className="text-muted-foreground text-[11px] mt-1">Host: Linux Server • Reverse Proxy: Nginx</p>
          </div>
        );
        break;

      case "kafka":
        output = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-primary font-bold">Kafka Cluster Telemetry:</p>
            <p>Topic: <span className="text-foreground">order-events</span> (Partitions: 6, Replication: 3)</p>
            <p>Consumer Group: <span className="text-foreground">inventory-consumers</span> (Lag: 0 msgs)</p>
            <p>Consumer Group: <span className="text-foreground">sms-notifications</span> (Lag: 0 msgs)</p>
            <p>Delivery Semantics: <span className="text-accent font-semibold">At-least-once with idempotent consumers</span></p>
          </div>
        );
        break;

      case "redis":
        output = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-primary font-bold">Redis Caching Layer:</p>
            <p>Status: <span className="text-emerald-400">ONLINE</span></p>
            <p>Cached Entities: Customer Profiles, Order Read Models, SKU master</p>
            <p>Average Read Latency: <span className="text-primary font-bold">1.2ms</span></p>
            <p>Invalidation: Event-driven on mutative order status updates</p>
          </div>
        );
        break;

      case "curl /health":
      case "curl /api/v1/health":
      case "health":
        output = (
          <pre className="text-xs text-primary bg-black/60 p-2 rounded border border-border/50 font-mono">
{`{
  "status": "UP",
  "engineer": "Saurav Ranjan",
  "role": "Java Backend Engineer",
  "runtime": "Java 21 (OpenJDK)",
  "framework": "Spring Boot 3.x",
  "database": ["MySQL", "PostgreSQL", "MongoDB"],
  "messaging": "Apache Kafka",
  "cache": "Redis"
}`}
          </pre>
        );
        break;

      case "whoami":
        output = (
          <p className="text-xs">
            <span className="text-primary font-bold">Saurav Ranjan</span> — Java Backend Engineer at Embryo Software Solutions (Client: Advatix APAC Logistics). Specializing in Spring Boot, Microservices, Kafka, Redis, and high-performance backend systems.
          </p>
        );
        break;

      case "resume":
        window.open(RESUME_URL, "_blank");
        output = <p className="text-xs text-primary">Opening resume PDF in new tab...</p>;
        break;

      case "contact":
        output = (
          <div className="space-y-1 text-xs font-mono">
            <p>Email: <a href={`mailto:${LINKS.email}`} className="text-primary underline">{LINKS.email}</a></p>
            <p>Phone: <a href={LINKS.phoneTel} className="text-primary underline">{LINKS.phone}</a></p>
            <p>GitHub: <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="text-primary underline">{LINKS.github}</a></p>
            <p>LinkedIn: <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary underline">{LINKS.linkedin}</a></p>
            <p>Codolio: <a href={LINKS.codolio} target="_blank" rel="noopener noreferrer" className="text-primary underline">{LINKS.codolio}</a></p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      default:
        output = (
          <p className="text-xs text-destructive">
            Command not recognized: <span className="font-bold">{cmd}</span>. Type <span className="text-primary font-bold">help</span> to view all commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: inputVal, output }]);
    setInputVal("");
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary/90 border border-primary/40 text-foreground font-mono text-xs shadow-glow-sm hover:shadow-glow hover:border-primary transition-all duration-300 backdrop-blur-md group"
        aria-label="Open Interactive Backend Terminal"
      >
        <Terminal className="w-4 h-4 text-primary group-hover:animate-pulse" />
        <span className="font-semibold hidden sm:inline">&gt;_ Terminal</span>
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
        </span>
      </button>

      {/* Terminal Modal Window */}
      {isOpen && (
        <div className="fixed inset-x-4 bottom-20 sm:right-6 sm:left-auto sm:w-[540px] z-50 animate-scale-in">
          <div className="rounded-xl border border-primary/40 bg-black/95 shadow-2xl overflow-hidden backdrop-blur-xl flex flex-col h-[380px]">
            {/* Header bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-secondary/80 border-b border-border/60">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={() => setIsOpen(false)} />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="font-mono text-xs text-muted-foreground ml-2">
                  saurav@backend-node:~
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-6 w-6 text-muted-foreground hover:text-foreground"
              >
                <X className="w-3.5 h-3.5" />
              </Button>
            </div>

            {/* Terminal Body */}
            <div className="flex-1 p-4 overflow-y-auto font-mono text-xs space-y-3">
              {history.map((h, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex items-center gap-2 text-foreground/80">
                    <span className="text-primary font-bold">saurav@backend:~$</span>
                    <span>{h.command}</span>
                  </div>
                  <div className="pl-4 text-foreground/95">{h.output}</div>
                </div>
              ))}
              <div ref={endRef} />
            </div>

            {/* Input Line */}
            <form onSubmit={handleCommand} className="p-3 bg-secondary/40 border-t border-border/60 flex items-center gap-2">
              <span className="text-primary font-bold font-mono text-xs">saurav@backend:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type 'help', 'services', or 'curl /health'..."
                className="flex-1 bg-transparent border-none outline-none font-mono text-xs text-foreground placeholder:text-muted-foreground/50"
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default InteractiveTerminal;
