import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Boxes, HeartPulse, Brain, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const featured = [
  {
    title: "NNR — Warehouse Management System",
    label: "Enterprise Logistics Backend",
    icon: Boxes,
    description:
      "Enterprise Warehouse Management System built around a distributed microservices architecture supporting order, inventory, warehouse, and shipment workflows.",
    highlights: [
      "Worked across Omni, Order, FEP, and Inventory services",
      "Developed REST APIs for backend workflows",
      "Implemented Kafka-based event communication for order creation and status updates",
      "Integrated downstream Inventory and SMS/Notification processing",
      "Implemented Redis caching for frequently accessed customer and order data",
      "Implemented EDI 945 generation after shipment confirmation",
      "Added manual re-trigger handling for failed EDI processing",
      "Configured Nginx reverse proxy routing for Spring Boot JAR services",
    ],
    tech: ["Java", "Spring Boot", "Microservices", "Kafka", "Redis", "MySQL", "MongoDB", "Nginx"],
    links: { live: "https://nnr.advatix.net/acs/login" },
    liveLabel: "Live Project",
    caseStudy: "/case-study/nnr",
  },
  {
    title: "HPNHM — National Health Mission",
    label: "Healthcare Backend Platform",
    icon: HeartPulse,
    description:
      "Healthcare platform supporting beneficiary registration, maternal healthcare, child healthcare, reporting, authentication, and mobile data collection.",
    highlights: [
      "Developed backend modules using Java and Spring Boot",
      "Built REST APIs consumed by healthcare workers",
      "Worked with PostgreSQL using Spring Data JPA and Hibernate",
      "Created AOP-based audit logging",
      "Integrated Aadhaar verification",
      "Integrated OTP authentication",
      "Worked on healthcare reporting workflows",
      "React Native used for mobile client integration",
    ],
    tech: ["Java", "Spring Boot", "PostgreSQL", "REST APIs", "Keycloak", "OAuth2", "React Native"],
    links: {
      live: "https://play.google.com/store/apps/details?id=com.hpnhm_app&pcampaignid=web_share",
    },
    liveLabel: "Live App",
  },
  {
    title: "AI Study Platform — Multimodal RAG System",
    label: "AI Backend / Retrieval System",
    icon: Brain,
    description:
      "AI-powered study assistant using Retrieval-Augmented Generation for context-aware question answering over indexed study material.",
    highlights: [
      "Built PDF ingestion pipeline",
      "Implemented document extraction and chunking",
      "Implemented vector indexing using pgvector",
      "Built semantic retrieval workflows",
      "Integrated LLM APIs with retrieved context",
    ],
    pipeline: ["PDF", "Extraction", "Chunking", "Embedding", "pgvector", "Semantic Retrieval", "LLM", "Response"],
    tech: ["Java", "Spring Boot", "PostgreSQL", "pgvector", "Spring AI", "LLM APIs"],
    links: {},
  },
];

const otherProjects = [
  {
    title: "Resume Wizard AI",
    description: "AI-powered résumé builder generating ATS-friendly résumés with dynamic templates.",
    tech: ["React", "Node.js", "LLM"],
    links: {
      live: "https://resume-wizard-ai-frontend.lovable.app/",
      github: "https://github.com/sauravranjann/Resume-Builder",
    },
  },
  {
    title: "Traffic Management System",
    description: "Intelligent signal timing using computer vision with YOLOv8 vehicle detection.",
    tech: ["Python", "OpenCV", "YOLOv8"],
    links: { github: "https://github.com/sauravranjann/Traffic_management_system_yolov8m" },
  },
  {
    title: "Data Structures Library",
    description: "Optimized C++ data structures exposed through a clean, reusable API.",
    tech: ["C++", "DSA"],
    links: { github: "https://github.com/sauravranjann/Data-Structure-Utilities" },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12" />

          <div className="space-y-6">
            {featured.map((project, index) => (
              <Card
                key={project.title}
                className="p-6 md:p-8 card-gradient border-border/50 hover:shadow-glow transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="inline-flex p-4 rounded-lg bg-primary/10 h-fit">
                    <project.icon className="w-8 h-8 text-primary" />
                  </div>

                  <div className="flex-1">
                    <Badge variant="secondary" className="mb-3 font-mono text-xs">
                      {project.label}
                    </Badge>
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-5 leading-relaxed">{project.description}</p>

                    <ul className="space-y-2 mb-5">
                      {project.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                          <span className="text-foreground/85">{h}</span>
                        </li>
                      ))}
                    </ul>

                    {project.pipeline && (
                      <div className="flex flex-wrap items-center gap-2 mb-5">
                        {project.pipeline.map((step, i) => (
                          <span key={step} className="flex items-center gap-2">
                            <span className="px-3 py-1 rounded-md border border-border bg-secondary/60 font-mono text-xs">
                              {step}
                            </span>
                            {i < project.pipeline!.length - 1 && (
                              <span className="text-primary" aria-hidden="true">→</span>
                            )}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs font-mono">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3 pt-4 border-t border-border/50">
                      {project.links.live && (
                        <Button size="sm" variant="outline" className="gap-2" asChild>
                          <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                            {project.liveLabel ?? "Live"}
                          </a>
                        </Button>
                      )}
                      {project.caseStudy && (
                        <Button size="sm" className="gap-2" asChild>
                          <Link to={project.caseStudy}>
                            <FileText className="w-4 h-4" />
                            Case Study
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Other Projects */}
          <h3 className="text-2xl font-bold mt-16 mb-6 text-center">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {otherProjects.map((project) => (
              <Card key={project.title} className="p-5 card-gradient border-border/50">
                <h4 className="font-bold mb-2">{project.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs font-mono">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.links.live && (
                    <Button size="sm" variant="outline" className="flex-1 gap-2" asChild>
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </a>
                    </Button>
                  )}
                  {project.links.github && (
                    <Button size="sm" variant="outline" className="flex-1 gap-2" asChild>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
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
