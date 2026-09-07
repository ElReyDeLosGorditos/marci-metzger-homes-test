import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import Person from "../../assets/Person_img.png";

const ease = [0.16, 1, 0.3, 1];

export default function MeetMarci() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const titleY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const backgroundX = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-6%"]
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-[#171715] text-[#f5f1e8]"
    >
      {/* Background Typography Watermark */}
      <motion.div
        style={{ x: backgroundX }}
        className="pointer-events-none absolute -left-10 top-[12%] whitespace-nowrap font-sans text-[20vw] font-black uppercase leading-none tracking-[-0.08em] text-[#f5f1e8]/[0.02] select-none"
      >
        REALTOR
      </motion.div>

      <div className="relative mx-auto max-w-[1500px] px-6 py-24 sm:px-10 lg:px-14 lg:py-32">

        {/* Header Section */}
        <div className="mb-16 grid gap-8 border-b border-[#f5f1e8]/15 pb-8 lg:grid-cols-12 lg:items-end">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease }}
            className="lg:col-span-6"
          >
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-[#f5f1e8]/45">
              The Ridge Realty Group
            </p>
            <h2 className="mt-3 font-sans text-[clamp(2.5rem,5vw,5rem)] font-black uppercase leading-[0.85] tracking-[-0.05em]">
              Meet Marci Metzger
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="max-w-lg font-sans text-sm leading-relaxed text-[#f5f1e8]/60 lg:col-span-5 lg:col-start-8"
          >
            Pahrump's trusted real estate specialist delivering local market knowledge, tailored property strategy, and direct representation.
          </motion.p>
        </div>

        {/* Main Content Layout */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14 lg:items-center">

          <div className="relative lg:col-span-6">
            <div className="relative overflow-hidden border border-[#f5f1e8]/15 bg-[#1f1e1b]">
              <motion.div
                style={{ y: imageY }}
                className="relative -my-10 h-[580px] sm:h-[660px] lg:h-[720px]"
              >
                <img
                  src={Person}
                  alt="Marci Metzger Real Estate Agent"
                  className="absolute inset-0 h-full w-full object-cover object-top filter grayscale contrast-105 transition-all duration-700 hover:grayscale-0"
                />
              </motion.div>

              <div className="absolute left-6 top-6 border border-[#f5f1e8]/15 bg-[#171715]/90 px-4 py-2 backdrop-blur-md">
                <span className="font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-[#f5f1e8]">
                  Licensed NV Broker
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between border border-[#f5f1e8]/15 bg-[#171715]/85 p-4 backdrop-blur-md">
                <div>
                  <p className="font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-[#f5f1e8]/45">
                    Primary Market
                  </p>
                  <p className="font-sans text-sm font-bold uppercase tracking-[0.1em] text-[#f5f1e8]">
                    Pahrump & Nye County
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-[#f5f1e8]/45">
                    Specialization
                  </p>
                  <p className="font-sans text-sm font-bold uppercase tracking-[0.1em] text-[#f5f1e8]">
                    Residential & Land
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center lg:col-span-6">
            <motion.div style={{ y: titleY }}>
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.8, ease }}
                className="inline-block border-l-2 border-[#f5f1e8]/40 pl-3 font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-[#f5f1e8]/50"
              >
                Local Knowledge & Experience
              </motion.span>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.8, delay: 0.08, ease }}
                className="mt-4 font-sans text-3xl font-black uppercase tracking-[-0.03em] sm:text-4xl lg:text-5xl"
              >
                Navigating Southern Nevada Real Estate.
              </motion.h3>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 space-y-4 font-sans text-sm leading-relaxed text-[#f5f1e8]/65 sm:text-base"
              >
                <p>
                  Real estate in Nye County requires clear understanding of water rights, zoning laws, land values, and the unique development landscape of Southern Nevada.
                </p>
                <p>
                  Whether you are buying your first home, positioning land for sale, or expanding an investment portfolio, Marci provides direct, candid guidance tailored to your specific goals.
                </p>
              </motion.div>

              <div className="mt-8 grid grid-cols-2 gap-3 border-t border-[#f5f1e8]/15 pt-6">
                {[
                  "Residential Homes",
                  "Land & Acreage",
                  "Market Valuations",
                  "Investment Strategy",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-[#f5f1e8]/50" />
                    <span className="font-sans text-xs font-bold uppercase tracking-[0.1em] text-[#f5f1e8]/80">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center justify-center border border-[#f5f1e8] bg-[#f5f1e8] px-8 py-4 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#171715] transition-transform duration-300 hover:bg-transparent hover:text-[#f5f1e8]"
                >
                  <span>Connect with Marci</span>
                  <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <a
                  href="tel:7757271000"
                  className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5f1e8]/60 transition-colors hover:text-[#f5f1e8]"
                >
                  Direct: 206-919-6886
                </a>
              </div>
            </motion.div>
          </div>

        </div>

        <div className="mt-20 grid border-t border-[#f5f1e8]/15 sm:grid-cols-3">
          <Fact
            number="01"
            label="Local Presence"
            value="Pahrump Specialist"
          />
          <Fact
            number="02"
            label="Service Scope"
            value="Residential & Rural Land"
          />
          <Fact
            number="03"
            label="Client Commitment"
            value="Direct Representation"
          />
        </div>

      </div>
    </section>
  );
}

function Fact({ number, label, value }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease }}
      className="border-b border-[#f5f1e8]/15 px-0 py-8 sm:border-b-0 sm:border-r sm:px-8 first:sm:pl-0 last:sm:border-r-0"
    >
      <div className="flex items-center justify-between">
        <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-[#f5f1e8]/35">
          {number}
        </span>
        <span className="font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-[#f5f1e8]/35">
          {label}
        </span>
      </div>

      <p className="mt-4 font-sans text-base font-bold uppercase tracking-[0.05em] text-[#f5f1e8]">
        {value}
      </p>
    </motion.div>
  );
}