import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";
import { useRef } from "react";
import CalligraphyName from "./CalligraphyName";

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
      {/* Parallax background blobs — reduced blue, lower opacity */}
      <motion.div className="absolute inset-0 overflow-hidden" style={{ y: backgroundY }}>
        <motion.div
          animate={{ x: [0, 80, -40, 0], y: [0, -60, 40, 0], scale: [1, 1.1, 0.95, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[140px] opacity-10"
          style={{ background: "hsl(var(--accent))" }}
        />
        <motion.div
          animate={{ x: [0, -100, 60, 0], y: [0, 50, -80, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[20%] w-[300px] h-[300px] rounded-full blur-[120px] opacity-[0.06]"
          style={{ background: "hsl(var(--accent-blue))" }}
        />
        <motion.div
          animate={{ x: [0, 60, -80, 0], y: [0, -40, 70, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[15%] right-[15%] w-[250px] h-[250px] rounded-full blur-[100px] opacity-[0.07]"
          style={{ background: "hsl(var(--accent))" }}
        />
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
            className="text-sm md:text-base font-medium text-muted-foreground mb-8 tracking-widest uppercase"
          >
            Full Stack Engineer · AI Researcher · Hackathon Winner
          </motion.p>

          <div className="mb-8">
            <CalligraphyName />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light max-w-2xl mx-auto mb-10"
          >
            I help you bring{" "}
            <motion.span
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 3, duration: 0.6 }}
              className="text-foreground font-medium"
            >
              Ideas to life.
            </motion.span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 0.6 }}
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
        transition={{ delay: 3.2, duration: 0.6 }}
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
