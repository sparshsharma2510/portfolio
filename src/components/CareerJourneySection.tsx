import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";
import InteractiveCard from "./InteractiveCard";

const jobs = [
  {
    company: "Brainlabs",
    role: "UI Developer",
    period: "June 2023 – July 2024",
    highlights: [
      "Built a GPT-integrated internal web application to automate cloud infrastructure workflows, reducing manual deployment time by 40%",
      "Led migration from Vue2 to Vue3, improving performance and reducing technical debt",
      "Collaborated in an agile team environment to deliver scalable and production-ready features",
    ],
  },
  {
    company: "Zendynamix",
    role: "Software Engineer",
    period: "August 2022 – June 2023",
    highlights: [
      "Developed scalable Angular applications using NgRx and RxJS for complex state management across multiple modules",
      "Built responsive web interfaces and email templates integrated with REST APIs",
      "Engineered real-time image stream rendering (~20 FPS) with annotations using Canvas-2D API",
    ],
  },
];

const CareerJourneySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="career" className="py-32 relative z-10" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm font-medium text-accent tracking-widest uppercase mb-4">Career</p>
          <h2 className="heading-section">
            Professional{" "}
            <span className="gradient-text">journey.</span>
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-accent/30 origin-top"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          />

          <div className="space-y-12">
            {jobs.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.35 }}
                className="relative flex gap-6 md:gap-8"
              >
                <motion.div
                  className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.6 + i * 0.35 }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                >
                  <Briefcase size={20} className="text-accent" />
                </motion.div>

                <InteractiveCard className="glass-panel p-6 md:p-8 flex-1 group">
                  <div className="relative z-10">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h3 className="text-lg md:text-xl font-semibold text-foreground">{job.company}</h3>
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-accent">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-accent mb-4">{job.role}</p>

                    <ul className="space-y-3">
                      {job.highlights.map((point, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.8 + i * 0.35 + j * 0.12 }}
                          className="flex gap-3 text-sm text-muted-foreground"
                        >
                          <motion.span
                            animate={isInView ? { scale: [0, 1.3, 1] } : {}}
                            transition={{ delay: 0.9 + i * 0.35 + j * 0.12, duration: 0.3 }}
                            className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0"
                          />
                          {point}
                        </motion.li>
                      ))}
                    </ul>
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

export default CareerJourneySection;
