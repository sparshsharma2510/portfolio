import { motion } from "framer-motion";

const CalligraphyName = () => {
  const firstName = "Sparsh";
  const lastName = "Sharma";

  const letterVariants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: 0.4 + i * 0.07,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <div className="relative w-full flex justify-center">
      <h1
        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
        style={{
          fontFamily: "'Inter', sans-serif",
          letterSpacing: "-0.03em",
        }}
      >
        <span className="inline-flex overflow-hidden">
          {firstName.split("").map((letter, i) => (
            <motion.span
              key={`first-${i}`}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className="inline-block text-foreground"
            >
              {letter}
            </motion.span>
          ))}
        </span>
        <span className="inline-block w-4 md:w-6" />
        <span className="inline-flex overflow-hidden">
          {lastName.split("").map((letter, i) => (
            <motion.span
              key={`last-${i}`}
              custom={firstName.length + i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className="inline-block gradient-text"
            >
              {letter}
            </motion.span>
          ))}
        </span>
      </h1>

      {/* Flourish underline */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 0.6 }}
        transition={{
          delay: 1.5,
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute -bottom-2 left-[10%] right-[10%] h-[2px] origin-left"
        style={{ background: "var(--gradient-accent)" }}
      />

      {/* Glow effect */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute inset-0 blur-3xl opacity-20 pointer-events-none"
        style={{ background: "var(--gradient-accent)" }}
      /> */}
    </div>
  );
};

export default CalligraphyName;
