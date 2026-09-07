import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Caro1 from "../../assets/caro1.png";
import Caro2 from "../../assets/caro2.png";
import Caro3 from "../../assets/caro3.png";
import Caro4 from "../../assets/caro4.png";
import Caro5 from "../../assets/caro5.png";
import Caro6 from "../../assets/caro6.png";
import Caro7 from "../../assets/caro7.png";

const ease = [0.16, 1, 0.3, 1];

const storyItems = [
  { src: Caro1, label: "Desert Horizons", num: "01", tag: "Landscape" },
  { src: Caro2, label: "Nevada Atmosphere", num: "02", tag: "Environment" },
  { src: Caro3, label: "Community & Space", num: "03", tag: "Neighborhood" },
  { src: Caro4, label: "Open Acreage", num: "04", tag: "Land Lots" },
  { src: Caro5, label: "Unobstructed Views", num: "05", tag: "Scenic" },
  { src: Caro6, label: "Estate Grounds", num: "06", tag: "Residential" },
  { src: Caro7, label: "Pahrump Sunset", num: "07", tag: "Atmosphere" },
];

export default function PhotoStory() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % storyItems.length);
  }, []);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 4000);
  }, [nextSlide]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const handleUserSelect = (index) => {
    setActiveIndex(index);
    startTimer();
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % storyItems.length);
    startTimer();
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + storyItems.length) % storyItems.length);
    startTimer();
  };

  const activeItem = storyItems[activeIndex];

  return (
    <section
      id="about-pahrump"
      className="relative overflow-hidden bg-[#f5f1e8] text-[#171715]"
    >
      {/* Intro Header */}
      <div className="mx-auto max-w-[1500px] px-6 pt-20 sm:px-10 lg:px-14 lg:pt-28">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease }}
            className="lg:col-span-7"
          >
            <p className="mb-5 font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-[#171715]/45">
              Life in Pahrump
            </p>

            <h2 className="font-sans text-[clamp(3rem,6vw,6.5rem)] font-black uppercase leading-[0.82] tracking-[-0.06em]">
              More than
              <br />a property.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, delay: 0.12, ease }}
            className="max-w-md font-sans text-base leading-relaxed text-[#171715]/60 lg:col-span-4 lg:col-start-9"
          >
            Pahrump offers a different pace of life, with wide-open landscapes,
            room to grow, and a strong connection to the surrounding Nevada
            desert.
          </motion.p>
        </div>
      </div>

      {/* Main Feature Gallery Stage */}
      <div className="mx-auto max-w-[1500px] px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
        <div className="grid gap-8 border-y border-[#171715]/15 py-8 lg:grid-cols-12 lg:items-stretch">
          
          <div className="relative aspect-[16/10] overflow-hidden bg-[#e5dfd3] lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeItem.num}
                src={activeItem.src}
                alt={activeItem.label}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease }}
                className="h-full w-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute left-6 top-6 bg-[#171715] px-3.5 py-1.5 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5f1e8]">
              {activeItem.num} / 07
            </div>
          </div>

          {/* Active Details & Navigation Controls */}
          <div className="flex flex-col justify-between lg:col-span-4 lg:pl-6">
            <div className="border-b border-[#171715]/15 pb-8">
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-[#171715]/40">
                {activeItem.tag}
              </span>

              <h3 className="mt-3 font-sans text-3xl font-black uppercase tracking-[-0.04em]">
                {activeItem.label}
              </h3>

              <p className="mt-4 font-sans text-sm leading-relaxed text-[#171715]/60">
                Discover the distinctive character of Southern Nevada land. Each
                location offers uninterrupted horizon views, clean air, and unmatched development opportunities.
              </p>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <div className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#171715]/45">
                Select Photo
              </div>

              <div className="flex gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous Image"
                  className="flex h-11 w-11 items-center justify-center border border-[#171715]/20 font-sans text-sm font-bold text-[#171715] transition-colors duration-200 hover:border-[#171715] hover:bg-[#171715] hover:text-[#f5f1e8]"
                >
                  ←
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next Image"
                  className="flex h-11 w-11 items-center justify-center border border-[#171715]/20 font-sans text-sm font-bold text-[#171715] transition-colors duration-200 hover:border-[#171715] hover:bg-[#171715] hover:text-[#f5f1e8]"
                >
                  →
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="mx-auto max-w-[1500px] px-6 pb-20 sm:px-10 lg:px-14 lg:pb-28">
        <div className="mb-4 flex items-center justify-between">
          <p className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-[#171715]/45">
            Gallery Index
          </p>
          <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#171715]/40">
            Click to select
          </p>
        </div>

        {/* Thumbnail Track Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {storyItems.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={item.num}
                onClick={() => handleUserSelect(idx)}
                className={`group relative flex flex-col text-left transition-all duration-300 outline-none ${
                  isActive ? "opacity-100" : "opacity-45 hover:opacity-80"
                }`}
              >
                <div
                  className={`aspect-[4/3] w-full overflow-hidden bg-[#e5dfd3] transition-all duration-300 ${
                    isActive ? "ring-2 ring-[#171715] ring-offset-2 ring-offset-[#f5f1e8]" : ""
                  }`}
                >
                  <img
                    src={item.src}
                    alt={item.label}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-2.5 flex items-center justify-between">
                  <span className="font-sans text-[9px] font-bold tracking-[0.2em] text-[#171715]">
                    {item.num}
                  </span>
                  <span className="truncate font-sans text-[9px] font-bold uppercase tracking-[0.1em] text-[#171715]/60">
                    {item.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="border-t border-[#171715]/15">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-6 sm:px-10 lg:px-14">
          <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#171715]/45">
            Pahrump · Nevada Real Estate
          </span>

          <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#171715]/45">
            01 — 07 Portfolio
          </span>
        </div>
      </div>
    </section>
  );
}