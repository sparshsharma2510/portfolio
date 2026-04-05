import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ExternalLink, Users, Brain, Sprout, Music } from "lucide-react";
import InteractiveCard from "./InteractiveCard";
import AnimatedIcon from "./AnimatedIcon";

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

const TubelightBorder = ({ isInView }: { isInView: boolean }) => {
  const [flickerPhase, setFlickerPhase] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    // Simulate tubelight flickering startup
    const phases = [
      { delay: 0, opacity: 0 },
      { delay: 300, opacity: 0.3 },
      { delay: 500, opacity: 0 },
      { delay: 700, opacity: 0.5 },
      { delay: 900, opacity: 0.2 },
      { delay: 1100, opacity: 0.7 },
      { delay: 1300, opacity: 0.4 },
      { delay: 1500, opacity: 1 },
    ];
    phases.forEach((phase, i) => {
      setTimeout(() => setFlickerPhase(i), phase.delay);
    });
  }, [isInView]);

  const flickerOpacities = [0, 0.3, 0, 0.5, 0.2, 0.7, 0.4, 1];
  const currentOpacity = isInView ? flickerOpacities[flickerPhase] ?? 1 : 0;

  return (
    <div
      className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-100"
      style={{
        opacity: currentOpacity,
        boxShadow: `inset 0 0 1px hsl(var(--accent) / 0.4), 0 0 15px hsl(var(--accent) / 0.1), 0 0 30px hsl(var(--accent) / 0.05)`,
        border: `1px solid hsl(var(--accent) / ${currentOpacity * 0.3})`,
      }}
    />
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative z-10" ref={ref}>
      {/* Tech grid background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--accent) / 0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--accent) / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Animated scan line */}
        <motion.div
          initial={{ y: "-100%" }}
          animate={isInView ? { y: "200%" } : {}}
          transition={{ duration: 3, delay: 0.5, ease: "linear" }}
          className="absolute left-0 right-0 h-[2px]"
          style={{
            background: "linear-gradient(90deg, transparent, hsl(var(--accent) / 0.4), transparent)",
            boxShadow: "0 0 20px hsl(var(--accent) / 0.3), 0 0 60px hsl(var(--accent) / 0.1)",
          }}
        />
        {/* Grid node dots at intersections */}
        {isInView && (
          <div className="absolute inset-0">
            {Array.from({ length: 8 }).map((_, row) =>
              Array.from({ length: 12 }).map((_, col) => (
                <motion.div
                  key={`${row}-${col}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 0.6, 0.3], scale: [0, 1.2, 1] }}
                  transition={{
                    delay: 0.8 + (row + col) * 0.05,
                    duration: 0.6,
                  }}
                  className="absolute w-1 h-1 rounded-full"
                  style={{
                    top: `${row * 60}px`,
                    left: `${col * 60}px`,
                    background: "hsl(var(--accent))",
                    boxShadow: "0 0 4px hsl(var(--accent) / 0.5)",
                  }}
                />
              ))
            )}
          </div>
        )}
      </div>

      <div className="section-container relative">
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
              className="relative"
            >
              <TubelightBorder isInView={isInView} />
              <InteractiveCard className="glass-panel p-8 group h-full">
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, hsl(239 84% 67% / 0.15), hsl(217 91% 60% / 0.15))" }}
                    >
                      <AnimatedIcon icon={project.icon} size={22} />
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: -5 }}
                      whileHover={{ x: 2 }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ExternalLink size={16} className="text-muted-foreground" />
                    </motion.div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{project.desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, j) => (
                      <motion.span
                        key={t}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.4 + i * 0.12 + j * 0.05 }}
                        className="text-xs px-3 py-1.5 rounded-lg bg-secondary text-muted-foreground font-medium"
                      >
                        {t}
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

export default ProjectsSection;
