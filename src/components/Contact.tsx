import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, Download, Code2, Briefcase, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { RESUME_URL, LINKS } from "@/data/profile";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: LINKS.email,
      href: `mailto:${LINKS.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: LINKS.phone,
      href: LINKS.phoneTel,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "saurav-ranjann",
      href: LINKS.linkedin,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "sauravranjann",
      href: LINKS.github,
    },
    {
      icon: Code2,
      label: "Codolio",
      value: "sauravranjan",
      href: LINKS.codolio,
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4" />
          
          <p className="text-center text-lg text-muted-foreground mb-12">
            Open to Backend Engineer / Java Developer opportunities
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info & CTAs */}
            <div className="space-y-6">
              <Card className="p-8 card-gradient border-border/50">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-3">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 p-3.5 bg-secondary/50 rounded-lg hover:bg-accent/10 hover:border-accent/20 border border-transparent transition-all group"
                    >
                      <div className="p-2.5 bg-primary/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                        <info.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{info.label}</p>
                        <p className="font-medium text-sm md:text-base">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="pt-6 mt-6 border-t border-border/50">
                  <p className="text-sm font-semibold mb-3 text-foreground/90">Quick Actions</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    <Button asChild size="sm" className="gap-1.5">
                      <a href={`mailto:${LINKS.email}?subject=Hiring%20Inquiry%20-%20Java%20Backend%20Engineer`}>
                        <Briefcase className="w-4 h-4" />
                        Hire Me
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="outline" className="gap-1.5">
                      <a href={`mailto:${LINKS.email}`}>
                        <Mail className="w-4 h-4" />
                        Email Me
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="outline" className="gap-1.5">
                      <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                        <Download className="w-4 h-4" />
                        Resume
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="ghost" className="gap-1.5">
                      <a href={LINKS.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="ghost" className="gap-1.5">
                      <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="ghost" className="gap-1.5">
                      <a href={LINKS.codolio} target="_blank" rel="noopener noreferrer">
                        <Code2 className="w-4 h-4" />
                        Codolio
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>

              <Button asChild size="lg" className="w-full gap-2">
                <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5" />
                  Download Resume (PDF)
                </a>
              </Button>
            </div>

            {/* Contact Form */}
            <Card className="p-8 card-gradient border-border/50">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={6}
                    className="bg-background/50 resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
