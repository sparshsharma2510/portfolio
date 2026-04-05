import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Award, GraduationCap, Gem } from "lucide-react";
import InteractiveCard from "./InteractiveCard";

const achievements = [
  {
    icon: Gem,
    title: "Polygon BUIDLit Hackathon",
    subtitle: "$5,000 Prize Winner",
    desc: "Built Musixverse — an NFT marketplace for musicians during Polygon's global Web3 hackathon.",
    tag: "Web3",
  },
  {
    icon: Trophy,
    title: "5+ Hackathon Wins",
    subtitle: "Consistent Top Performer",
    desc: "Multiple wins across global hackathons, building production-quality MVPs in under 24 hours.",
    tag: "Competition",
  },
  {
    icon: Award,
    title: "GCP Cloud Digital Leader",
    subtitle: "Google Cloud Certified",
    desc: "Certified in cloud architecture, infrastructure, and data & ML capabilities on Google Cloud Platform.",
    tag: "Certification",
  },
  {
    icon: GraduationCap,
    title: "HD Dissertation",
    subtitle: "High Distinction Result",
    desc: "Deepfake speech detection using glottal and acoustic fusion models. Achieved High Distinction grade.",
    tag: "Research",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative z-10" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-medium text-accent tracking-widest uppercase mb-4">Experience</p>
          <h2 className="heading-section">
            Achievements &{" "}
            <span className="gradient-text">milestones.</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {achievements.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className="relative flex gap-6 md:gap-8"
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0"
                >
                  <item.icon size={20} className="text-accent" />
                </motion.div>

                <InteractiveCard className="glass-panel p-6 flex-1 group">
                  <div className="relative z-10">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-accent">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-accent mb-2">{item.subtitle}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </InteractiveCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
