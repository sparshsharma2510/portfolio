import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Users, Brain, Sprout, Music } from "lucide-react";

const projects = [
  {
    icon: Users,
    title: "Fusion6 EMS",
    desc: "Full-scale event management system used by businesses in Perth. Handles 100+ customers with complex scheduling, role management, and real-time dashboards. Built independently from scratch.",
    tech: ["Next.js", "Tailwind", "AuthJS", "MySQL", "DigitalOcean"],
    accent: "from-accent to-accent-blue",
  },
  {
    icon: Brain,
    title: "Deepfake Speech Detection",
    desc: "Research-grade deepfake detection model using glottal + acoustic fusion architecture. Improved accuracy and computational efficiency over baselines. Achieved High Distinction for dissertation.",
    tech: ["Python", "PyTorch", "Librosa", "Deep Learning"],
    accent: "from-accent-blue to-accent",
  },
  {
    icon: Sprout,
    title: "Soil Matters",
    desc: "AI-powered crop recommendation system built in 24 hours during a hackathon. Analyzes soil data and climate conditions to recommend optimal crops. Won first place.",
    tech: ["Flask", "OpenAI API", "Python", "React"],
    accent: "from-accent to-accent-blue",
  },
  {
    icon: Music,
    title: "Musixverse / Musomatic",
    desc: "NFT marketplace for musicians built during Polygon BUIDLit hackathon ($5K prize). Led UI architecture and frontend engineering for the decentralized music platform.",
    tech: ["React", "Solidity", "Web3.js", "Polygon"],
    accent: "from-accent-blue to-accent",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-medium text-accent tracking-widest uppercase mb-4">Projects</p>
          <h2 className="heading-section">
            Things I've{" "}
            <span className="gradient-text">built.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
              className="group relative glass-panel p-8 hover:scale-[1.02] transition-all duration-500"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "radial-gradient(400px circle at 50% 50%, hsl(239 84% 67% / 0.06), transparent 60%)",
                }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.accent} bg-opacity-10 flex items-center justify-center`}
                    style={{ background: `linear-gradient(135deg, hsl(239 84% 67% / 0.15), hsl(217 91% 60% / 0.15))` }}
                  >
                    <project.icon size={22} className="text-accent" />
                  </div>
                  <ExternalLink size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{project.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1.5 rounded-lg bg-secondary text-muted-foreground font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
