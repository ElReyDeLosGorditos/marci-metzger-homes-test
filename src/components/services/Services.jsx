import { motion } from "framer-motion";

import Services1 from "../../assets/services1.png";
import Services2 from "../../assets/services2.png";
import Services3 from "../../assets/services3.png";

const ease = [0.16, 1, 0.3, 1];

const services = [
  {
    number: "01",
    eyebrow: "Commercial & Residential",
    title: "From a first home to your next investment.",
    description:
      "Every property search is different. Find a home that fits your life, a property that fits your plans, or an investment worth considering. With experience across residential, commercial, and land, we help you make informed decisions in the Pahrump market.",
    image: Services1,
    alt: "Pahrump real estate property",
    imageSide: "right",
  },
  {
    number: "02",
    eyebrow: "Local Expertise",
    title: "Local knowledge. Real guidance.",
    description:
      "Real estate comes with questions. What can you afford? Where should you invest? What should you know before making an offer? We'll help you understand your options and connect you with the right professionals when you need them.",
    image: Services2,
    alt: "Southern Nevada property",
    imageSide: "left",
  },
  {
    number: "03",
    eyebrow: "A Clearer Process",
    title: "Move forward with confidence.",
    description:
      "Whether you're ready to buy, preparing to sell, or simply exploring the market, you'll have someone in your corner. Straightforward advice, local perspective, and support from the first conversation to the final signature.",
    image: Services3,
    alt: "Pahrump Nevada real estate",
    imageSide: "right",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#f5f1e8] text-[#171715]"
    >
      {/* ─────────────────────────────────────────
          INTRO
      ───────────────────────────────────────── */}

      <div className="mx-auto max-w-[1500px] px-6 pb-24 pt-28 sm:px-10 lg:px-14 lg:pb-32 lg:pt-36">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, ease }}
            className="lg:col-span-8"
          >
            <p className="mb-6 font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-[#171715]/45">
              Real Estate Done Right
            </p>

            <h2 className="max-w-5xl font-sans text-[clamp(3.5rem,7vw,7.5rem)] font-black uppercase leading-[0.82] tracking-[-0.065em]">
              A better
              <br />
              way to move.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="max-w-md font-sans text-base leading-[1.7] text-[#171715]/60 lg:col-span-4 lg:col-start-9"
          >
            Buying, selling, or exploring your next investment should feel
            clear, not complicated. Get straightforward guidance from the
            first conversation to the final signature.
          </motion.p>

        </div>
      </div>

      {/* ─────────────────────────────────────────
          SERVICE ROWS
      ───────────────────────────────────────── */}

      <div className="border-t border-[#171715]/15">
        {services.map((service, index) => (
          <ServiceRow
            key={service.number}
            service={service}
            index={index}
          />
        ))}
      </div>

      {/* ─────────────────────────────────────────
          FOOTER RULE
      ───────────────────────────────────────── */}

      <div className="border-t border-[#171715]/15">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-6 sm:px-10 lg:px-14">
          <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#171715]/40">
            The Ridge Realty Group
          </span>

          <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#171715]/40">
            Pahrump · Nevada
          </span>
        </div>
      </div>
    </section>
  );
}

function ServiceRow({ service, index }) {
  const imageRight = service.imageSide === "right";

  return (
    <article className="group overflow-hidden">
      <div
        className={`mx-auto grid max-w-[1500px] lg:min-h-[680px] lg:grid-cols-12 ${
          !imageRight ? "lg:[&>.service-copy]:order-2" : ""
        }`}
      >

        {/* ─────────────────────────────────────
            COPY
        ───────────────────────────────────── */}

        <motion.div
          initial={{
            opacity: 0,
            x: imageRight ? -40 : 40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.9,
            ease,
          }}
          className="service-copy flex flex-col justify-between px-6 py-14 sm:px-10 sm:py-16 lg:col-span-5 lg:px-14 lg:py-20"
        >

          {/* Top information */}
          <div className="flex items-center justify-between border-b border-[#171715]/15 pb-5">
            <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-[#171715]/40">
              {service.number}
            </span>

            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#171715]/40">
              The Ridge Realty Group
            </span>
          </div>

          {/* Main copy */}
          <div className="py-16 lg:py-0">

            <p className="mb-5 font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-[#171715]/45">
              {service.eyebrow}
            </p>

            <h3 className="max-w-xl font-sans text-[clamp(2.5rem,4vw,4.8rem)] font-black uppercase leading-[0.88] tracking-[-0.055em]">
              {service.title}
            </h3>

            <p className="mt-8 max-w-md font-sans text-base leading-[1.7] text-[#171715]/60">
              {service.description}
            </p>

            <a
              href="#contact"
              className="group/link mt-9 inline-flex items-center gap-5 border-b border-[#171715]/35 pb-2 font-sans text-[10px] font-bold uppercase tracking-[0.2em]"
            >
              Talk with Marci

              <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                →
              </span>
            </a>

          </div>

          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#171715]/35">
            0{index + 1} / 03
          </span>
        </motion.div>

        {/* ─────────────────────────────────────
            IMAGE
        ───────────────────────────────────── */}

        <motion.div
          initial={{
            opacity: 0,
            x: imageRight ? 40 : -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1,
            ease,
          }}
          className={`relative min-h-[460px] overflow-hidden lg:col-span-7 lg:min-h-[680px] ${
            imageRight ? "lg:col-start-6" : "lg:col-start-1"
          }`}
        >
          <motion.img
            src={service.image}
            alt={service.alt}
            className="absolute inset-0 h-full w-full object-cover"
            whileHover={{
              scale: 1.035,
            }}
            transition={{
              duration: 0.9,
              ease,
            }}
          />

          <div className="pointer-events-none absolute inset-0 border border-black/10" />
        </motion.div>

      </div>

      <div className="mx-auto max-w-[1500px] border-t border-[#171715]/15" />
    </article>
  );
}