import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, TrendingUp } from "lucide-react";

const Experience = () => {
  const metrics = [
    { value: "50,000+", label: "Users Served" },
    { value: "200+", label: "Rural Areas Covered" },
    { value: "40%", label: "Efficiency Boost" },
    { value: "10,000+", label: "Daily Records" },
  ];

  const highlights = [
    "Built HPNHM Healthcare App backend serving 50,000+ users across 200+ rural areas",
    "Improved reporting efficiency by 40% with real-time data pipelines",
    "Designed 8+ reusable React Native components, accelerating delivery by 20%",
    "Developed Spring Boot + PostgreSQL backend processing 10,000+ daily records",
    "Implemented robust authentication, validation, and reporting modules",
    "Handled deployment, API integration, and optimization for production use",
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12" />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent hidden md:block" />

            <Card className="p-8 card-gradient border-border/50 relative">
              {/* Timeline dot */}
              <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full border-4 border-background hidden md:block" />

              <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                <div className="flex items-start gap-4 mb-4 md:mb-0">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Java Backend Developer Intern</h3>
                    <p className="text-lg text-accent font-semibold mb-2">
                      Embryo Software Solution
                    </p>
                    <Badge variant="secondary">May 2025 - Present</Badge>
                  </div>
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="p-4 bg-secondary/50 rounded-lg border border-border/50 text-center"
                  >
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <TrendingUp className="w-4 h-4 text-accent" />
                      <span className="text-xl md:text-2xl font-bold text-gradient">
                        {metric.value}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>

              {/* Key Highlights */}
              <div className="space-y-3">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-accent/5 rounded-lg border border-accent/10 hover:border-accent/30 transition-colors"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <p className="text-foreground/90">{highlight}</p>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="mt-6 pt-6 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-3">Technologies Used:</p>
                <div className="flex flex-wrap gap-2">
                  {["Java", "Spring Boot", "PostgreSQL", "REST APIs", "React Native", "Git"].map((tech) => (
                    <Badge key={tech} className="bg-primary/10 text-primary border-primary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
