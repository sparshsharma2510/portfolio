import { motion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 80, -40, 0], y: [0, -60, 40, 0] }}
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
      </div>

      {/* Floating glass elements */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[10%] md:right-[15%] glass-panel p-4 hidden md:block"
      >
        <code className="text-xs text-muted-foreground font-mono">
          <span className="text-accent">const</span> model = <span className="text-accent-blue">await</span> train(data);
        </code>
      </motion.div>

      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[25%] left-[8%] md:left-[12%] glass-panel p-3 hidden md:block"
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-xs text-muted-foreground">AI Pipeline Active</span>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm md:text-base font-medium text-muted-foreground mb-6 tracking-widest uppercase"
          >
            Full Stack Engineer · AI Researcher · Hackathon Winner
          </motion.p>

          <h1 className="heading-display text-5xl md:text-7xl lg:text-8xl mb-6">
            Sparsh{" "}
            <span className="gradient-text">Sharma</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light max-w-2xl mx-auto mb-10"
          >
            I help you bring{" "}
            <span className="text-foreground font-medium">Ideas to life.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#projects" className="btn-primary">
              View Projects <ExternalLink size={16} />
            </a>
            <a href="#contact" className="btn-ghost">
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
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
