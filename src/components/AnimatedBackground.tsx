import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

// Constellation data: star positions and connections
// Coordinates normalized to 0-1 range, will be scaled to canvas
const constellations = [
  {
    name: "Orion",
    offset: { x: 0.08, y: 0.1 },
    stars: [
      { x: 0.05, y: 0.0 },
      { x: 0.12, y: 0.0 },
      { x: 0.07, y: 0.04 },
      { x: 0.10, y: 0.04 },
      { x: 0.06, y: 0.06 },
      { x: 0.085, y: 0.06 },
      { x: 0.11, y: 0.06 },
      { x: 0.04, y: 0.10 },
      { x: 0.13, y: 0.10 },
    ],
    lines: [
      [0, 2], [1, 3], [2, 3], [2, 4], [3, 6],
      [4, 5], [5, 6], [4, 7], [6, 8],
    ],
  },
  {
    name: "Ursa Major",
    offset: { x: 0.55, y: 0.05 },
    stars: [
      { x: 0.0, y: 0.04 },
      { x: 0.03, y: 0.0 },
      { x: 0.07, y: 0.01 },
      { x: 0.09, y: 0.04 },
      { x: 0.12, y: 0.05 },
      { x: 0.15, y: 0.03 },
      { x: 0.17, y: 0.06 },
    ],
    lines: [
      [0, 1], [1, 2], [2, 3], [3, 0], [3, 4], [4, 5], [5, 6],
    ],
  },
  {
    name: "Aquarius",
    offset: { x: 0.15, y: 0.6 },
    stars: [
      { x: 0.0, y: 0.0 },
      { x: 0.03, y: 0.01 },
      { x: 0.05, y: 0.0 },
      { x: 0.04, y: 0.03 },
      { x: 0.06, y: 0.05 },
      { x: 0.08, y: 0.07 },
      { x: 0.10, y: 0.06 },
      { x: 0.10, y: 0.09 },
    ],
    lines: [
      [0, 1], [1, 2], [1, 3], [3, 4], [4, 5], [5, 6], [5, 7],
    ],
  },
];

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number; hue: number }[] = [];
    let mouseX = -1000;
    let mouseY = -1000;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", onMouseMove);

    // Create floating particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.3 + 0.05,
        hue: Math.random() > 0.5 ? 239 : 217,
      });
    }

    const drawConstellations = () => {
      const w = canvas.width;
      const h = canvas.height;

      constellations.forEach((constellation) => {
        const ox = constellation.offset.x * w;
        const oy = constellation.offset.y * h;

        // Draw connection lines - static white
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
          ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
          ctx.lineWidth = 0.5;
          ctx.stroke();
        });

        // Draw stars - static white dots
        constellation.stars.forEach((star) => {
          const sx = ox + star.x * w;
          const sy = oy + star.y * h;

          // Soft glow
          ctx.beginPath();
          ctx.arc(sx, sy, 4, 0, Math.PI * 2);
          const glow = ctx.createRadialGradient(sx, sy, 0, sx, sy, 4);
          glow.addColorStop(0, "rgba(255, 255, 255, 0.15)");
          glow.addColorStop(1, "transparent");
          ctx.fillStyle = glow;
          ctx.fill();

          // Star dot
          ctx.beginPath();
          ctx.arc(sx, sy, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
          ctx.fill();
        });
      });
    };

    const animate = (t: number) => {
      time = t;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw constellations first (behind particles)
      drawConstellations();

      // Particles
      particles.forEach((p) => {
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          const force = (200 - dist) / 200;
          p.vx += (dx / dist) * force * 0.3;
          p.vy += (dy / dist) * force * 0.3;
        }

        p.vx *= 0.98;
        p.vy *= 0.98;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();
      });

      // Particle connections
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const opacity = 0.06 * (1 - dist / 120);
            const gradient = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
            gradient.addColorStop(0, `hsla(${a.hue}, 84%, 67%, ${opacity})`);
            gradient.addColorStop(1, `hsla(${b.hue}, 84%, 67%, ${opacity})`);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <canvas ref={canvasRef} className="absolute inset-0 opacity-70" style={{ pointerEvents: "auto" }} />

      {/* Gradient mesh orbs */}
      <motion.div
        animate={{ x: [0, 100, -50, 0], y: [0, -80, 60, 0], scale: [1, 1.2, 0.9, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full blur-[140px] opacity-20"
        style={{ background: "hsl(var(--accent))" }}
      />
      <motion.div
        animate={{ x: [0, -120, 80, 0], y: [0, 60, -100, 0], scale: [1, 0.8, 1.1, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[50%] right-[10%] w-[450px] h-[450px] rounded-full blur-[130px] opacity-15"
        style={{ background: "hsl(var(--accent-blue))" }}
      />
      <motion.div
        animate={{ x: [0, 70, -90, 0], y: [0, -50, 80, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] left-[40%] w-[400px] h-[400px] rounded-full blur-[120px] opacity-10"
        style={{ background: "linear-gradient(135deg, hsl(var(--accent)), hsl(var(--accent-blue)))" }}
      />
      <motion.div
        animate={{ x: [0, -60, 40, 0], y: [0, 90, -40, 0], scale: [1, 1.15, 0.85, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] right-[30%] w-[350px] h-[350px] rounded-full blur-[100px] opacity-10"
        style={{ background: "hsl(var(--accent))" }}
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[200px]"
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
