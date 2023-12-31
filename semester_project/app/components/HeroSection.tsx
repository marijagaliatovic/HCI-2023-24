"use client"

import Link from "next/link";
import SlideShow from "./SlideShow";

export default function HeroSection(){ 

    return (
      <>
        <div className=" bg-white flex flex-col-reverse w-full justify-between items-center lg:my-4 lg:flex-row"> 
            <div className="bg-gray-600 lg:bg-white p-8 lg:m-2 flex flex-col items-center text-center justify-center basis-6/12">
              <div className="bg-gray-600 lg:bg-white  flex flex-col justify-center gap-1 text-center lg:m-1 ">
                <h1 className="bg-gray-600 lg:bg-white lg:text-black text-white self-center text-base mb-2 lg:text-3xl lg:font-bold xl:mb-4">Find Your Perfect Stay</h1>
                <p className="bg-gray-600 lg:bg-white  lg:text-black text-white self-center text-sm lg:text-base lg:font-semibold">Whether you prefer the convenience of a well-appointed room or the freedom of a private apartment, we have the perfect accommodation for your needs.</p>
              </div>
              <i className="decoration-black text-center not-italic text-sm lg:text-base font-semibold hover:underline rounded-xl lg:rounded-2xl mt-3 py-1 px-2"><Link href="/apartmentlistings">Apartments</Link></i>
            </div>

            <SlideShow/>  
        </div>

        
      </>
      
)
}