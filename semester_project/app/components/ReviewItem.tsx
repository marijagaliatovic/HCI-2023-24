import Image from "next/image";

interface review{
    picture:string;
    alt:string;
    name:string;
    apartment:string;
    stars:number;
    text:string;
}

const ReviewItem = (item:review) => {
    return(
        <div className="bg-stone-200 top-0 flex flex-col items-center relative m-8 lg:m-4 lg:w-1/4 lg:p-4">
            <div className="bg-stone-200 flex flex-row justify-center gap-3 pt-5">
                <Image className="bg-stone-200 rounded-full self-start" height={50} width={100} src={item.picture} alt={item.alt}></Image>
                <div className="bg-stone-200 flex flex-col justify-start p-2 self-center">
                    <p className="bg-stone-200 font-extrabold text-lg">{item.name}</p>
                    <p className="bg-stone-200 font-bold text-base">for <span className="bg-stone-200 font-extrabold text-base">{item.apartment}</span></p>
                    <div className="bg-stone-200 flex items-center my-2">
                        <svg className="bg-stone-200 w-5 h-5 stroke-black stroke-1" aria-hidden="true" fill="black" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg className="bg-stone-200 w-5 h-5 stroke-black stroke-1 ms-1" aria-hidden="true" fill="black" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg className="bg-stone-200 w-5 h-5 stroke-black stroke-1 ms-1" aria-hidden="true" fill="black" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg className="bg-stone-200 w-5 h-5 stroke-black stroke-1 ms-1" aria-hidden="true" fill="black" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <svg className="bg-stone-200 w-5 h-5 stroke-black stroke-1 text-white ms-1" aria-hidden="true" fill="black" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <p className="bg-stone-200 text-center text-xs px-3 m-3 lg:font-bold">{item.text}</p>
        </div>
               
    )};

export default ReviewItem;