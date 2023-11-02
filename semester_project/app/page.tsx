import HeroSection from "./components/HeroSection";
import WhatWeOffer from "./components/WhatWeOffer";

export default function Home() {

  return (
    <div className=" relative top-24 flex flex-col  align-between">
      <HeroSection/>
      <WhatWeOffer/>
    </div>
  )
}
