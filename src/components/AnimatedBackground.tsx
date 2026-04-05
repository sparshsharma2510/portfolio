import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

// Orion constellation with accurate star positions (CSS-reference based)
// Normalized to a container: shoulders top, belt middle, knees bottom
const orionConstellation = {
  name: "Orion",
  offset: { x: 0.08, y: 0.08 },
  stars: [
    // Shoulders
    { x: 0.200, y: 0.150, size: 1.5, color: "rgba(255, 204, 204, 0.7)" },  // Betelgeuse (reddish)
    { x: 0.550, y: 0.160, size: 1.25, color: "rgba(255, 255, 255, 0.6)" }, // Bellatrix
    // Belt
    { x: 0.275, y: 0.300, size: 1, color: "rgba(255, 255, 255, 0.55)" },  // Alnitak
    { x: 0.375, y: 0.290, size: 1, color: "rgba(255, 255, 255, 0.55)" },  // Alnilam
    { x: 0.475, y: 0.280, size: 1, color: "rgba(255, 255, 255, 0.55)" },  // Mintaka
    // Knees
    { x: 0.175, y: 0.475, size: 1.5, color: "rgba(204, 255, 255, 0.7)" },   // Rigel (bluish)
    { x: 0.500, y: 0.490, size: 1.25, color: "rgba(255, 255, 255, 0.6)" }, // Saiph
    // Sword (below belt)
    { x: 0.350, y: 0.360, size: 0.75, color: "rgba(255, 255, 255, 0.4)" },
    { x: 0.360, y: 0.400, size: 0.75, color: "rgba(255, 255, 255, 0.35)" },
  ],
  lines: [
    [0, 1],   // shoulder to shoulder
    [0, 2],   // betelgeuse to belt
    [1, 4],   // bellatrix to belt
    [2, 3], [3, 4], // belt
    [2, 5],   // belt to rigel
    [4, 6],   // belt to saiph
    [3, 7], [7, 8], // sword
  ],
};

const ursaMajor = {
  name: "Ursa Major",
  offset: { x: 0.55, y: 0.05 },
  stars: [
    // Bowl (Dubhe, Merak, Phecda, Megrez)
    { x: 0.10, y: 0.05, size: 1, color: "rgba(255, 255, 255, 0.5)" },   // Dubhe (top-right of bowl)
    { x: 0.15, y: 0.15, size: 1, color: "rgba(255, 255, 255, 0.5)" },   // Merak (bottom-right)
    { x: 0.05, y: 0.20, size: 0.85, color: "rgba(255, 255, 255, 0.45)" }, // Phecda (bottom-left)
    { x: 0.00, y: 0.10, size: 0.85, color: "rgba(255, 255, 255, 0.45)" }, // Megrez (top-left, handle junction)
    // Handle (Alioth, Mizar, Alkaid)
    { x: -0.08, y: 0.07, size: 0.85, color: "rgba(255, 255, 255, 0.45)" }, // Alioth
    { x: -0.18, y: 0.05, size: 0.85, color: "rgba(255, 255, 255, 0.45)" }, // Mizar
    { x: -0.25, y: 0.00, size: 0.85, color: "rgba(255, 255, 255, 0.45)" }, // Alkaid
  ],
  lines: [
    [0, 1], [1, 2], [2, 3], [3, 0], // bowl
    [3, 4], [4, 5], [5, 6],          // handle
  ],
};

const aquarius = {
  name: "Aquarius",
  offset: { x: 0.70, y: 0.55 },
  stars: [
    { x: 0.0, y: 0.0, size: 1, color: "rgba(255, 255, 255, 0.5)" },
    { x: 0.03, y: 0.01, size: 0.9, color: "rgba(255, 255, 255, 0.45)" },
    { x: 0.05, y: 0.0, size: 0.9, color: "rgba(255, 255, 255, 0.45)" },
    { x: 0.04, y: 0.03, size: 0.9, color: "rgba(255, 255, 255, 0.45)" },
    { x: 0.06, y: 0.05, size: 0.75, color: "rgba(255, 255, 255, 0.4)" },
    { x: 0.08, y: 0.07, size: 0.75, color: "rgba(255, 255, 255, 0.4)" },
    { x: 0.10, y: 0.06, size: 0.75, color: "rgba(255, 255, 255, 0.4)" },
    { x: 0.10, y: 0.09, size: 0.75, color: "rgba(255, 255, 255, 0.4)" },
  ],
  lines: [
    [0, 1], [1, 2], [1, 3], [3, 4], [4, 5], [5, 6], [5, 7],
  ],
};

const allConstellations = [orionConstellation, ursaMajor, aquarius];


const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);


    const drawConstellations = () => {
      const w = canvas.width;
      const h = canvas.height;

      allConstellations.forEach((constellation) => {
        const ox = constellation.offset.x * w;
        const oy = constellation.offset.y * h;

        // Draw lines
        constellation.lines.forEach(([a, b]) => {
          const starA = constellation.stars[a];
          const starB = constellation.stars[b];
          const ax = ox + starA.x * w;
          const ay = oy + starA.y * h;
          const bx = ox + starB.x * w;
          const by = oy + starB.y * h;

          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(bx, by);
          ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
          ctx.lineWidth = 0.5;
          ctx.stroke();
        });

        // Draw stars with their specific colors and sizes
        constellation.stars.forEach((star) => {
          const sx = ox + star.x * w;
          const sy = oy + star.y * h;

          // Glow
          ctx.beginPath();
          ctx.arc(sx, sy, star.size * 3, 0, Math.PI * 2);
          const glow = ctx.createRadialGradient(sx, sy, 0, sx, sy, star.size * 3);
          glow.addColorStop(0, star.color.replace(/[\d.]+\)$/, "0.2)"));
          glow.addColorStop(1, "transparent");
          ctx.fillStyle = glow;
          ctx.fill();

          // Star dot
          ctx.beginPath();
          ctx.arc(sx, sy, star.size, 0, Math.PI * 2);
          ctx.fillStyle = star.color;
          ctx.fill();
        });
      });
    };


    const animate = (t: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawConstellations();

      // Spawn comets sparingly (every 3-6 seconds)
      if (t - lastCometSpawn > 3000 + Math.random() * 3000) {
        if (comets.length < 3) {
          spawnComet();
          lastCometSpawn = t;
        }
      }

      drawComets();

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <canvas ref={canvasRef} className="absolute inset-0 opacity-80" style={{ pointerEvents: "none" }} />

      {/* Subtle gradient orbs — reduced opacity */}
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
