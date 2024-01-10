import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

export type HamburgerProps = {
  open: boolean;
  clickHandler: Dispatch<SetStateAction<boolean>>;
};

export default function HamburgerMenu({ open, clickHandler }: HamburgerProps) {
    const [isAccommodationOpen, setIsAccommodationOpen] = useState(false);
  
    const handleAccommodationHover = () => {
      setIsAccommodationOpen(true);
    };
  
    const handleAccommodationLeave = () => {
      setIsAccommodationOpen(false);
    };

    const handleNavBarClick = () => {
      if(isAccommodationOpen)
      {
        setIsAccommodationOpen(false);
      }
    };
    
  return (
    <>
      <div className="bg-transparent lg:hidden hover:cursor-pointer p-2 z-50" 
        onClick={() => {
                clickHandler(!open);
                handleNavBarClick();
            }}>
        <Bars3Icon className={` bg-transparent w-6 h-6 ${open ? "hidden" : "block"}`} />
        <XMarkIcon className={`bg-transparent w-4 h-4 ${open ? "block" : "hidden"}`} />
      </div>
      <nav className={`flex lg:hidden items-center justify-center hover:cursor-pointer p-10 w-screen absolute top-0 right-0 z-20 opacity-95 ${open ? "block" : "hidden"} `} onClick={handleNavBarClick}>
        <ul className="flex flex-col justify-start items-start gap-5 p-10 pb-5">
        <li className="text-base font-semibold not-italic tracking-widest hover:underline cursor-pointer"><Link href="/">Home</Link></li>

        <li className="text-base font-semibold not-italic tracking-widest relative hover:underline cursor-pointer" 
          onMouseEnter={handleAccommodationHover}
          onMouseLeave={handleAccommodationLeave}> 
          <a>Accomodation</a>
          {isAccommodationOpen && (
            <ul className="absolute z-10 left-0 py-2 w-max  bg-white rounded-md shadow-2xl ">
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
    </>
  );
}
