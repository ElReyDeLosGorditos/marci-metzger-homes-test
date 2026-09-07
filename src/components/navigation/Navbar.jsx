import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../assets/Logo_img.svg";

const links = [
  { label: "Home", href: "#top" },
  { label: "Properties", href: "#properties" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="absolute inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10"
    >
      <div className="mx-auto max-w-[1500px]">

        {/* Navbar */}
        <div className="flex h-[76px] items-center justify-between border border-[#24231f]/15 bg-[#f5f1e8] px-5 sm:px-8">

          {/* Logo */}
          <a
            href="#top"
            onClick={closeMenu}
            aria-label="Marci Metzger - The Ridge Realty Group"
            className="group flex shrink-0 items-center"
          >
            <img
              src={Logo}
              alt="Marci Metzger - The Ridge Realty Group"
              className="w-[125px] transition-opacity duration-300 group-hover:opacity-60 sm:w-[140px]"
            />
          </a>

          {/* Desktop */}
          <nav className="hidden items-center md:flex">

            <div className="flex items-center gap-8 lg:gap-9">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group relative py-2 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#24231f]"
                >
                  {link.label}

                  <span className="absolute bottom-0 left-0 h-px w-0 bg-[#24231f] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Contact area */}
            <div className="ml-8 flex items-center gap-5 border-l border-[#24231f]/15 pl-8">

              <a
                href="tel:2069196886"
                className="font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-[#24231f]/60 transition-colors hover:text-[#24231f]"
              >
                (206) 919-6886
              </a>

              <a
                href="#contact"
                className="bg-[#24231f] px-5 py-3 font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-[#f5f1e8] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Let's Talk
              </a>

            </div>
          </nav>

          {/* Mobile */}
          <div className="flex items-center gap-2 md:hidden">

            <a
              href="tel:2069196886"
              className="bg-[#24231f] px-3 py-2 font-sans text-[9px] font-bold uppercase tracking-[0.15em] text-[#f5f1e8]"
            >
              Call
            </a>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="flex h-9 w-9 items-center justify-center border border-[#24231f]/20"
            >
              <div className="relative h-4 w-4">

                <motion.span
                  animate={{
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? 6 : 3,
                  }}
                  className="absolute left-0 top-0 h-px w-4 bg-[#24231f]"
                />

                <motion.span
                  animate={{
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? 6 : 10,
                  }}
                  className="absolute left-0 top-0 h-px w-4 bg-[#24231f]"
                />

              </div>
            </button>

          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="overflow-hidden border-x border-b border-[#24231f]/15 bg-[#f5f1e8] md:hidden"
            >
              <nav className="p-6">

                <div className="flex flex-col">

                  {links.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={closeMenu}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.04,
                      }}
                      className="flex items-center justify-between border-b border-[#24231f]/10 py-4 font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#24231f]"
                    >
                      {link.label}

                      <span className="text-[#24231f]/30">
                        →
                      </span>
                    </motion.a>
                  ))}

                </div>

                <div className="mt-6">

                  <a
                    href="#contact"
                    onClick={closeMenu}
                    className="block bg-[#24231f] py-4 text-center font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5f1e8]"
                  >
                    Let's Talk
                  </a>

                  <a
                    href="tel:2069196886"
                    className="mt-4 block text-center font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-[#24231f]/50"
                  >
                    (206) 919-6886
                  </a>

                </div>

              </nav>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.header>
  );
}