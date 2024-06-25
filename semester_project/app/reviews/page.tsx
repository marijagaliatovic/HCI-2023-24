"use client";
import Footer from "../components/Footer";
import ReviewItem from "../components/ReviewItem";
import getAllReviews from "@/lib/contentfulAllReviews";
import { useEffect, useState } from "react";
import { reviewsItem } from "@/lib/contentfulAllReviews";

const Reviews = () => {
    const [reviews, setReviews] = useState<reviewsItem[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getAllReviews();
          setReviews(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      fetchData();
    }, []);
    

    return(
      <>
        <div className="flex flex-col items-center relative lg:mt-12 py-8">
            <h2 className="font-bold text-xl lg:text-2xl self-center mt-10 top-24">Reviews</h2>
            <div className="small-line"></div>
            <div className="flex flex-col lg:flex-row flex-wrap items-center  justify-center top-8 lg:top-10 relative lg:mx-20 lg:items-stretch ">
              {reviews.map((item, index)=>(
                <ReviewItem key={index} {...item} />
              ))}
             </div>
        </div>
        <Footer/>
      </>
    );
};

export default Reviews;