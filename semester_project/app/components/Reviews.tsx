import ReviewItem from "./ReviewItem";

export default function Reviews (){

    const items = [
        {
            picture:"/images/ai_sarah.jpg",
            alt:"Person 1",
            name:"Sarah",
            apartment:"apartment Nora",
            stars:5,
            text:"My recent stay at this apartment was an absolute delight. The space was not only beautifully furnished and spotlessly clean but also thoughtfully equipped with all the amenities I needed for a comfortable and convenient stay. The location was superb, allowing me to easily explore the city and enjoy local attractions. The host was incredibly responsive and made the whole experience seamless. I cant wait to return to this wonderful apartment for my next visit."
        },
        {
            picture:"/images/ai_James.jpg",
            alt:"Person 2",
            name:"James",
            apartment:"apartment Grgo",
            stars:4,
            text:"Staying in this apartment felt like a home away from home. It was impeccably clean and well-maintained, with a cozy and inviting atmosphere. The location was ideal, with easy access to restaurants, shops, and public transportation. The host was gracious and accommodating, making our stay stress-free and enjoyable. I can't recommend this apartment enough for anyone looking for a comfortable and stylish place to stay while exploring the city."
           }
    ];
    return(
    <div className="bg-gray-400 flex flex-col items-center relative lg:mt-12 py-8">
        <h2 className="bg-gray-400  font-bold underline text-xl lg:text-2xl self-center">Reviews</h2>
        <p className="bg-gray-400  font-medium text-sm lg:text-lg text-center px-6 my-4 lg:px-20 lg:mx-48">Discover the stories of our delighted guests who have experienced the comfort and convenience of our apartments. From seamless booking to unforgettable stays, we&apos;re thrilled to share their glowing testimonials. Explore the experiences that make us the ultimate choice for your next home away from home!</p>
        <div className="bg-gray-400 hidden lg:flex lg:flex-row justify-center gap-10">
          {items.map((item,index)=>(
            <ReviewItem key={index} {...item} />
          ))}

         </div>
         <div className="bg-gray-400 flex flex-col lg:hidden justify-center gap-10"> 
            <ReviewItem {...items[0]} />
         </div>
         <i className="bg-gray-400 not-italic font-bold hover:underline  lg:self-end lg:mr-44 cursor-pointer">View all</i>
    </div>
)}