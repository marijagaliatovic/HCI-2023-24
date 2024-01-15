"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [isAccomodationOpen, setIsAccommodationOpen] = useState(false);

  const handleAccommodationHover = () => {
    setIsAccommodationOpen(true);
  };

  const handleAccommodationLeave = () => {
    setIsAccommodationOpen(false);
  };

  const handleAccommodationClick = () =>{
    setIsAccommodationOpen(false);
  }

  return (
    <nav className="hidden fixed w-full z-10 top-0 lg:block">
      <ul className="flex flex-row justify-center gap-6 pt-10 pl-20 pr-20 pb-5 ">
        <li className="text-base font-semibold not-italic hover:underline  cursor-pointer bg-transparent"><Link className="bg-transparent" href="/">HOME</Link></li>

        <li className="text-base font-semibold not-italic relative hover:underline cursor-pointer bg-transparent" 
          onMouseEnter={handleAccommodationHover}
          onMouseLeave={handleAccommodationLeave}> 
          <a className="bg-transparent">ACCOMODATION</a>
          {isAccomodationOpen && (
            <ul className="absolute z-10 left-1/2 transform -translate-x-1/2 p-2 w-52 bg-gray-200 rounded-md shadow-lg">
              <li className="bg-transparent">
                <Link href="/apartmentlistings" className="bg-gray-200 block px-4 py-2 text-sm font-semibold hover:bg-slate-500 transition duration-300 ease-in-out rounded-md " onClick={handleAccommodationClick}>APARTMENT LISTINGS</Link>
              </li>
              <li className="bg-transparent">
                <Link href="/specialoffers" className="bg-gray-200 block px-4 py-2 text-sm font-semibold hover:bg-slate-500 transition duration-300 ease-in-out rounded-md" onClick={handleAccommodationClick}>SPECIAL OFFERS</Link>
              </li>
              <li className="bg-transparent">
                <Link href="/reviews" className="bg-gray-200 block px-4 py-2 text-sm font-semibold hover:bg-slate-500 transition duration-300 ease-in-out rounded-md" onClick={handleAccommodationClick}>REVIEWS</Link>
              </li>
            </ul>
          )}
        </li>
        
        <li className="text-base font-semibold not-italic hover:underline cursor-pointer bg-transparent">
          <Link className = "bg-transparent" href="/contact">CONTACT US</Link>
        </li>

        <li className="text-base font-semibold not-italic hover:underline cursor-pointer bg-transparent">
          <Link className="bg-transparent" href="/signup">SIGN UP</Link>
        </li>
      </ul>
    </nav>
  );
}
