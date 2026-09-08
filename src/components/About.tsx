import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Users } from "lucide-react";

const About = () => {
  const achievements = [
    { icon: Award, text: "40% Merit Scholarship" },
    { icon: Users, text: "Organized 10+ Coding Events" },
    { icon: GraduationCap, text: "Class Representative (3 Semesters)" },
  ];

  const skills = [
    "Java", "Spring Boot", "Microservices", "REST APIs",
    "Kafka", "Redis", "MySQL", "PostgreSQL", "MongoDB",
    "Keycloak", "OAuth2", "Docker", "Hibernate/JPA",
    "React Native", "Git", "GitHub", "Postman", "DSA", "OOP"
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
              Saurav Ranjan is a Java Backend Engineer skilled in Spring Boot, microservices, and REST API design. 
              He has hands-on experience building secure, scalable backend systems for healthcare and AI-driven 
              applications, with strong foundations in OOP, DSA, SQL/NoSQL databases, and DevOps tooling.
            </p>

            <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
              <GraduationCap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Chandigarh University</h3>
                <p className="text-muted-foreground">
                  B.E. Computer Science Engineering • 2021-2025
                </p>
                <p className="text-accent font-semibold mt-1">CGPA: 8.08</p>
              </div>
            </div>
          </Card>

          {/* Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="p-6 card-gradient border-border/50 hover:shadow-glow transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <achievement.icon className="w-8 h-8 text-accent mb-3" />
                <p className="text-sm font-medium">{achievement.text}</p>
              </Card>
            ))}
          </div>

          {/* Tech Stack */}
          <Card className="p-8 card-gradient border-border/50">
            <h3 className="text-2xl font-bold mb-6 text-center">Tech Stack</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
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
