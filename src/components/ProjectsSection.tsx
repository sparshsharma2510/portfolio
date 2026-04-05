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

const SectionTubelightFlicker = ({ isInView }: { isInView: boolean }) => {
  const [flickerPhase, setFlickerPhase] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const phases = [
      { delay: 0 },
      { delay: 200 },
      { delay: 400 },
      { delay: 600 },
      { delay: 800 },
      { delay: 1000 },
      { delay: 1200 },
      { delay: 1500 },
    ];
    phases.forEach((_, i) => {
      setTimeout(() => setFlickerPhase(i), phases[i].delay);
    });
  }, [isInView]);

  const flickerOpacities = [0, 0.15, 0.03, 0.25, 0.08, 0.4, 0.15, 1];
  const currentOpacity = isInView ? flickerOpacities[flickerPhase] ?? 1 : 0;

  return (
    <>
      {/* Overall section glow overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-150 z-0"
        style={{
          opacity: currentOpacity * 0.15,
          background: `radial-gradient(ellipse at 50% 30%, hsl(var(--accent) / 0.3), transparent 70%)`,
        }}
      />
      {/* Grid illumination that flickers on */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-150 z-0"
        style={{
          opacity: currentOpacity,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--accent) / ${0.12 * currentOpacity}) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--accent) / ${0.12 * currentOpacity}) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>
      {/* Ambient top/bottom light bars */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none transition-opacity duration-100"
        style={{
          opacity: currentOpacity * 0.6,
          background: `linear-gradient(90deg, transparent, hsl(var(--accent) / 0.5), transparent)`,
          boxShadow: `0 0 20px hsl(var(--accent) / ${currentOpacity * 0.3}), 0 0 60px hsl(var(--accent) / ${currentOpacity * 0.1})`,
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-[1px] pointer-events-none transition-opacity duration-100"
        style={{
          opacity: currentOpacity * 0.4,
          background: `linear-gradient(90deg, transparent, hsl(var(--accent) / 0.3), transparent)`,
          boxShadow: `0 0 15px hsl(var(--accent) / ${currentOpacity * 0.2})`,
        }}
      />
    </>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative z-10 overflow-hidden" ref={ref}>
      {/* Tubelight flicker for the entire section */}
      <SectionTubelightFlicker isInView={isInView} />

      {/* Partial grid background (25-35% coverage) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
        <div
          className="absolute opacity-[0.08]"
          style={{
            width: "30%",
            height: "30%",
            top: "35%",
            left: "35%",
            backgroundImage: `
              linear-gradient(hsl(var(--accent) / 0.5) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--accent) / 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 100%)",
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
      </div>

      <div className="section-container relative z-10">
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
