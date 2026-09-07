import { motion } from "framer-motion";

import Sponsor1 from "../../assets/spons1.svg";
import Sponsor2 from "../../assets/spons2.svg";
import Sponsor3 from "../../assets/spons3.svg";
import Sponsor4 from "../../assets/spons4.svg";

const sponsors = [
  {
    image: Sponsor1,
    alt: "Community partner",
  },
  {
    image: Sponsor2,
    alt: "Community partner",
  },
  {
    image: Sponsor3,
    alt: "Community partner",
  },
  {
    image: Sponsor4,
    alt: "Community partner",
  },
];

export default function PartnerMarquee() {
  const repeatedSponsors = [...sponsors, ...sponsors, ...sponsors];

  return (
    <section className="overflow-hidden bg-[#f5f1e8] text-[#171715]">
      {/* Header */}
      <div className="mx-auto max-w-[1500px] border-t border-[#171715]/15 px-6 py-6 sm:px-10 lg:px-14">
        <div className="flex items-center justify-between">
          <p className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-[#171715]/45">
            Community & Partners
          </p>

          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#171715]/35">
            The Ridge Realty Group
          </span>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative border-y border-[#171715]/15 py-10 sm:py-14">

        <motion.div
          className="flex w-max items-center"
          animate={{
            x: ["0%", "-33.333%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {repeatedSponsors.map((sponsor, index) => (
            <div
              key={`${sponsor.alt}-${index}`}
              className="flex h-20 w-[220px] shrink-0 items-center justify-center px-8 sm:w-[280px]"
            >
              <img
                src={sponsor.image}
                alt={sponsor.alt}
                className="max-h-16 max-w-[180px] object-contain opacity-55 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </motion.div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#f5f1e8] to-transparent" />

        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#f5f1e8] to-transparent" />

      </div>
    </section>
  );
}