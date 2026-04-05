import { motion } from "framer-motion";
import ConstellationCards from "./ConstellationCards";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* CSS Constellation Cards */}
      <ConstellationCards />

      {/* Subtle gradient orbs */}
      <motion.div
        animate={{ x: [0, 100, -50, 0], y: [0, -80, 60, 0], scale: [1, 1.2, 0.9, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full blur-[140px] opacity-[0.08]"
        style={{ background: "hsl(var(--accent))" }}
      />
      <motion.div
        animate={{ x: [0, -120, 80, 0], y: [0, 60, -100, 0], scale: [1, 0.8, 1.1, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[50%] right-[10%] w-[400px] h-[400px] rounded-full blur-[130px] opacity-[0.05]"
        style={{ background: "hsl(var(--accent-blue))" }}
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.03, 0.07, 0.03] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[200px]"
        style={{ background: "hsl(var(--accent))" }}
      />

      {/* Noise grain */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, hsl(var(--background)) 100%)",
          opacity: 0.6,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
