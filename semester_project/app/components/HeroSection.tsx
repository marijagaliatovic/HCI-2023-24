"use client"

import Link from "next/link";
import SlideShow from "./SlideShow";

export default function HeroSection(){ 

    return (
      <div className=" bg-white flex flex-row justify-between items-center my-4 mx-12 mb-24">
          <div className="bg-white p-14  m-3 flex flex-col items-center text-center justify-center basis-6/12">
            <div className="bg-white flex flex-col justify-center gap-1 text-center m-1">
              <h1 className="bg-white self-center text-3xl font-bold mb-4">Find Your Perfect Stay</h1>
              <p className="bg-white self-center font-semibold">Whether you prefer the convenience of a well-appointed room or the freedom of a private apartment, we have the perfect accommodation for your needs.</p>
            </div>
            <i className="decoration-black bg-gray_background text-center not-italic font-semibold hover:underline rounded-2xl mt-2 py-1 px-2"><Link href="/apartmentlistings">Apartmants</Link></i>
          </div>

          <SlideShow/>  
      </div>
)
}