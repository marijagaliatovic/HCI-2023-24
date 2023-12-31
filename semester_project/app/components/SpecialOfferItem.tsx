// SpecialOfferItem.js

import Image from "next/image";

interface offers {
    picture:string;
    alt:string;
    title:string;
    location:string;
    size:string;
    price:string;
    deal:string;
}

const SpecialOfferItem = (item:offers) => {
  return (
    <div className="top-0 scale-90 lg:w-1/4 bg-white flex flex-col justify-around items-center hover:shadow-2xl">
      <div className="bg-white flex justify-center p-4 mx-3 mt-3 basis-2/4">
        <Image className="absoulute h-fit w-fit" height={100} width={300} src={item.picture} alt={item.alt} />
      </div>
      <div className="bg-white relative basis-6/12 w-8/12 m-4 flex flex-col justify-between gap-1 text-center">
        <h3 className="bg-white self-center text-2xl font-bold hover:underline cursor-pointer font-serif not-italic tracking-widest">
          {item.title}
        </h3>
        <div className="flex flex-col self-center justify-center m-3">
          <div className="bg-white flex justify-center gap-1 items-end">
            <i className="bg-white" />
            <p className="bg-white font-serif font-medium not-italic tracking-wide">{item.location}</p>
          </div>
          <div className="flex flex-col text-center bg-white">
            <p className="bg-white self-center font-serif font-medium not-italic tracking-wide">{item.size}</p>
            <p className="bg-white self-center font-serif font-medium line-through not-italic tracking-wide">{item.price}</p>
            <p className="bg-white self-center font-serif font-bold not-italic tracking-wide">{item.deal}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOfferItem;