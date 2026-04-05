import { motion } from "framer-motion";

const CalligraphyName = () => {
  // SVG paths that trace "Sparsh Sharma" in a handwritten calligraphy style
  // Each path represents a brush stroke
  const firstNameStrokes = [
    // S
    "M 30 55 C 30 35, 55 25, 60 35 C 65 45, 25 55, 30 70 C 35 85, 65 75, 60 65",
    // p
    "M 75 40 L 75 90 M 75 50 C 75 40, 100 40, 100 55 C 100 70, 75 70, 75 60",
    // a
    "M 115 50 C 115 45, 135 45, 135 55 L 135 75 M 135 55 C 135 50, 115 50, 115 60 C 115 72, 135 72, 135 65",
    // r
    "M 145 50 L 145 75 M 145 55 C 145 48, 165 45, 165 52",
    // s
    "M 180 52 C 180 46, 195 46, 195 52 C 195 58, 178 58, 178 65 C 178 72, 195 72, 195 66",
    // h
    "M 205 30 L 205 75 M 205 55 C 205 48, 225 48, 225 55 L 225 75",
  ];

  const lastNameStrokes = [
    // S
    "M 260 55 C 260 35, 285 25, 290 35 C 295 45, 255 55, 260 70 C 265 85, 295 75, 290 65",
    // h
    "M 305 30 L 305 75 M 305 55 C 305 48, 325 48, 325 55 L 325 75",
    // a
    "M 340 50 C 340 45, 360 45, 360 55 L 360 75 M 360 55 C 360 50, 340 50, 340 60 C 340 72, 360 72, 360 65",
    // r
    "M 370 50 L 370 75 M 370 55 C 370 48, 390 45, 390 52",
    // m
    "M 400 50 L 400 75 M 400 55 C 400 48, 415 48, 415 55 L 415 75 M 415 55 C 415 48, 430 48, 430 55 L 430 75",
    // a
    "M 445 50 C 445 45, 465 45, 465 55 L 465 75 M 465 55 C 465 50, 445 50, 445 60 C 445 72, 465 72, 465 65",
  ];

  const allStrokes = [...firstNameStrokes, ...lastNameStrokes];

  return (
    <div className="relative w-full flex justify-center">
      <svg
        viewBox="0 0 500 100"
        className="w-full max-w-3xl h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Gradient definition */}
        <defs>
          <linearGradient id="calligraphy-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(239 84% 67%)" />
            <stop offset="100%" stopColor="hsl(217 91% 60%)" />
          </linearGradient>
          <linearGradient id="calligraphy-white" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(240 7% 97%)" />
            <stop offset="100%" stopColor="hsl(240 7% 97%)" />
          </linearGradient>
        </defs>

        {/* First name - white */}
        {firstNameStrokes.map((d, i) => (
          <motion.path
            key={`first-${i}`}
            d={d}
            stroke="hsl(240 7% 97%)"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: {
                duration: 0.8,
                delay: 0.3 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              },
              opacity: { duration: 0.01, delay: 0.3 + i * 0.15 },
            }}
          />
        ))}

        {/* Last name - gradient */}
        {lastNameStrokes.map((d, i) => (
          <motion.path
            key={`last-${i}`}
            d={d}
            stroke="url(#calligraphy-gradient)"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: {
                duration: 0.8,
                delay: 0.3 + (firstNameStrokes.length + i) * 0.15,
                ease: [0.22, 1, 0.36, 1],
              },
              opacity: {
                duration: 0.01,
                delay: 0.3 + (firstNameStrokes.length + i) * 0.15,
              },
            }}
          />
        ))}

        {/* Decorative flourish underline */}
        <motion.path
          d="M 30 88 Q 130 82 250 85 Q 370 88 465 82"
          stroke="url(#calligraphy-gradient)"
          strokeWidth={1.5}
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{
            pathLength: {
              duration: 1,
              delay: 0.3 + allStrokes.length * 0.15,
              ease: [0.22, 1, 0.36, 1],
            },
            opacity: {
              duration: 0.3,
              delay: 0.3 + allStrokes.length * 0.15,
            },
          }}
        />
      </svg>

      {/* Glow effect behind the text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute inset-0 blur-3xl opacity-20 pointer-events-none"
        style={{ background: "var(--gradient-accent)" }}
      />
    </div>
  );
};

export default CalligraphyName;
