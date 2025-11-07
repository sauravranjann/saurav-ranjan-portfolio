import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code2 } from "lucide-react";

const CodingProfiles = () => {
  const profiles = [
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/sauravranjann",
      stats: "700+ Problems",
      color: "bg-support/10 hover:bg-support/20",
      iconBg: "bg-support",
    },
    {
      name: "GeeksforGeeks",
      url: "https://geeksforgeeks.org/user/sauravranjann",
      stats: "Active Contributor",
      color: "bg-primary/10 hover:bg-primary/20",
      iconBg: "bg-primary",
    },
    {
      name: "CodeChef",
      url: "https://codechef.com/users/cu_2ibcs3723",
      stats: "Regular Participant",
      color: "bg-support/10 hover:bg-support/20",
      iconBg: "bg-support",
    },
    {
      name: "Code360",
      url: "https://naukri.com/code360/profile/dffffff",
      stats: "Problem Solver",
      color: "bg-accent/10 hover:bg-accent/20",
      iconBg: "bg-accent",
    },
  ];

  return (
    <section id="coding-profiles" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Coding <span className="text-gradient">Profiles</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4" />
          
          <p className="text-center text-lg text-muted-foreground mb-12">
            <span className="text-2xl font-bold text-gradient">700+</span> DSA Problems Solved Across Platforms
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {profiles.map((profile, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden p-6 card-gradient border-border/50 hover:shadow-glow transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 ${profile.color} transition-all duration-300`} />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-4">
                    <div className={`p-4 rounded-full ${profile.iconBg}`}>
                      <Code2 className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-center mb-2 group-hover:text-gradient transition-colors">
                    {profile.name}
                  </h3>

                  <p className="text-sm text-center text-muted-foreground mb-4">
                    {profile.stats}
                  </p>

                  <Button
                    variant="outline"
                    className="w-full gap-2 group-hover:border-primary group-hover:text-primary transition-colors"
                    asChild
                  >
                    <a
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Profile
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
