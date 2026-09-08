import { Mail, Phone, Linkedin, Github, Heart, Code2 } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Mail, href: "mailto:sauravranjann@gmail.com", label: "Email" },
    { icon: Phone, href: "tel:+919508604255", label: "Phone" },
    { icon: Linkedin, href: "https://linkedin.com/in/saurav-ranjann", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/sauravranjann", label: "GitHub" },
  ];

  const codingProfiles = [
    { name: "LeetCode", href: "https://leetcode.com/u/sauravranjann" },
    { name: "GFG", href: "https://geeksforgeeks.org/user/sauravranjann" },
    { name: "CodeChef", href: "https://codechef.com/users/cu_2ibcs3723" },
    { name: "Code360", href: "https://naukri.com/code360/profile/dffffff" },
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Coding Profiles", href: "#coding-profiles" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-secondary/30 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">Saurav Ranjan</h3>
            <p className="text-muted-foreground mb-4">
              Java Backend Engineer specializing in Spring Boot & Microservices.
              Building reliable, scalable systems.
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
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>
                <a href="mailto:sauravranjann@gmail.com" className="hover:text-primary transition-colors">
                  sauravranjann@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+919508604255" className="hover:text-primary transition-colors">
                  +91-9508604255
                </a>
              </p>
              <p className="text-sm mt-4 font-semibold text-primary">
                Open to Java Backend & Software Engineering roles
              </p>
              <div className="flex gap-2 mt-4 flex-wrap">
                {codingProfiles.map((profile, index) => (
                  <a
                    key={index}
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-2 py-1 bg-accent/10 hover:bg-accent/20 text-accent rounded border border-accent/20 transition-colors"
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
            Built with <Heart className="w-4 h-4 text-accent fill-accent" /> using React & Spring Boot
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
