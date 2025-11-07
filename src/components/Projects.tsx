import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Smartphone, Brain, Database } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "HPNHM Healthcare App",
      description: "Public health reporting for mothers & children. Used by health workers across the state with real-time data pipelines.",
      icon: Smartphone,
      metrics: ["50,000+ Active Users", "200+ Rural Areas", "40% Faster Reporting", "10,000+ Daily Records"],
      tech: ["React Native", "Spring Boot", "PostgreSQL"],
      links: {
        live: "https://play.google.com/store/apps/details?id=com.hpnhm_app&hl=en_IN",
      },
      iconBg: "bg-primary",
    },
    {
      title: "Resume Wizard AI",
      description: "AI-powered résumé builder using React, Node.js, and prompt engineering. Generates ATS-friendly résumés with dynamic templates.",
      icon: Brain,
      metrics: ["Full MERN Stack", "LLM Integration", "Component Logic", "Template Engine"],
      tech: ["React", "Node.js", "LLM", "Prompt Engineering"],
      links: {
        live: "https://resume-wizard-ai-frontend.lovable.app/",
        github: "https://github.com/sauravranjann/Resume-Builder",
      },
      iconBg: "bg-primary",
    },
    {
      title: "Traffic Management System",
      description: "Intelligent signal timing using AI computer vision. Dynamic signal control with YOLOv8 for real-time vehicle detection.",
      icon: Brain,
      metrics: ["30% Wait Time Reduction", "80% Detection Accuracy", "1,000+ Test Scenarios"],
      tech: ["Python", "OpenCV", "YOLOv8", "AI/ML"],
      links: {
        github: "https://github.com/sauravranjann/Traffic_management_system_yolov8m",
      },
      iconBg: "bg-accent",
    },
    {
      title: "Data Structures Library",
      description: "4+ optimized data structures with clean API. C++ implementations with ~30% faster lookups.",
      icon: Database,
      metrics: ["4+ Data Structures", "~30% Efficiency Gains", "Clean API", "10+ Developers Using"],
      tech: ["C++", "DSA", "Templates", "STL"],
      links: {
        github: "https://github.com/sauravranjann/Data-Structure-Utilities",
      },
      iconBg: "bg-support",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden p-6 card-gradient border-border/50 hover:shadow-glow transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon with gradient background */}
                <div className={`inline-flex p-4 rounded-lg ${project.iconBg} mb-4`}>
                  <project.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="space-y-2 mb-4">
                  {project.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs"
                    >
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span className="text-foreground/80 font-medium">{metric}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs font-mono"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2 mt-auto pt-4 border-t border-border/50">
                  {project.links.live && (
                    <Button size="sm" variant="outline" className="flex-1 gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </Button>
                  )}
                  {project.links.github && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 gap-2"
                      asChild
                    >
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="https://github.com/sauravranjann" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
