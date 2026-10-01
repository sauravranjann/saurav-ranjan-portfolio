import { Card } from "@/components/ui/card";
import {
  Network, Boxes, Zap, Radio, Gauge, Database, Table2, KeyRound, Share2, Route, Terminal, Bug,
} from "lucide-react";

const capabilities = [
  { title: "REST API Design", icon: Network },
  { title: "Microservices", icon: Boxes },
  { title: "Event-Driven Architecture", icon: Zap },
  { title: "Kafka", icon: Radio },
  { title: "Redis Caching", icon: Gauge },
  { title: "SQL / NoSQL", icon: Database },
  { title: "Database Design", icon: Table2 },
  { title: "Authentication & Authorization", icon: KeyRound },
  { title: "Distributed Systems", icon: Share2 },
  { title: "Nginx Reverse Proxy", icon: Route },
  { title: "Linux Server Exposure", icon: Terminal },
  { title: "Production Debugging", icon: Bug },
];

const BackendEngineering = () => {
  return (
    <section id="backend" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Backend <span className="text-gradient">Engineering</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((item, index) => (
              <div
                key={item.title}
                className="group relative p-5 rounded-xl cyber-border hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.04}s` }}
              >
                <div className="p-2.5 rounded-lg bg-primary/10 w-fit mb-3 group-hover:bg-primary/20 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(28,222,70,0.3)] transition-all duration-300">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-semibold text-sm tracking-tight text-foreground/90 group-hover:text-primary transition-colors">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackendEngineering;
