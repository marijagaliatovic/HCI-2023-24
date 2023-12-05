import Image from "next/image"
import SpecialOfferItem from "./SpecialOfferItem";

export default function SpecialOffers(){
    
    const offers = [
        {
            picture: "/images/slika_sobe_1.jpg",
            alt:"Image 1",
            title:"Apartment Nora",
            location:"Bacvice, Split",
            size:"2 bedroom apartment",
            price:"100€ night",
            deal:"80€ night",
        },
        {
            picture: "/images/slika_sobe_3.jpg",
            alt:"Image 3",
            title:"Apartment Kira",
            location:"Radunica, Split",
            size:"2 bedroom apartment",
            price:"100€ night",
            deal:"80€ night",
        },
        {
            picture: "/images/slika_sobe_5.jpg",
            alt:"Image 5",
            title:"Apartment Grgo",
            location:"Varos, Split",
            size:"1 bedroom apartment",
            price:"80€ night",
            deal:"50€ night",
        }];


   
      return (
        <div className="bg-stone-200 flex flex-col items-center relative mt-12 py-8">

        <h2 className="bg-stone-200 self-center font-bold not-italic underline text-2xl mt-5 mb-8">Special Offers</h2>
        <div className="bg-stone-200 flex flex-row justify-center gap-10">
            {offers.map((offer,index)=>(
                <SpecialOfferItem key={index} {...offer}/>
            ))}
        </div>

        <i className="bg-stone-200 not-italic font-bold hover:underline self-end mr-44 cursor-pointer">View all</i>
        </div>
    )
}
    