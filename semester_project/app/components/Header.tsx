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


  return (
    <nav className="hidden fixed w-full z-10 top-0 lg:block">
      <ul className="flex flex-row justify-center gap-6 pt-10 pl-20 pr-20 pb-5">
        <li className="text-base font-semibold not-italic tracking-widest hover:underline  cursor-pointer"><Link href="/">Home</Link></li>

        <li className="text-base font-semibold not-italic tracking-widest relative hover:underline cursor-pointer" 
          onMouseEnter={handleAccommodationHover}
          onMouseLeave={handleAccommodationLeave}> 
          <a>Accomodation</a>
          {isAccomodationOpen && (
            <ul className="absolute z-10 left-0 py-2 w-48 bg-white rounded-md shadow-lg ">
              <li className="block px-4 py-2 text-sm font-semibold hover:underline"><Link href="/apartmentlistings">Apartment Listings</Link></li>
              <li className="block px-4 py-2 text-sm font-semibold hover:underline"><Link href="/specialoffers">Special Offers</Link></li>
              <li className="block px-4 py-2 text-sm font-semibold hover:underline"><Link href="/reviews">Reviews</Link></li>
            </ul>
          )}
        </li>
        
        <li className="text-base font-semibold not-italic tracking-widest hover:underline cursor-pointer">
          <Link href="/contact">Contact us</Link>
        </li>

        <li className="text-base font-semibold not-italic tracking-widest hover:underline cursor-pointer">
          <Link href="/signup">Sign up</Link>
        </li>
      </ul>
    </nav>
  );
}
