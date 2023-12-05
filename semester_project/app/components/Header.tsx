"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [isAccomodationOpen, setIsAccomodationOpen] = useState(false);
  const [isInformationOpen, setIsInformationOpen] =useState(false);
  const [isLocalServicesOpen, setIsLocalSevicesOpen] =useState(false);

  const handleAccomodationClick = () => {
      setIsAccomodationOpen(!isAccomodationOpen); 
  };

  const handleInformationClick = () => {
    setIsInformationOpen(!isInformationOpen);
  };

  const handleLocalServicesClick = () => {
    setIsLocalSevicesOpen(!isLocalServicesOpen);
  };

  const handleNavBarClick = () => {
    if(isAccomodationOpen || isInformationOpen || isLocalServicesOpen )
    {
      setIsAccomodationOpen(false);
      setIsInformationOpen(false);
      setIsLocalSevicesOpen(false);
    }
  };
   
  return (
    <nav onClick={handleNavBarClick} className="hidden fixed w-full z-10 top-0 lg:block">
      <ul className="flex flex-row justify-center gap-5 pt-10 pl-20 pr-20 pb-5">
        <li className="text-base font-semibold not-italic tracking-widest hover:underline cursor-pointer"><Link href="/">Home</Link></li>

        <li className="text-base font-semibold not-italic tracking-widest relative hover:underline cursor-pointer"> 
          <a onClick={handleAccomodationClick}>Accomodation</a>
          {isAccomodationOpen && (
            <ul className="absolute z-10 left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg ">
              <li className="block px-4 py-2 text-sm font-semibold hover:underline"><Link href="/apartmentlistings">Apartment Listings</Link></li>
              <li className="block px-4 py-2 text-sm font-semibold hover:underline"><Link href="/specialoffers">Special Offers</Link></li>
              <li className="block px-4 py-2 text-sm font-semibold hover:underline"><Link href="/amenities">Amenities</Link></li>
              <li className="block px-4 py-2 text-sm font-semibold hover:underline"><Link href="/reviews">Reviews</Link></li>
            </ul>
          )}
        </li>

        <li className="text-base font-semibold not-italic tracking-widest relative hover:underline cursor-pointer"> 
          <a onClick={handleInformationClick}>Information</a>
          {isInformationOpen && (
            <ul className="absolute z-10 left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
              <li className="block px-4 py-2 text-sm font-semibold hover:underline"><Link href="/bookingprocess">Booking Process</Link></li>
              <li className="block px-4 py-2 text-sm font-semibold hover:underline"><Link href="/cancellation">Cancellation Policies</Link></li>
              <li className="block px-4 py-2 text-sm font-semibold hover:underline"><Link href="/rules">Guest Rules</Link></li>
              <li className="block px-4 py-2 text-sm font-semibold hover:underline"><Link href="/faq">FAQ</Link></li>
            </ul>
          )}
        </li>

        <li className="text-base font-semibold not-italic tracking-widest relative hover:underline cursor-pointer"> 
          <a onClick={handleLocalServicesClick}>Local Services</a>
          {isLocalServicesOpen && (
            <ul className="absolute z-10 left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
              <li className="block px-4 py-2 text-sm font-semibold hover:underline"><Link href="/touristagencies">Tourist Agencies</Link></li>
              <li className="block px-4 py-2 text-sm font-semibold hover:underline"><Link href="/rentacar">Rent a Car</Link></li>
            </ul>
          )}
        </li>
        
        <li className="text-base font-semibold not-italic tracking-widest hover:underline cursor-pointer">
          <Link href="/contact">Contact us</Link>
        </li>
      </ul>
    </nav>
  );
}
