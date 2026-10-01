import { Mail, Phone, Linkedin, Github, Heart, Code2 } from "lucide-react";
import { LINKS } from "@/data/profile";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: LINKS.github, label: "GitHub" },
    { icon: Linkedin, href: LINKS.linkedin, label: "LinkedIn" },
    { icon: Code2, href: LINKS.codolio, label: "Codolio" },
    { icon: Mail, href: `mailto:${LINKS.email}`, label: "Email" },
  ];

  const codingProfiles = [
    { name: "LeetCode", href: LINKS.leetcode },
    { name: "GFG", href: LINKS.gfg },
    { name: "CodeChef", href: LINKS.codechef },
    { name: "Code360", href: LINKS.code360 },
    { name: "Codolio", href: LINKS.codolio },
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Coding", href: "#coding" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-secondary/30 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-1">Saurav Ranjan</h3>
            <p className="text-base font-semibold text-primary mb-1">
              Java Backend Engineer
            </p>
            <p className="font-mono text-xs text-muted-foreground mb-4">
              Java • Spring Boot • Microservices
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
                >
                  <link.icon className="w-5 h-5 text-primary" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact & Profiles</h4>
            <div className="space-y-2 text-muted-foreground text-sm">
              <p>
                <a href={`mailto:${LINKS.email}`} className="hover:text-primary transition-colors">
                  {LINKS.email}
                </a>
              </p>
              <p>
                <a href={LINKS.phoneTel} className="hover:text-primary transition-colors">
                  {LINKS.phone}
                </a>
              </p>
              <p className="text-sm mt-3 font-semibold text-primary">
                Open to Backend Engineer / Java Developer opportunities.
              </p>
              <div className="flex gap-2 mt-4 flex-wrap">
                {codingProfiles.map((profile, index) => (
                  <a
                    key={index}
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-2.5 py-1 bg-accent/10 hover:bg-accent/20 text-accent rounded border border-accent/20 transition-colors"
                  >
                    {profile.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Saurav Ranjan. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-accent fill-accent" /> for high-performance backend engineering
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
