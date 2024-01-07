"use client"
import AccomodationItem from "../components/AccomodationItem";
import contentfulService from "@/lib/.contentfulClient";
import DateSearch from "../components/DateSearch";
import Footer from "../components/Footer";
import Filter from "../components/Filter";
import { apartmentsItem } from "@/lib/.contentfulClient";
import { useEffect, useState } from "react";

const ApartmentListings = () => {
  const [apartments, setApartments] = useState<apartmentsItem[]>([]);
  const [originalApartments, setOriginalApartments] = useState<apartmentsItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await contentfulService.getAllApartments();
        setApartments(data);
        setOriginalApartments(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch data only once when the component mounts

  const handleSetData = (newApartments: apartmentsItem[]) => {
    setApartments(newApartments);
  };

  return (
    <div className="relative top-0 lg:top-24 flex flex-col h-max">
      <div className="flex flex-col items-center">
        <div className="flex lg:flex-row flex-col justify-center gap-3">
          <DateSearch />
          <Filter data={originalApartments} setData={handleSetData} />
        </div>
        <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center w-4/5 relative lg:mx-20 lg:mt-4 lg:items-stretch">
          {apartments.map((item, index) => (
            <AccomodationItem key={index} {...item} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ApartmentListings;
