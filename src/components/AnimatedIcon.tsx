import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AnimatedIconProps {
  icon: LucideIcon;
  size?: number;
  className?: string;
}

const AnimatedIcon = ({ icon: Icon, size = 22, className = "text-accent" }: AnimatedIconProps) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
        rotate: [0, -8, 8, -4, 0],
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      className="inline-flex items-center justify-center"
    >
      <motion.div
        whileHover={{
          filter: [
            "drop-shadow(0 0 0px hsl(239 84% 67% / 0))",
            "drop-shadow(0 0 8px hsl(239 84% 67% / 0.6))",
            "drop-shadow(0 0 4px hsl(239 84% 67% / 0.3))",
          ],
          transition: { duration: 0.6 },
        }}
      >
        <Icon size={size} className={className} />
      </motion.div>
    </motion.div>
  );
};

export default AnimatedIcon;
