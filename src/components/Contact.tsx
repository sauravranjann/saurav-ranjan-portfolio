import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, Download } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

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
      value: "sauravranjann@gmail.com",
      href: "mailto:sauravranjann@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9508604255",
      href: "tel:+919508604255",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "saurav-ranjann",
      href: "https://linkedin.com/in/saurav-ranjann",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "sauravranjann",
      href: "https://github.com/sauravranjann",
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
            Open to full-time roles in Mobile & Backend Engineering
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-8 card-gradient border-border/50">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg hover:bg-accent/10 hover:border-accent/20 border border-transparent transition-all group"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                        <info.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              <Button asChild size="lg" className="w-full gap-2 shadow-glow">
                <a href="https://drive.google.com/file/d/17e-ngD_bcSFeV0eeAAnVBlxBoNzcBldm/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5" />
                  Download Full Résumé (PDF)
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
