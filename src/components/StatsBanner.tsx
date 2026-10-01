import { Boxes, Briefcase, Code2, Zap } from "lucide-react";

const stats = [
  {
    icon: Boxes,
    label: "Distributed Ecosystem",
    value: "13+",
    suffix: "Microservices",
    detail: "Java • Spring Boot JARs",
  },
  {
    icon: Briefcase,
    label: "Production Experience",
    value: "2 Years",
    suffix: "Backend",
    detail: "Embryo Software • Advatix Logistics",
  },
  {
    icon: Zap,
    label: "Event Architecture",
    value: "Kafka",
    suffix: "& Redis",
    detail: "Asynchronous • In-Memory Caching",
  },
  {
    icon: Code2,
    label: "Problem Solving",
    value: "700+",
    suffix: "DSA Solved",
    detail: "LeetCode • GFG • CodeChef",
  },
];

const StatsBanner = () => {
  return (
    <section className="relative z-20 py-8 bg-card/60 border-y border-border/50 backdrop-blur-md">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-secondary/30 border border-border/40 hover:border-primary/40 hover:bg-secondary/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <item.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="font-mono text-xs text-muted-foreground">{item.label}</span>
              </div>
              <p className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                {item.value}{" "}
                <span className="text-xs sm:text-sm font-mono font-medium text-primary">
                  {item.suffix}
                </span>
              </p>
              <p className="font-mono text-[11px] text-muted-foreground/80 mt-1 truncate">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
