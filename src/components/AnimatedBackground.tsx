import { useEffect, useRef } from "react";

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

    // Generate random stars once
    const starCount = 220;
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 1.6 + 0.3,
      baseOpacity: Math.random() * 0.6 + 0.2,
      twinkleSpeed: Math.random() * 0.008 + 0.002,
      twinkleOffset: Math.random() * Math.PI * 2,
    }));

    const animate = (time: number) => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      stars.forEach((star) => {
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset);
        const opacity = star.baseOpacity + twinkle * 0.15;
        const sx = star.x * w;
        const sy = star.y * h;

        // Glow
        ctx.beginPath();
        ctx.arc(sx, sy, star.size * 2.5, 0, Math.PI * 2);
        const glow = ctx.createRadialGradient(sx, sy, 0, sx, sy, star.size * 2.5);
        glow.addColorStop(0, `rgba(255, 255, 255, ${opacity * 0.15})`);
        glow.addColorStop(1, "transparent");
        ctx.fillStyle = glow;
        ctx.fill();

        // Star dot
        ctx.beginPath();
        ctx.arc(sx, sy, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" style={{
      background: "linear-gradient(180deg, #030510 0%, #060a1a 30%, #0a0e24 60%, #050816 100%)"
    }}>
      <canvas ref={canvasRef} className="absolute inset-0" style={{ pointerEvents: "none" }} />

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
