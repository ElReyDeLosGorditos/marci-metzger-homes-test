import { motion } from "framer-motion";
import Logo from "../../assets/Logo_img.svg";

const links = [
  { label: "Home", href: "#top" },
  { label: "Properties", href: "#properties" },
  { label: "Services", href: "#services" },
  { label: "About Marci", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#171715] text-[#f5f1e8]">
      <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-14">

        {/* Main footer */}
        <div className="grid gap-16 border-b border-white/15 py-20 lg:grid-cols-12 lg:py-24">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <img
              src={Logo}
              alt="The Ridge Realty Group"
              className="h-auto w-52 brightness-0 invert"
            />

            <p className="mt-8 max-w-sm font-sans text-sm leading-[1.7] text-white/50">
              Marci Metzger
              <br />
              The Ridge Realty Group
              <br />
              Pahrump, Nevada
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
              Explore
            </p>

            <ul className="mt-7 space-y-4">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-3 font-sans text-sm font-semibold uppercase tracking-[0.08em] text-white/75 transition-colors hover:text-white"
                  >
                    {link.label}

                    <span className="translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
              Contact
            </p>

            <a
              href="tel:2069196886"
              className="mt-7 block font-sans text-2xl font-black tracking-[-0.03em] transition-colors hover:text-white/70"
            >
              (206) 919-6886
            </a>

            <address className="mt-5 not-italic font-sans text-sm leading-[1.7] text-white/50">
              3190 HW-160, Suite F
              <br />
              Pahrump, Nevada 89048
            </address>

            <p className="mt-5 font-sans text-xs text-white/40">
              Open daily · 8:00 AM – 7:00 PM
            </p>
          </motion.div>

        </div>

        {/* Bottom row */}
        <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="font-sans text-[9px] uppercase tracking-[0.18em] text-white/30">
            Copyright © {new Date().getFullYear()} Marci METZGER - All Rights Reserved
          </p>

          <a
            href="#top"
            className="group inline-flex items-center gap-3 font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-white/45 transition-colors hover:text-white"
          >
            Back to top

            <span className="transition-transform duration-300 group-hover:-translate-y-1">
              ↑
            </span>
          </a>

        </div>

      </div>
    </footer>
  );
}