import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];

const selectClass =
  "mt-3 w-full appearance-none border-b border-[#171715]/20 bg-transparent pb-3 pr-6 font-sans text-sm text-[#171715] outline-none transition-colors duration-300 focus:border-[#171715] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] bg-[length:10px_6px] bg-[right_4px_center] bg-no-repeat [background-image:url('data:image/svg+xml;utf8,<svg%20xmlns=\"http://www.w3.org/2000/svg\"%20width=\"10\"%20height=\"6\"%20viewBox=\"0%200%2010%206\"><path%20fill=\"none\"%20stroke=\"%23171715\"%20stroke-width=\"1.5\"%20d=\"M1%201l4%204%204-4\"/></svg>')]";

export default function PropertySearch() {
  return (
    <section id="search" className="bg-[#f5f1e8] text-[#171715]">
      <div className="mx-auto max-w-[1500px] px-6 py-24 sm:px-10 lg:px-14 lg:py-32">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease }}
            className="lg:col-span-7"
          >
            <p className="mb-5 font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-[#171715]/45">
              Property Search
            </p>

            <h2 className="font-sans text-[clamp(3rem,6vw,6.5rem)] font-black uppercase leading-[0.82] tracking-[-0.06em]">
              Find your
              <br />
              next place.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, delay: 0.12, ease }}
            className="max-w-md font-sans text-base leading-relaxed text-[#171715]/60 lg:col-span-4 lg:col-start-9"
          >
            Explore homes, land and investment opportunities throughout Pahrump
            and the surrounding Southern Nevada market.
          </motion.p>
        </div>

        {/* Search Workspace Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease }}
          className="mt-16 border-y border-[#171715]/20"
        >
          <div className="grid lg:grid-cols-12">
            <div className="border-b border-[#171715]/15 px-1 py-7 lg:col-span-5 lg:border-b-0 lg:border-r lg:px-8">
              <label
                htmlFor="property-location"
                className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#171715]/45"
              >
                Location
              </label>

              <select
                id="property-location"
                defaultValue="35146"
                className={selectClass}
              >
                <option value="">Any</option>
                <option value="433">Alamo</option>
                <option value="934">Alton</option>
                <option value="1026">Amargosa Valley</option>
                <option value="3118">Beatty</option>
                <option value="3829">Beryl</option>
                <option value="4546">Blue Diamond</option>
                <option value="5088">Boulder City</option>
                <option value="5521">Brian Head</option>
                <option value="6719">Cal Nev Ari</option>
                <option value="6775">Caliente</option>
                <option value="9571">Cold Creek</option>
                <option value="11053">Crystal</option>
                <option value="12869">Duck Creek Village</option>
                <option value="13129">Dyer</option>
                <option value="14307">Elko</option>
                <option value="14562">Ely</option>
                <option value="18363">Goldfield</option>
                <option value="18449">Goodsprings</option>
                <option value="20411">Hatch</option>
                <option value="20821">Henderson</option>
                <option value="22539">Indian Springs</option>
                <option value="23194">Jean</option>
                <option value="25650">Las Vegas</option>
                <option value="25702">Laughlin</option>
                <option value="26990">Logandale</option>
                <option value="28159">Manhattan</option>
                <option value="29175">Mc Gill</option>
                <option value="29860">Mesquite</option>
                <option value="30650">Moapa</option>
                <option value="31435">Mount Charleston</option>
                <option value="31686">Mountain Springs</option>
                <option value="33400">North Las Vegas</option>
                <option value="35146">Pahrump</option>
                <option value="34981">Overton</option>
                <option value="55114">Palm Gardens</option>
                <option value="35305">Panaca</option>
                <option value="35603">Parcwan</option>
                <option value="36767">Pioche</option>
                <option value="40340">Round Mountain</option>
                <option value="41421">Sandy Valley</option>
                <option value="41950">Searchlight</option>
                <option value="46640">Tonopah</option>
                <option value="33">Other</option>
              </select>
            </div>

            <div className="border-b border-[#171715]/15 px-1 py-7 lg:col-span-4 lg:border-b-0 lg:border-r lg:px-8">
              <label
                htmlFor="property-type"
                className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#171715]/45"
              >
                Property Type
              </label>

              <select
                id="property-type"
                defaultValue="All Properties"
                className={selectClass}
              >
                <option>All Properties</option>
                <option>Residential</option>
                <option>Residential Lease</option>
                <option>Land / Lots</option>
                <option>High Rise</option>
              </select>
            </div>

            <div className="px-1 py-7 lg:col-span-3 lg:px-8">
              <label
                htmlFor="sort-by"
                className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#171715]/45"
              >
                Sort By
              </label>

              <select
                id="sort-by"
                defaultValue="Newest First"
                className={selectClass}
              >
                <option>Newest First</option>
                <option>Oldest First</option>
                <option>Price: Low–High</option>
                <option>Price: High–Low</option>
                <option>Beds: Most</option>
                <option>Beds: Fewest</option>
                <option>Baths: Most</option>
                <option>Baths: Fewest</option>
              </select>
            </div>
          </div>

          <div className="grid border-t border-[#171715]/15 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border-b border-[#171715]/15 px-1 py-7 sm:border-r lg:border-b-0 lg:px-8">
              <label
                htmlFor="min-price"
                className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#171715]/45"
              >
                Minimum Price
              </label>

              <div className="mt-3 flex items-center border-b border-[#171715]/20 pb-3 focus-within:border-[#171715]">
                <span className="font-sans text-sm text-[#171715]/40">$</span>
                <input
                  id="min-price"
                  type="number"
                  inputMode="numeric"
                  placeholder="No minimum"
                  className="ml-2 w-full bg-transparent font-sans text-sm text-[#171715] outline-none placeholder:text-[#171715]/35"
                />
              </div>
            </div>

            <div className="border-b border-[#171715]/15 px-1 py-7 lg:border-b-0 lg:border-r lg:px-8">
              <label
                htmlFor="max-price"
                className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#171715]/45"
              >
                Maximum Price
              </label>

              <div className="mt-3 flex items-center border-b border-[#171715]/20 pb-3 focus-within:border-[#171715]">
                <span className="font-sans text-sm text-[#171715]/40">$</span>
                <input
                  id="max-price"
                  type="number"
                  inputMode="numeric"
                  placeholder="No maximum"
                  className="ml-2 w-full bg-transparent font-sans text-sm text-[#171715] outline-none placeholder:text-[#171715]/35"
                />
              </div>
            </div>

            <div className="border-b border-[#171715]/15 px-1 py-7 sm:border-b-0 sm:border-r lg:px-8">
              <label
                htmlFor="bedrooms"
                className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#171715]/45"
              >
                Bedrooms
              </label>

              <select id="bedrooms" defaultValue="Any" className={selectClass}>
                <option>Any</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
                <option>5+</option>
                <option>6+</option>
              </select>
            </div>

            <div className="px-1 py-7 lg:px-8">
              <label
                htmlFor="bathrooms"
                className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#171715]/45"
              >
                Bathrooms
              </label>

              <select id="bathrooms" defaultValue="Any" className={selectClass}>
                <option>Any</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
                <option>5+</option>
                <option>6+</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-6 border-t border-[#171715]/15 px-1 py-7 sm:flex-row sm:items-center lg:px-8">
            <p className="max-w-md font-sans text-xs leading-relaxed text-[#171715]/45">
              Looking for something specific? Marci can help narrow down the
              right property for your needs.
            </p>

            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-6 bg-[#171715] px-7 py-4 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#f5f1e8] transition-transform duration-300 hover:-translate-y-0.5"
            >
              Search Properties
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <Info
            number="01"
            title="Residential"
            text="Homes for buyers looking to make Pahrump home."
          />
          <Info
            number="02"
            title="Land"
            text="Open land and lots for building, investment and future plans."
          />
          <Info
            number="03"
            title="Local knowledge"
            text="Guidance from someone who knows the Pahrump market."
          />
        </div>
      </div>
    </section>
  );
}

function Info({ number, title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease }}
      className="border-t border-[#171715]/15 pt-5"
    >
      <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-[#171715]/40">
        {number}
      </span>

      <h3 className="mt-3 font-sans text-lg font-black uppercase tracking-[-0.02em]">
        {title}
      </h3>

      <p className="mt-2 max-w-xs font-sans text-sm leading-relaxed text-[#171715]/50">
        {text}
      </p>
    </motion.div>
  );
}