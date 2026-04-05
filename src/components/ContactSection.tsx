import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import InteractiveCard from "./InteractiveCard";
import AnimatedIcon from "./AnimatedIcon";

const links = [
  { icon: Mail, label: "Email", href: "mailto:sparsh@example.com", display: "sparsh@example.com" },
  { icon: Github, label: "GitHub", href: "https://github.com/sparshsharma", display: "github.com/sparshsharma" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/sparshsharma", display: "linkedin.com/in/sparshsharma" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 relative z-10" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm font-medium text-accent tracking-widest uppercase mb-4">Contact</p>
          <h2 className="heading-section mb-6">
            Let's build something{" "}
            <span className="gradient-text">together.</span>
          </h2>
          <p className="text-body">
            Have a project in mind or want to collaborate? I'm always open to interesting conversations and opportunities.
          </p>
        </motion.div>

        <div className="max-w-lg mx-auto space-y-4">
          {links.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="block">
                <InteractiveCard className="glass-panel p-5 group">
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <AnimatedIcon icon={link.icon} size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{link.label}</p>
                        <p className="text-xs text-muted-foreground">{link.display}</p>
                      </div>
                    </div>
                    <motion.div whileHover={{ x: 3, y: -3 }}>
                      <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-accent transition-colors" />
                    </motion.div>
                  </div>
                </InteractiveCard>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-32 pb-8"
        >
          <p className="text-sm text-muted-foreground">
            Designed & built by <span className="text-foreground font-medium">Sparsh Sharma</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
