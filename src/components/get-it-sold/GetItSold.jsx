import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import GetSold1 from "../../assets/get_sold1.png";
import GetSold2 from "../../assets/get_sold2.png";
import GetSold3 from "../../assets/get_sold3.png";

const ease = [0.16, 1, 0.3, 1];

function ParallaxImage({ src, alt, className = "" }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="absolute inset-[-8%] h-[116%] w-full object-cover"
      />
    </div>
  );
}

export default function GetItSold() {
  return (
    <section
      id="about"
      className="bg-[#f5f1e8] text-[#171715]"
    >
      <div className="mx-auto max-w-[1500px] px-6 py-28 sm:px-10 lg:px-14 lg:py-36">

        {/* ─────────────────────────────
            INTRO
        ───────────────────────────── */}

        <div className="grid gap-12 lg:grid-cols-12">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease }}
            className="lg:col-span-7"
          >
            <p className="mb-6 font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-[#171715]/40">
              The Ridge Realty Group
            </p>

            <h2 className="font-sans text-[clamp(3.5rem,7vw,8rem)] font-black uppercase leading-[0.8] tracking-[-0.065em]">
              Get it
              <br />
              sold.
            </h2>
          </motion.div>

          {/* Achievement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="self-end lg:col-span-4 lg:col-start-9"
          >
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#171715]/40">
              Top Residential Sales
              <br />
              Last 5 Years
            </p>

            <div className="mt-7 border-t border-[#171715]/20 pt-5">
              <span className="block font-sans text-[clamp(3.5rem,6vw,6rem)] font-black leading-none tracking-[-0.07em]">
                $28.5M
              </span>

              <span className="mt-3 block font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#171715]/45">
                Closed sales in 2021
              </span>
            </div>
          </motion.div>

        </div>

        {/* ─────────────────────────────
            FEATURE IMAGE + INTRO COPY
        ───────────────────────────── */}

        <div className="mt-20 grid gap-10 lg:grid-cols-12 lg:items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease }}
            className="lg:col-span-7"
          >
            <ParallaxImage
              src={GetSold1}
              alt="Featured property"
              className="aspect-[4/3] sm:aspect-[16/10]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="lg:col-span-4 lg:col-start-9"
          >
            <p className="font-sans text-xl leading-[1.65] tracking-[-0.015em] sm:text-2xl">
              We helped nearly 90 clients in 2021 and closed $28.5 million in
              sales. Our team works hard every day to grow and learn, so that
              we may continue to excel in our market.
            </p>

            <p className="mt-6 font-sans text-sm leading-[1.7] text-[#171715]/55">
              Our clients deserve our best, and we want to make sure our best
              is better every year.
            </p>
          </motion.div>

        </div>

        {/* ─────────────────────────────
            SELLERS
        ───────────────────────────── */}

        <div className="mt-28 grid gap-10 border-t border-[#171715]/15 pt-10 lg:grid-cols-12 lg:items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease }}
            className="lg:col-span-4"
          >
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#171715]/40">
              For sellers
            </p>

            <h3 className="mt-5 font-sans text-[clamp(2.5rem,4vw,4.5rem)] font-black uppercase leading-[0.85] tracking-[-0.055em]">
              Don't just
              <br />
              list it.
              <br />
              <span className="text-[#171715]/40">Get it sold.</span>
            </h3>

            <p className="mt-8 max-w-md font-sans text-base leading-[1.7] text-[#171715]/60">
              We exhaust every avenue to ensure our listings are at the
              fingertips of every possible buyer, helping get you top dollar
              for your home.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease }}
            className="lg:col-span-7 lg:col-start-6"
          >
            <ParallaxImage
              src={GetSold2}
              alt="Residential property"
              className="aspect-[16/10]"
            />
          </motion.div>

        </div>

        {/* ─────────────────────────────
            BUYERS
        ───────────────────────────── */}

        <div className="mt-28 grid gap-10 border-t border-[#171715]/15 pt-10 lg:grid-cols-12 lg:items-center">

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease }}
            className="order-2 lg:order-1 lg:col-span-7"
          >
            <ParallaxImage
              src={GetSold3}
              alt="Property represented by The Ridge Realty Group"
              className="aspect-[16/10]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease }}
            className="order-1 lg:order-2 lg:col-span-4 lg:col-start-9"
          >
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#171715]/40">
              For buyers
            </p>

            <h3 className="mt-5 font-sans text-[clamp(2.5rem,4vw,4.5rem)] font-black uppercase leading-[0.85] tracking-[-0.055em]">
              Guide to
              <br />
              buyers.
            </h3>

            <p className="mt-8 font-sans text-base leading-[1.7] text-[#171715]/60">
              Nobody knows the market like we do. Enjoy having a pro at your
              service, with market analysis, upgrade lists, contractors on
              speed dial, and more.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}