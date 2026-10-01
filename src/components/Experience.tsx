import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";
import ArchitectureDiagrams from "@/components/ArchitectureDiagrams";

const Experience = () => {
  const services = ["Omni", "Order", "FEP", "Inventory"];

  const responsibilities = [
    "Contributed across 4 core microservices — Omni, Order, FEP, and Inventory — within a 13+ microservice Warehouse Management System.",
    "Developed REST APIs supporting order lifecycle, inventory operations, warehouse workflows, and shipment processing.",
    "Implemented Kafka-based asynchronous communication for order creation and order status updates.",
    "Order events are consumed by downstream services including Inventory and SMS/Notification services.",
    "Implemented EDI 945 generation when an order reaches shipped status.",
    "Added manual re-trigger/recovery handling when automatic EDI processing fails.",
    "Implemented Redis caching for frequently accessed customer and order information to reduce repeated database access.",
    "Worked with MySQL and MongoDB across backend services.",
    "Investigated production issues using debugging and root-cause analysis.",
    "Worked with Linux-based servers and configured Nginx as a reverse proxy.",
    "Configured Nginx routing/proxy rules to expose multiple Spring Boot applications running as independent JAR services.",
    "Handled service routing, restarts, connectivity troubleshooting, and backend deployment support for multiple Java JAR applications on the same server.",
  ];

  const tech = ["Java", "Spring Boot", "REST APIs", "Kafka", "Redis", "MySQL", "MongoDB", "EDI 945", "Nginx", "Linux"];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12" />

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent hidden md:block" />

            <Card className="p-8 card-gradient border-border/50 relative">
              <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full border-4 border-background hidden md:block" />

              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Backend Engineer</h3>
                  <p className="text-lg text-accent font-semibold mb-2">Embryo Software Solutions</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">July 2025 – Present</Badge>
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      Client: Advatix APAC Logistics
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="p-4 mb-6 rounded-lg bg-secondary/50 border border-border/50">
                <p className="text-sm text-muted-foreground mb-3">
                  NNR Warehouse Management System — core services worked across:
                </p>
                <div className="flex flex-wrap gap-2">
                  {services.map((s) => (
                    <Badge key={s} variant="secondary" className="font-mono">
                      {s} Service
                    </Badge>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Part of a 13+ microservice ecosystem.
                </p>
              </div>

              <div className="space-y-3">
                {responsibilities.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-accent/5 rounded-lg border border-accent/10 hover:border-accent/30 transition-colors"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <p className="text-foreground/90">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-3">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {tech.map((t) => (
                    <Badge key={t} className="bg-primary/10 text-primary border-primary/20">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <ArchitectureDiagrams />
        </div>
      </div>
    </section>
  );
};

export default Experience;
