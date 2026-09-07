import { useState } from "react";

export default function Contact() {
  const [inquiryType, setInquiryType] = useState("buying");

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/MarciHomes/",
      icon: (
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/marcimetzger_theridge/",
      icon: (
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/marci-metzger-30642496/",
      icon: (
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Yelp",
      url: "https://www.yelp.com/biz/xr3yQN_m2SgO0R_7S6p62w",
      icon: (
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M20.16 12.69c-.48-.22-1.89-.86-3.84-1.39l1.64-3.39c.32-.67.21-1.47-.28-2.03-.49-.55-1.25-.78-1.97-.58l-3.66 1.05 1.07-3.66c.21-.72-.03-1.48-.58-1.97-.56-.49-1.36-.6-2.03-.28l-3.39 1.64c-.53-1.95-1.17-3.36-1.39-3.84-.33-.71-1.02-1.17-1.81-1.21C4.16 0 3.32.32 2.75.89s-.89 1.41-.89 2.21c.04.79.5 1.48 1.21 1.81.48.22 1.89.86 3.84 1.39l-1.64 3.39c-.32.67-.21 1.47.28 2.03.49.55 1.25.78 1.97.58l3.66-1.05-1.07 3.66c-.21.72.03 1.48.58 1.97.38.34.87.52 1.37.52.22 0 .44-.04.66-.12.67-.32 1.09-.98 1.09-1.72l-1.64-3.39c1.95.53 3.36 1.17 3.84 1.39.23.1.47.15.71.15.54 0 1.06-.24 1.41-.66.56-.57.73-1.39.42-2.11z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="bg-[#f5f1e8] text-[#171715]">
      <div className="mx-auto max-w-[1500px] px-6 py-28 sm:px-10 lg:px-14 lg:py-36">
        {/* Section Header */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="mb-4 font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-[#171715]/45">
              Get In Touch
            </p>

            <h2 className="font-sans text-[clamp(3.5rem,7vw,8rem)] font-black uppercase leading-[0.8] tracking-[-0.065em]">
              Let's Talk
              <br />
              Real Estate.
            </h2>
          </div>

          <p className="max-w-md font-sans text-base leading-[1.7] text-[#171715]/65 lg:col-span-4">
            Whether you are buying, selling, or evaluating land and residential properties in Pahrump, direct assistance is available.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="mt-20 grid gap-16 border-t border-[#171715]/15 pt-16 lg:grid-cols-12">
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#171715]/40">
                Marci Metzger
              </p>
              <p className="mt-1 font-sans text-xs font-bold uppercase tracking-[0.15em] text-[#171715]/60">
                The Ridge Realty Group
              </p>

              <a
                href="tel:2069196886"
                className="group mt-12 block border-t border-[#171715]/15 pt-6 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#171715]/40">
                    Direct Phone Line
                  </span>
                  <span className="font-sans text-xs transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>

                <p className="mt-4 font-sans text-[clamp(1.8rem,3vw,3rem)] font-black tracking-[-0.04em] text-[#171715] group-hover:underline group-hover:decoration-1 group-hover:underline-offset-4">
                  (206) 919-6886
                </p>
              </a>

              <div className="mt-10 border-t border-[#171715]/15 pt-6">
                <div className="flex items-center justify-between">
                  <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#171715]/40">
                    Brokerage Office
                  </p>
                  <a
                    href="https://maps.google.com/?q=3190+HW-160+Suite+F+Pahrump+NV+89048"
                    target="_blank"
                    rel="noreferrer"
                    className="font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-[#171715]/60 hover:text-[#171715]"
                  >
                    Open Maps ↗
                  </a>
                </div>

                <address className="mt-4 not-italic font-sans text-lg font-bold uppercase leading-[1.4] tracking-[-0.02em] text-[#171715]">
                  3190 HW-160, Suite F
                  <br />
                  Pahrump, Nevada 89048
                </address>
              </div>

              <div className="mt-10 border-t border-[#171715]/15 pt-6">
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#171715]/40">
                  Office Availability
                </p>

                <div className="mt-4 flex items-baseline justify-between gap-6">
                  <span className="font-sans text-xs font-bold uppercase tracking-[0.08em]">
                    Monday - Sunday
                  </span>
                  <span className="font-sans text-xs font-bold uppercase">
                    8:00 AM - 7:00 PM
                  </span>
                </div>
              </div>

              <div className="mt-10 border-t border-[#171715]/15 pt-6">
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#171715]/40">
                  Connect & Reviews
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  {socialLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.name}
                      className="group flex items-center gap-2.5 border border-[#171715]/20 px-3.5 py-2 font-sans text-xs font-bold uppercase tracking-[0.1em] text-[#171715] transition-all hover:border-[#171715] hover:bg-[#171715] hover:text-[#f5f1e8]"
                    >
                      <span className="transition-transform duration-200 group-hover:scale-110">
                        {item.icon}
                      </span>
                      <span>{item.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#171715]/40">
              Send An Inquiry
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="mt-8">
              <div className="mb-8">
                <p className="mb-3 font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-[#171715]/50">
                  I am looking to:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: "buying", label: "Buy Property" },
                    { id: "selling", label: "Sell Property" },
                    { id: "general", label: "General Inquiry" },
                  ].map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setInquiryType(type.id)}
                      className={`px-4 py-2 font-sans text-[10px] font-bold uppercase tracking-[0.15em] transition-all ${
                        inquiryType === type.id
                          ? "bg-[#171715] text-[#f5f1e8]"
                          : "border border-[#171715]/20 text-[#171715]/70 hover:border-[#171715]"
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Inputs */}
              <div className="group relative border-b border-[#171715]/20 py-4 focus-within:border-[#171715]">
                <label
                  htmlFor="name"
                  className="block font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#171715]/40 group-focus-within:text-[#171715]"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Jane Doe"
                  className="mt-2 w-full bg-transparent font-sans text-base font-medium outline-none placeholder:text-[#171715]/25"
                />
              </div>

              <div className="group relative mt-6 border-b border-[#171715]/20 py-4 focus-within:border-[#171715]">
                <label
                  htmlFor="email"
                  className="block font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#171715]/40 group-focus-within:text-[#171715]"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="jane@example.com"
                  className="mt-2 w-full bg-transparent font-sans text-base font-medium outline-none placeholder:text-[#171715]/25"
                />
              </div>

              <div className="group relative mt-6 border-b border-[#171715]/20 py-4 focus-within:border-[#171715]">
                <label
                  htmlFor="phone"
                  className="block font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#171715]/40 group-focus-within:text-[#171715]"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="(775) 000-0000"
                  className="mt-2 w-full bg-transparent font-sans text-base font-medium outline-none placeholder:text-[#171715]/25"
                />
              </div>

              <div className="group relative mt-6 border-b border-[#171715]/20 py-4 focus-within:border-[#171715]">
                <label
                  htmlFor="message"
                  className="block font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#171715]/40 group-focus-within:text-[#171715]"
                >
                  Property Details or Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Share location, budget, property size, or timeframe..."
                  className="mt-2 w-full resize-none bg-transparent font-sans text-base leading-relaxed font-medium outline-none placeholder:text-[#171715]/25"
                />
              </div>

              <div className="mt-10 flex items-center justify-between">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-6 border border-[#171715] bg-[#171715] px-8 py-4 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5f1e8] transition-colors hover:bg-transparent hover:text-[#171715]"
                >
                  <span>Submit Inquiry</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>

              <p className="mt-8 font-sans text-[10px] leading-relaxed text-[#171715]/40">
                This site is protected by reCAPTCHA and the Google{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 hover:text-[#171715]"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="https://policies.google.com/terms"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2 hover:text-[#171715]"
                >
                  Terms of Service
                </a>{" "}
                apply.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}