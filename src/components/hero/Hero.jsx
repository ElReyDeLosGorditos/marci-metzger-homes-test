import { motion } from "framer-motion";
import Background from "../../assets/bg_img.png";

const ease = [0.16, 1, 0.3, 1];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-[#171715] text-white flex flex-col justify-between"
    >
      <motion.div
        initial={{ scale: 1.1, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease }}
        className="absolute inset-0 z-0"
      >
        <img
          src={Background}
          alt="Pahrump Nevada Real Estate"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171715] via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 z-10 mx-auto max-w-[1500px] border-x border-white/10 hidden md:block">
        <div className="absolute left-1/3 top-0 h-full w-px bg-white/5" />
        <div className="absolute left-2/3 top-0 h-full w-px bg-white/5" />
      </div>

      {/* 3. Hero Content Container */}
      <div className="relative z-20 mx-auto flex w-full max-w-[1500px] flex-1 flex-col justify-end px-6 pb-12 pt-36 sm:px-10 lg:px-14">
        
        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-white/80">
            Pahrump & Southern Nevada
          </span>
        </motion.div>

        {/* Main Headline Block */}
        <div className="relative">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.08 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="pointer-events-none absolute -top-12 left-0 font-sans text-[clamp(4rem,14vw,14rem)] font-black uppercase tracking-tight text-white select-none whitespace-nowrap"
          >
            METZGER
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease }}
              className="font-sans text-[clamp(3.2rem,8.5vw,7.5rem)] font-black uppercase leading-[0.88] tracking-tight text-white"
            >
              Elevated Desert <br />
              <span className="italic font-serif font-normal lowercase tracking-normal text-[#f5f1e8]/90">
                living &
              </span>{" "}
              Land.
            </motion.h1>
          </div>
        </div>

        {/* Lower Grid Row */}
        <div className="mt-10 grid gap-8 border-t border-white/20 pt-8 md:grid-cols-12 md:items-end">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease }}
            className="md:col-span-5"
          >
            <p className="font-sans text-lg font-bold uppercase tracking-wider text-white">
              Marci Metzger
            </p>
            <p className="font-sans text-xs font-medium uppercase tracking-[0.18em] text-white/60 mt-1">
              Realtor • The Ridge Realty Group
            </p>
          </motion.div>

          {/* Center Block: Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease }}
            className="flex flex-wrap items-center gap-4 md:col-span-4"
          >
            <a
              href="#properties"
              className="bg-[#f5f1e8] px-7 py-3.5 font-sans text-xs font-bold uppercase tracking-[0.18em] text-[#171715] transition-all hover:bg-white hover:scale-[1.02]"
            >
              View Properties
            </a>
            <a
              href="#contact"
              className="border border-white/40 bg-black/30 backdrop-blur-sm px-7 py-3.5 font-sans text-xs font-bold uppercase tracking-[0.18em] text-white transition-all hover:border-white hover:bg-black/60"
            >
              Contact Marci
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1, ease }}
            className="hidden md:col-span-3 md:flex md:flex-col md:items-end"
          >
            <div className="border border-white/15 bg-black/40 backdrop-blur-md p-4 w-full max-w-[220px]">
              <div className="flex items-center justify-between text-xs text-white/60 border-b border-white/10 pb-2 mb-2 font-sans">
                <span>SPECIALIZATION</span>
                <span className="text-[#d4af37] font-bold">NEVADA</span>
              </div>
              <p className="font-sans text-sm font-bold text-white uppercase tracking-wider">
                Residential & Land
              </p>
              <p className="font-sans text-[10px] uppercase tracking-wider text-white/50 mt-1">
                Local Market Expertise
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="relative z-20 border-t border-white/10 bg-black/40 backdrop-blur-md px-6 py-3 sm:px-10 lg:px-14">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between font-sans text-[10px] uppercase tracking-[0.2em] text-white/50">
          <span>Scroll to explore portfolio</span>
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/80"
          >
            ↓
          </motion.span>
        </div>
      </div>
    </section>
  );
}