import React from "react";
import SlideShow from "@/app/components/SlideShow";
import Footer from "@/app/components/Footer";
import DateRange from "@/app/components/DateSearch";
import BookNow from "@/app/components/BookNow";
import contentfulService from "@/lib/.contentfulClient";
import Apartment from "@/app/components/Apartment";

type Params = {
  params: {
    apartmentId: string;
  };
};

const ApartmentPage = async ({ params }: Params) => {
  const { apartmentId } = params;
  const apartment = await contentfulService.getApartmentById(apartmentId);

  if (!apartment) {
    return <div>Apartment not found</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full lg:max-content flex-grow">
      <Apartment key={apartmentId} apartment={{
        title: apartment.title,
        location: apartment.location,
<<<<<<< HEAD
        information: apartment.information,
        whatWeOffer: apartment.whatWeOffer,
        priceNumber: apartment.priceNumber,
=======
        price: apartment.priceNumber,
>>>>>>> 4d181f626ba5ca3918cace740fcb7a31f55d3604
        apartmentId: apartment.apartmentId
      }} />
      </div>
      <Footer />
    </div>
  );
};

export default ApartmentPage;
