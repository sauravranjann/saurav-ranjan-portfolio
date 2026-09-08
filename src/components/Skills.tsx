import { Card } from "@/components/ui/card";
import { Code2, Server, Database, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      skills: [
        { name: "Java", level: 92 },
        { name: "C++", level: 85 },
        { name: "SQL", level: 88 },
      ],
    },
    {
      title: "Frameworks & Backend",
      icon: Server,
      skills: [
        { name: "Spring Boot", level: 90 },
        { name: "Hibernate/JPA", level: 86 },
        { name: "REST APIs", level: 90 },
        { name: "React Native", level: 82 },
      ],
    },
    {
      title: "Databases & Caching",
      icon: Database,
      skills: [
        { name: "PostgreSQL", level: 88 },
        { name: "MySQL", level: 86 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 78 },
      ],
    },
    {
      title: "Architecture & DevOps",
      icon: Wrench,
      skills: [
        { name: "Microservices", level: 85 },
        { name: "OAuth2 / Keycloak", level: 80 },
        { name: "Docker", level: 78 },
        { name: "Kafka", level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={categoryIndex}
                className="p-6 card-gradient border-border/50 animate-fade-up"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-sm">{skill.name}</span>
                        <span className="text-sm text-muted-foreground font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Skills */}
          <Card className="mt-6 p-6 card-gradient border-border/50">
            <h3 className="text-lg font-bold mb-4 text-center">Additional Expertise</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {["OOP", "DSA", "API Integration", "Postman", "APIDog", "VS Code", "Copilot", "Prompt Engineering", "Multithreading", "Optimization", "Git", "GitHub"].map(
                (skill, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-accent/10 text-accent rounded-lg border border-accent/20 text-sm font-medium hover:bg-accent/20 transition-colors"
                  >
                    {skill}
                  </div>
                )
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
