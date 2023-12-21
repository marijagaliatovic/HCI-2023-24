import Link from "@/node_modules/next/link";
import ReviewItem from "./ReviewItem";
import getTwoReviews from "@/lib/cotentfulTwoReviews";

const Reviews = async () => {
  const reviews = await getTwoReviews();

  return (
    <div className="bg-gray-400 flex flex-col items-center relative lg:mt-12 py-8">
      <h2 className="bg-gray-400  font-bold text-xl lg:text-2xl self-center lg:mb-2">
        Reviews
      </h2>
      <div className="small-line"></div>
      <p className="bg-gray-400  font-medium text-sm lg:text-lg text-center px-6 my-4 lg:px-20 lg:mx-48">
        Discover the stories of our delighted guests who have experienced the
        comfort and convenience of our apartments. From seamless booking to
        unforgettable stays, we&apos;re thrilled to share their glowing
        testimonials. Explore the experiences that make us the ultimate choice
        for your next home away from home!
      </p>
      <div className="bg-gray-400 hidden lg:flex lg:flex-row justify-center gap-10">
        {reviews.map((item, index) => (
          <ReviewItem key={index} {...item} />
        ))}
      </div>
      <div className="bg-gray-400 block lg:hidden">
        {<ReviewItem key={0} {...reviews[0]} />}
      </div>
      <i className="bg-gray-400 not-italic font-bold hover:underline  lg:self-end lg:mr-44 cursor-pointer">
        <Link href="/reviews" className="bg-gray-400">
          View all
        </Link>
      </i>
    </div>
  );
};

export default Reviews;
