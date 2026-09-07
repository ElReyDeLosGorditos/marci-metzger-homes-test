import { motion } from "framer-motion";
import SellerHero from "../../assets/caro1.png"; // Or your preferred seller image
import BuyerHero from "../../assets/caro2.png";  // Or your preferred buyer image

const ease = [0.16, 1, 0.3, 1];

export default function BuySell() {
  return (
    <section
      id="properties"
      className="bg-[#171715] text-[#f5f1e8]"
    >
      {/* Intro Header */}
      <div className="mx-auto max-w-[1500px] px-6 pb-14 pt-24 sm:px-10 lg:px-14 lg:pb-20 lg:pt-32">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease }}
            className="lg:col-span-7"
          >
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-[#f5f1e8]/45">
              The Pahrump Market Specialists
            </p>

            <h2 className="mt-4 font-sans text-[clamp(2.75rem,5.5vw,6rem)] font-black uppercase leading-[0.85] tracking-[-0.05em]">
              Your next move
              <br />
              starts here.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="max-w-md font-sans text-base leading-relaxed text-[#f5f1e8]/60 lg:col-span-4 lg:col-start-9"
          >
            Whether you're listing a desert estate or searching for acreage, Marci Metzger and The Ridge Realty Group provide deep local expertise to maximize your outcome.
          </motion.p>
        </div>
      </div>

      {/* Real Estate Featured Split Grid */}
      <div className="mx-auto max-w-[1500px] px-6 pb-24 sm:px-10 lg:px-14 lg:pb-36">
        <div className="grid gap-8 lg:grid-cols-2">

          {/* SELL CARD */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease }}
            className="group relative flex flex-col justify-between overflow-hidden border border-[#f5f1e8]/15 bg-[#24231f]"
          >
            {/* Property Card Image Header */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#1f1e1b]">
              <img
                src={SellerHero}
                alt="Selling with Marci Metzger"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#24231f] via-transparent to-transparent opacity-80" />
              
              <div className="absolute left-5 top-5 bg-[#171715]/80 backdrop-blur-md px-3 py-1 font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-[#f5f1e8]">
                For Sellers
              </div>
            </div>

            {/* Card Content Body */}
            <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
              <div>
                <div className="flex items-center justify-between border-b border-[#f5f1e8]/15 pb-4 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5f1e8]/45">
                  <span>Maximum Exposure</span>
                  <span>01</span>
                </div>

                <h3 className="mt-6 font-sans text-3xl font-black uppercase tracking-[-0.03em] sm:text-4xl">
                  Get your home evaluated & sold.
                </h3>

                <p className="mt-4 font-sans text-sm leading-relaxed text-[#f5f1e8]/65">
                  Strategic pricing, professional staging guidance, and targeted multi-channel marketing designed to put your property in front of qualified buyers immediately.
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-[#f5f1e8]/15 pt-6">
                <span className="font-sans text-xs text-[#f5f1e8]/50">Curious about your home equity?</span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5f1e8] transition-colors hover:text-[#f5f1e8]/70"
                >
                  <span>Request Valuation</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </motion.article>

          {/* BUY CARD */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="group relative flex flex-col justify-between overflow-hidden border border-[#f5f1e8]/15 bg-[#24231f]"
          >
            {/* Property Card Image Header */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#1f1e1b]">
              <img
                src={BuyerHero}
                alt="Buying with Marci Metzger"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#24231f] via-transparent to-transparent opacity-80" />
              
              <div className="absolute left-5 top-5 bg-[#171715]/80 backdrop-blur-md px-3 py-1 font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-[#f5f1e8]">
                For Buyers
              </div>
            </div>

            {/* Card Content Body */}
            <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
              <div>
                <div className="flex items-center justify-between border-b border-[#f5f1e8]/15 pb-4 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5f1e8]/45">
                  <span>Local Expertise</span>
                  <span>02</span>
                </div>

                <h3 className="mt-6 font-sans text-3xl font-black uppercase tracking-[-0.03em] sm:text-4xl">
                  Find your Nevada dream property.
                </h3>

                <p className="mt-4 font-sans text-sm leading-relaxed text-[#f5f1e8]/65">
                  Access active listings, land acreage, custom builds, and off-market opportunities backed by nearly three decades of local market navigation.
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-[#f5f1e8]/15 pt-6">
                <span className="font-sans text-xs text-[#f5f1e8]/50">Ready to look at options?</span>
                <a
                  href="#search"
                  className="inline-flex items-center gap-2 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5f1e8] transition-colors hover:text-[#f5f1e8]/70"
                >
                  <span>Browse Listings</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </motion.article>

        </div>
      </div>

      {/* Track Record Stats Strip */}
      <div className="border-t border-[#f5f1e8]/15">
        <div className="mx-auto grid max-w-[1500px] divide-y divide-[#f5f1e8]/15 px-6 sm:px-10 md:grid-cols-2 md:divide-x md:divide-y-0 lg:px-14">
          <div className="py-10 md:pr-12">
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5f1e8]/40">
              Market Tenure
            </p>
            <p className="mt-3 font-sans text-3xl font-black uppercase tracking-[-0.04em]">
              Nearly 3 decades
            </p>
            <p className="mt-2 font-sans text-sm text-[#f5f1e8]/50">
              Serving buyers and sellers across Pahrump and Southern Nevada.
            </p>
          </div>

          <div className="py-10 md:pl-12">
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5f1e8]/40">
              Verified Volume
            </p>
            <p className="mt-3 font-sans text-3xl font-black uppercase tracking-[-0.04em]">
              $28.5M+ in sales
            </p>
            <p className="mt-2 font-sans text-sm text-[#f5f1e8]/50">
              Nearly 90 successful client transactions closed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}