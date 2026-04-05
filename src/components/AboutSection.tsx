import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Brain, Zap } from "lucide-react";
import InteractiveCard from "./InteractiveCard";
import AnimatedIcon from "./AnimatedIcon";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Builder",
    desc: "Production-grade systems from frontend to deployment. I build things that scale.",
  },
  {
    icon: Brain,
    title: "AI Researcher",
    desc: "Deep learning models, fusion architectures, and real-world ML pipelines.",
  },
  {
    icon: Zap,
    title: "Hackathon Champion",
    desc: "5+ wins across global hackathons. I ship fast under pressure.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative z-10" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-medium text-accent tracking-widest uppercase mb-4">About</p>
          <h2 className="heading-section mb-6">
            Building at the intersection of<br />
            <span className="gradient-text">engineering & intelligence.</span>
          </h2>
          <p className="text-body max-w-2xl">
            I'm a full stack engineer with deep roots in AI research. I don't just build interfaces — 
            I architect complete systems, from neural network pipelines to production-ready web platforms. 
            My work spans hackathon-winning prototypes to enterprise tools handling hundreds of users.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
            >
              <InteractiveCard className="glass-panel p-8 group h-full">
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                    <AnimatedIcon icon={item.icon} size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </InteractiveCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
