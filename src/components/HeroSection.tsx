import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";
import { useRef } from "react";

const nameLetters = "Sparsh".split("");
const lastNameLetters = "Sharma".split("");

const letterVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -90, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      delay: 0.5 + i * 0.06,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background blobs */}
      <motion.div className="absolute inset-0 overflow-hidden" style={{ y: backgroundY }}>
        <motion.div
          animate={{ x: [0, 80, -40, 0], y: [0, -60, 40, 0], scale: [1, 1.1, 0.95, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-30"
          style={{ background: "hsl(var(--accent))" }}
        />
        <motion.div
          animate={{ x: [0, -100, 60, 0], y: [0, 50, -80, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[20%] w-[400px] h-[400px] rounded-full blur-[100px] opacity-20"
          style={{ background: "hsl(var(--accent-blue))" }}
        />
        <motion.div
          animate={{ x: [0, 60, -80, 0], y: [0, -40, 70, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[15%] right-[15%] w-[350px] h-[350px] rounded-full blur-[100px] opacity-20"
          style={{ background: "hsl(var(--accent))" }}
        />
        <motion.div
          animate={{ x: [0, -50, 90, 0], y: [0, 70, -30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[60%] left-[60%] w-[300px] h-[300px] rounded-full blur-[80px] opacity-15"
          style={{ background: "hsl(var(--accent-blue))" }}
        />
      </motion.div>

      {/* Floating glass elements */}
      <motion.div
        animate={{ y: [-8, 8, -8], rotate: [-1, 1, -1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[10%] md:right-[15%] glass-panel p-4 hidden md:block"
      >
        <code className="text-xs text-muted-foreground font-mono">
          <span className="text-accent">const</span> model = <span className="text-accent-blue">await</span> train(data);
        </code>
      </motion.div>

      <motion.div
        animate={{ y: [10, -10, 10], rotate: [1, -1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[25%] left-[8%] md:left-[12%] glass-panel p-3 hidden md:block"
      >
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-green-400"
          />
          <span className="text-xs text-muted-foreground">AI Pipeline Active</span>
        </div>
      </motion.div>

      {/* Main content with parallax */}
      <motion.div
        className="section-container relative z-10 text-center"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm md:text-base font-medium text-muted-foreground mb-6 tracking-widest uppercase"
          >
            Full Stack Engineer · AI Researcher · Hackathon Winner
          </motion.p>

          {/* Animated calligraphy name */}
          <h1 className="heading-display text-5xl md:text-7xl lg:text-8xl mb-6" style={{ perspective: "600px" }}>
            <span className="inline-flex">
              {nameLetters.map((letter, i) => (
                <motion.span
                  key={`first-${i}`}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{
                    scale: 1.15,
                    color: "hsl(239 84% 67%)",
                    transition: { duration: 0.2 },
                  }}
                  className="inline-block cursor-default"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
            <span className="inline-block w-[0.3em]" />
            <span className="inline-flex gradient-text">
              {lastNameLetters.map((letter, i) => (
                <motion.span
                  key={`last-${i}`}
                  custom={i + nameLetters.length}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{
                    scale: 1.15,
                    transition: { duration: 0.2 },
                  }}
                  className="inline-block cursor-default"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Animated underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-6 h-[2px] w-32 origin-left"
            style={{ background: "var(--gradient-accent)" }}
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light max-w-2xl mx-auto mb-10"
          >
            I help you bring{" "}
            <motion.span
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="text-foreground font-medium"
            >
              Ideas to life.
            </motion.span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#projects"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              View Projects <ExternalLink size={16} />
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-ghost"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={20} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
