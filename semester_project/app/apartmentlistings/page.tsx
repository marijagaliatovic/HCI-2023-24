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
