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
              <Card
                key={item.title}
                className="p-5 card-gradient border-border/50 hover:shadow-glow hover:border-primary/30 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.04}s` }}
              >
                <item.icon className="w-6 h-6 text-primary mb-3" />
                <p className="font-medium text-sm">{item.title}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackendEngineering;
