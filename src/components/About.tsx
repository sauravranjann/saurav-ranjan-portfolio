import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

const About = () => {
  const stack = [
    "Java", "Spring Boot", "Microservices", "REST APIs",
    "Kafka", "Redis", "MySQL", "PostgreSQL", "MongoDB",
    "Keycloak", "OAuth2", "JWT", "Nginx", "Linux", "Docker", "Gradle",
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12" />

          <Card className="p-8 mb-8 card-gradient border-border/50">
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              Backend Engineer with 1+ years of experience building enterprise backend systems
              using Java, Spring Boot, and Microservices. Experienced in REST API development,
              asynchronous event processing with Kafka, Redis-based caching, and SQL/NoSQL
              databases. Contributed to logistics and healthcare applications involving order
              processing, inventory workflows, shipment operations, authentication, and distributed
              service communication.
            </p>

            <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
              <GraduationCap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Chandigarh University</h3>
                <p className="text-muted-foreground">B.E. Computer Science • 2021 – 2025</p>
                <p className="text-accent font-semibold mt-1">CGPA: 8.08</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 card-gradient border-border/50">
            <h3 className="text-2xl font-bold mb-6 text-center">Core Stack</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {stack.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-mono hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
