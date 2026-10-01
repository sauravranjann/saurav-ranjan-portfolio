import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code2 } from "lucide-react";
import { LINKS } from "@/data/profile";

const CodingProfiles = () => {
  const profiles = [
    { name: "LeetCode", url: LINKS.leetcode, stats: "700+ Problems" },
    { name: "GeeksforGeeks", url: LINKS.gfg, stats: "Active Contributor" },
    { name: "CodeChef", url: LINKS.codechef, stats: "Regular Participant" },
    { name: "Code360", url: LINKS.code360, stats: "Problem Solver" },
    { name: "Codolio", url: LINKS.codolio, stats: "Aggregated Profile" },
  ];

  return (
    <section id="coding" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Coding <span className="text-gradient">Profiles</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4" />

          <p className="text-center text-muted-foreground mb-12">
            <span className="text-xl font-bold text-primary">700+</span> DSA problems solved across platforms
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {profiles.map((profile, index) => (
              <Card
                key={profile.name}
                className="p-6 card-gradient border-border/50 hover:shadow-glow transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-center mb-1">{profile.name}</h3>
                <p className="text-xs text-center text-muted-foreground mb-4">{profile.stats}</p>

                <Button variant="outline" size="sm" className="w-full gap-2" asChild>
                  <a href={profile.url} target="_blank" rel="noopener noreferrer">
                    Visit
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
