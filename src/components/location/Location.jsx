import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

export default function Location() {
  return (
    <section
      id="location"
      className="bg-[#171715] text-[#f5f1e8]"
    >
      <div className="mx-auto max-w-[1500px] px-6 py-24 sm:px-10 lg:px-14 lg:py-32">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease }}
          className="mb-12 flex items-end justify-between border-b border-white/15 pb-6"
        >
          <div>
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
              Find us
            </p>

            <h2 className="mt-4 font-sans text-[clamp(3rem,6vw,6rem)] font-black uppercase leading-[0.82] tracking-[-0.06em]">
              Visit
              <br />
              the office.
            </h2>
          </div>

          <span className="hidden font-sans text-[10px] uppercase tracking-[0.2em] text-white/35 sm:block">
            Pahrump · Nevada
          </span>
        </motion.div>

        {/* Main grid */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease }}
            className="flex flex-col justify-between lg:col-span-4"
          >
            <div>
              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                The Ridge Realty Group
              </p>

              <address className="mt-8 not-italic font-sans text-2xl font-black uppercase leading-[1.15] tracking-[-0.035em] sm:text-3xl">
                3190 HW-160,
                <br />
                Suite F
                <br />
                Pahrump,
                <br />
                Nevada 89048
              </address>

              <p className="mt-3 font-sans text-sm text-white/40">
                United States
              </p>
            </div>

            <div className="mt-14 border-t border-white/15 pt-6">
              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                Office hours
              </p>

              <p className="mt-4 font-sans text-lg font-bold uppercase">
                Open daily
              </p>

              <p className="mt-1 font-sans text-sm text-white/55">
                8:00 AM – 7:00 PM
              </p>

              <a
                href="tel:2069196886"
                className="group mt-7 inline-flex items-center gap-5 border-b border-white/30 pb-2 font-sans text-[10px] font-bold uppercase tracking-[0.2em]"
              >
                (206) 919-6886

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease }}
            className="relative min-h-[420px] overflow-hidden lg:col-span-8 lg:min-h-[600px]"
          >
            <iframe
              title="The Ridge Realty Group location"
              src="https://www.google.com/maps?q=3190+HW-160,+Suite+F,+Pahrump,+NV+89048&output=embed"
              className="absolute inset-0 h-full w-full border-0 grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Map frame */}
            <div className="pointer-events-none absolute inset-0 border border-white/15" />

            {/* Corner label */}
            <div className="pointer-events-none absolute bottom-5 left-5 bg-[#171715]/90 px-4 py-3">
              <p className="font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-white/45">
                The Ridge Realty Group
              </p>

              <p className="mt-1 font-sans text-xs font-bold uppercase tracking-[0.1em] text-white">
                Pahrump, Nevada
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}