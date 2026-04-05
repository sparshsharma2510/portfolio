import { motion } from "framer-motion";
import ConstellationCards from "./ConstellationCards";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" style={{
      background: "linear-gradient(180deg, #030510 0%, #060a1a 30%, #0a0e24 60%, #050816 100%)"
    }}>
      {/* CSS Constellation Cards */}
      <ConstellationCards />

      {/* Subtle gradient orbs — very low opacity */}
      <motion.div
        animate={{ x: [0, 100, -50, 0], y: [0, -80, 60, 0], scale: [1, 1.2, 0.9, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full blur-[140px] opacity-[0.06]"
        style={{ background: "hsl(var(--accent))" }}
      />
      <motion.div
        animate={{ x: [0, -120, 80, 0], y: [0, 60, -100, 0], scale: [1, 0.8, 1.1, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[50%] right-[10%] w-[400px] h-[400px] rounded-full blur-[130px] opacity-[0.04]"
        style={{ background: "hsl(var(--accent-blue))" }}
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
          background: "radial-gradient(ellipse at center, transparent 50%, #030510 100%)",
          opacity: 0.5,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
