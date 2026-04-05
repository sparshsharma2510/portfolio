import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Server, Cpu, Cloud } from "lucide-react";
import InteractiveCard from "./InteractiveCard";
import AnimatedIcon from "./AnimatedIcon";

const categories = [
  { icon: Monitor, title: "Frontend", skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { icon: Server, title: "Backend", skills: ["Flask", "REST APIs", "Node.js", "MySQL", "PostgreSQL"] },
  { icon: Cpu, title: "AI / ML", skills: ["PyTorch", "Deep Learning", "CNNs", "Audio ML", "OpenAI API"] },
  { icon: Cloud, title: "Cloud & DevOps", skills: ["GCP", "DigitalOcean", "Docker", "CI/CD", "Vercel"] },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative z-10" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-medium text-accent tracking-widest uppercase mb-4">Skills</p>
          <h2 className="heading-section">
            Tools of the{" "}
            <span className="gradient-text">trade.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              <InteractiveCard className="glass-panel p-8 group h-full">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <AnimatedIcon icon={cat.icon} size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{cat.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, j) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 + i * 0.1 + j * 0.05 }}
                        whileHover={{ scale: 1.08, y: -2 }}
                        className="text-sm px-4 py-2 rounded-xl bg-secondary text-secondary-foreground font-medium cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </InteractiveCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
