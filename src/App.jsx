import { useState } from "react";

import Navbar from "./components/navigation/Navbar";
import Hero from "./components/hero/Hero";
import PhotoStory from "./components/gallery/PhotoStory";
import BuySell from "./components/real-estate/BuySell";
import PropertySearch from "./components/properties/PropertySearch";
import Services from "./components/services/Services";
import MeetMarci from "./components/about/MeetMarci";
import PartnerMarquee from "./components/partners/PartnerMarquee";
import Contact from "./components/contact/Contact";
import Location from "./components/location/Location";
import GetItSold from "./components/get-it-sold/GetItSold";
import Footer from "./components/footer/Footer";
import PageLoader from "./components/loader/PageLoader";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <PageLoader onComplete={() => setLoading(false)} />
      ) : (
        <>
          <Navbar />

          <main>
            <Hero />
            <GetItSold />
            <PhotoStory />
            <BuySell />
            <PropertySearch />
            <Services />
            <MeetMarci />
            <PartnerMarquee />
            <Contact />
            <Location />
          </main>

          <Footer />
        </>
      )}
    </>
  );
}