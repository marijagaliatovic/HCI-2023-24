import AccomodationItem from "../components/AccomodationItem"

export default function apartmentListings(){

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
        <div className="flex flex-row flex-wrap s justify-center top-24 relative mx-20 items-stretch">
            {Accomodation.map((items,index)=>(
                 <AccomodationItem  key={index} {...items}/>
            ))}
        </div>
        
         
    )
}
    