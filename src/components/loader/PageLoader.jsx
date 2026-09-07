import { motion } from "framer-motion";
import Logo from "../../assets/Logo_img.svg";

const ease = [0.16, 1, 0.3, 1];

export default function PageLoader({ onComplete }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        duration: 0.7,
        delay: 1.9,
        ease,
      }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#171715]"
    >
      <div className="flex w-full max-w-md flex-col items-center px-8">

        {/* Logo */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
            y: 12,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            ease,
          }}
        >
          <img
            src={Logo}
            alt="Marci Metzger - The Ridge Realty Group"
            className="w-[190px] brightness-0 invert sm:w-[220px]"
          />
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{
            duration: 0.7,
            delay: 0.55,
            ease,
          }}
          className="mt-8 h-px max-w-[220px] bg-white/30"
        />

        {/* Location */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.8,
            ease,
          }}
          className="mt-5 font-sans text-[9px] font-bold uppercase tracking-[0.3em] text-white/50"
        >
          Pahrump · Nevada
        </motion.p>

      </div>
    </motion.div>
  );
}