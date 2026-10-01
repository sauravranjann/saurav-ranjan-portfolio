import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Server, Database, Shield, Network, Wrench, Layers } from "lucide-react";

const skillCategories = [
  { title: "Languages", icon: Code2, skills: ["Java", "SQL"] },
  {
    title: "Backend",
    icon: Server,
    skills: ["Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate", "REST APIs", "Microservices"],
  },
  { title: "Messaging & Caching", icon: Network, skills: ["Kafka", "Redis"] },
  { title: "Databases", icon: Database, skills: ["MySQL", "PostgreSQL", "MongoDB"] },
  { title: "Security", icon: Shield, skills: ["Keycloak", "OAuth2", "JWT"] },
  { title: "Server / DevOps", icon: Layers, skills: ["Nginx", "Linux", "Docker", "Gradle"] },
  { title: "Tools", icon: Wrench, skills: ["Git", "GitHub", "Postman", "Swagger"] },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={category.title}
                className="p-6 card-gradient border-border/50 animate-fade-up hover:shadow-glow transition-all duration-300"
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="font-mono text-xs px-3 py-1.5">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-6 p-6 card-gradient border-border/50">
            <h3 className="text-base font-bold mb-4 text-center text-muted-foreground">
              Additional
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {["React Native", "React.js", "OOP", "DSA"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-muted text-muted-foreground rounded-md border border-border text-xs font-mono"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
