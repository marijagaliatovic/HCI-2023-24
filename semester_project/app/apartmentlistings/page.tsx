import AccomodationItem from "../components/AccomodationItem"
import getAllApartments from "@/lib/.contentfulClient"

const apartmentListings = async () => {
    const apartments = await getAllApartments();

    return(
        <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center top-8 lg:top-24 relative lg:mx-20 lg:items-stretch">
            {apartments.map((items,index)=>(
                 <AccomodationItem  key={index} {...items}/>
            ))}
        </div>
    );
}

export default apartmentListings;
/* export default function apartmentListings(){

    const Accomodation = [
        {
            picture:"/images/slika_sobe_1.jpg",
            alt:"Image 1",
            title:"Apartment Nora",
            location:"Bacvice, Split",
            size:"2 bedroom apartment",
            price:"100€ night"
        },
        {
            picture:"/images/slika_sobe_2.jpg",
            alt:"Image 2",
            title:"Apartment Leo",
            location:"Spinut, Split",
            size:"Room apartment",
            price:"50€ night"
        },
        {
            picture:"/images/slika_sobe_3.jpg",
            alt:"Image 3",
            title:"Apartment Grgo",
            location:"Varos, Split",
            size:"1 bedroom apartment",
            price:"80€ night"
        },
        {
            picture:"/images/slika_sobe_4.jpg",
            alt:"Image 4",
            title:"Apartment Marta",
            location:"Meje, Split",
            size:"1 bedroom apartment",
            price:"80€ night"
        },
        {
            picture:"/images/slika_sobe_5.jpg",
            alt:"Image 5",
            title:"Apartment Kira",
            location:"Radunica, Split",
            size:"2 bedroom apartment",
            price:"100€ night"
        },
        {
            picture:"/images/slika_sobe_6.jpg",
            alt:"Image 6",
            title:"Apartment Lu",
            location:"Bacvice, Split",
            size:"1 bedroom apartment",
            price:"90€ night"
        }
]
      return (
        <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center top-8 lg:top-24 relative lg:mx-20 lg:items-stretch">
            {Accomodation.map((items,index)=>(
                 <AccomodationItem  key={index} {...items}/>
            ))}
        </div>
        
         
    )
}
     */