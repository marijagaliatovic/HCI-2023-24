import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

export type HamburgerProps = {
  open: boolean;
  clickHandler: Dispatch<SetStateAction<boolean>>;
};

export default function HamburgerMenu({ open, clickHandler }: HamburgerProps) {
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
    <>
      <div className="lg:hidden hover:cursor-pointer p-2 z-50" 
        onClick={() => {
                clickHandler(!open);
                handleNavBarClick();
            }}>
        <Bars3Icon className={`w-8 h-8 ${open ? "hidden" : "block"}`} />
        <XMarkIcon className={`w-8 h-8 ${open ? "block" : "hidden"}`} />
      </div>
      <nav className={`flex lg:hidden items-center justify-center hover:cursor-pointer p-10 w-screen absolute top-0 right-0 z-20 opacity-95 ${open ? "block" : "hidden"} `} onClick={handleNavBarClick}>
        <ul className="flex flex-col justify-start items-start gap-5 p-10 pb-5">
        <li className="text-base font-semibold not-italic tracking-widest hover:underline cursor-pointer"><Link href="/">Home</Link></li>

        <li className="text-base font-semibold not-italic tracking-widest relative hover:underline cursor-pointer"> 
          <a onClick={handleAccomodationClick}>Accomodation</a>
          {isAccomodationOpen && (
            <ul className="absolute z-10 left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
              <li className="block px-4 py-2 text-sm font-semibold hover:underline"><Link href="/">Apartment Listings</Link></li>
              <li className="block px-4 py-2 text-sm font-semibold hover:underline"><Link href="/">Special Offers</Link></li>
              <li className="block px-4 py-2 text-sm font-semibold hover:underline"><Link href="/">Amenities</Link></li>
              <li className="block px-4 py-2 text-sm font-semibold hover:underline"><Link href="/">Reviews</Link></li>
            </ul>
          )}
        </li>

        <li className="text-base font-semibold not-italic tracking-widest relative hover:underline cursor-pointer"> 
          <a onClick={handleInformationClick}>Information</a>
          {isInformationOpen && (
            <ul className="absolute z-10 left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
              <li className="block px-4 py-2 text-sm font-semibold hover:underline"><Link href="/">Booking Process</Link></li>
              <li className="block px-4 py-2 text-sm font-semibold hover:underline"><Link href="/">Cancellation Policies</Link></li>
              <li className="block px-4 py-2 text-sm font-semibold hover:underline"><Link href="/">Guest Rules</Link></li>
              <li className="block px-4 py-2 text-sm font-semibold hover:underline"><Link href="/">FAQ</Link></li>
            </ul>
          )}
        </li>

        <li className="text-base font-semibold not-italic tracking-widest relative hover:underline cursor-pointer"> 
          <a onClick={handleLocalServicesClick}>Local Services</a>
          {isLocalServicesOpen && (
            <ul className="absolute z-10 left-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
              <li className="block px-4 py-2 text-sm font-semibold hover:underline"><Link href="/">Tourist Agencies</Link></li>
              <li className="block px-4 py-2 text-sm font-semibold hover:underline"><Link href="/">Rent a Car</Link></li>
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
