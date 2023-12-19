import Image from "next/image";

interface accomodation{
    picture:{
        title:string
        url:string;
    }
    title:string;
    location:string;
    size:string;
    price:string;
}

const AccomodationItem = (item:accomodation) => {
  return (
            <div className="top-0 w-3/4 lg:w-1/4 bg-white flex flex-col justify-around items-center m-4 hover:shadow-2xl">
                 <div className="bg-white  relative p-4 m-3 w-44 h-32">
                    <Image className="" fill={true} src={item.picture.url} alt={item.picture.title} />
                </div>
                <div className="bg-white relative basis-6/12 w-8/12 m-4 flex flex-col justify-between gap-1 text-center ">
                    <h3 className="bg-white self-center text-2xl font-bold mb-4 hover:underline cursor-pointer font-serif not-italic tracking-widest">{item.title}</h3>
                    <div className="flex flex-col self-center justify-center m-3">
                        <div className="bg-white flex justify-center gap-1 items-end">
                            <p className="bg-white font-serif font-medium not-italic tracking-wide">{item.location}</p>
                        </div>
                        <div className="flex flex-col text-center bg-white">
                            <p className="bg-white self-center font-serif font-medium not-italic tracking-wide">{item.size}</p>
                            <p className="bg-white self-center font-serif font-medium not-italic tracking-wide">{item.price}</p>
                        </div>
                    </div>
                </div>
            </div>
  );
};

export default AccomodationItem;
