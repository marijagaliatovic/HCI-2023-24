import HeroSection from "./components/HeroSection";
import WhatWeOffer from "./components/WhatWeOffer";
import SpecialOffers from "./components/SpecialOffers";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

export default function Home() {

  return (
    <div className=" relative top-24 flex flex-col  align-between">
      <HeroSection/>
      <WhatWeOffer/>
      <SpecialOffers/>
      <Reviews/>
      <Footer/>
    </div>
  )
}
