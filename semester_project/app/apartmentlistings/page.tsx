import Image from "next/image"
export default function apartmentListings(){
      return (
        <div className="flex flex-row flex-wrap s justify-center top-24 relative mx-20 items-stretch">

            <div className="top-0  w-1/4 bg-white flex flex-col justify-around items-center m-4 hover:scale-105">
                <div className="bg-white flex justify-center p-4  m-3 basis-2/4">
                    <Image className="absoulute h-fit w-fit" height={200} width={300} src="/images/slika_sobe_1.jpg" alt="Image 1"/>
                </div>
                <div className="bg-white relative basis-6/12 w-8/12 m-4 flex flex-col justify-between gap-1 text-center ">
                    <h3 className="bg-white self-center text-2xl font-bold mb-4 hover:underline cursor-pointer font-serif not-italic tracking-widest">Apartment Nora</h3>
                    <div className="flex flex-col self-center justify-center m-3">
                        <div className="bg-white flex justify-center gap-1 items-end">
                            <i className="bg-white "></i>
                            <p className="bg-white font-serif font-medium not-italic tracking-wide">Bacvice, Split</p>
                        </div>
                        <div className="flex flex-col text-center bg-white">
                            <p className="bg-white self-center font-serif font-medium not-italic tracking-wide">2 bedroom apartment</p>
                            <p className="bg-white self-center font-serif font-medium not-italic tracking-wide">100€ night</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="top-0  w-1/4 bg-white flex flex-col justify-around items-center m-4 hover:scale-105">
                <div className="bg-white flex justify-center p-4  m-3 basis-2/4">
                    <Image className="absoulute h-fit w-fit" height={200} width={300} src="/images/slika_sobe_2.jpg" alt="Image 2"/>
                </div>
                <div className="bg-white relative basis-6/12 w-8/12 m-4 flex flex-col justify-between gap-1 text-center ">
                    <h3 className="bg-white self-center text-2xl font-bold mb-4 hover:underline cursor-pointer font-serif not-italic tracking-widest">Apartment Leo</h3>
                    <div className="flex flex-col self-center justify-center m-3">
                        <div className="bg-white flex justify-center gap-1 items-end">
                            <i className="bg-white "></i>
                            <p className="bg-white font-serif font-medium not-italic tracking-wide">Spinut, Split</p>
                        </div>
                        <div className="flex flex-col text-center bg-white">
                            <p className="bg-white self-center font-serif font-medium not-italic tracking-wide">Room</p>
                            <p className="bg-white self-center font-serif font-medium not-italic tracking-wide">50€ night</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="top-0  w-1/4 bg-white flex flex-col justify-around items-center m-4 hover:scale-105">
                <div className="bg-white flex justify-center p-4  m-3 basis-2/4">
                    <Image className="absoulute h-fit w-fit" height={200} width={300} src="/images/slika_sobe_3.jpg" alt="Image 3"/>
                </div>
                <div className="bg-white relative basis-6/12 w-8/12 m-4 flex flex-col justify-between gap-1 text-center ">
                    <h3 className="bg-white self-center text-2xl font-bold mb-4 hover:underline cursor-pointer font-serif not-italic tracking-widest">Apartment Grgo</h3>
                    <div className="flex flex-col self-center justify-center m-3">
                        <div className="bg-white flex justify-center gap-1 items-end">
                            <i className="bg-white "></i>
                            <p className="bg-white font-serif font-medium not-italic tracking-wide">Varos, Split</p>
                        </div>
                        <div className="flex flex-col text-center bg-white">
                            <p className="bg-white self-center font-serif font-medium not-italic tracking-wide">1 bedroom apartment</p>
                            <p className="bg-white self-center font-serif font-medium not-italic tracking-wide">80€ night</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="top-0  w-1/4 bg-white flex flex-col justify-around items-center m-4 hover:scale-105">
                <div className="bg-white flex justify-center p-4  m-3 basis-2/4">
                    <Image className="absoulute h-fit w-fit" height={200} width={300} src="/images/slika_sobe_4.jpg" alt="Image 4"/>
                </div>
                <div className="bg-white relative basis-6/12 w-8/12 m-4 flex flex-col justify-between gap-1 text-center ">
                    <h3 className="bg-white self-center text-2xl font-bold mb-4 hover:underline cursor-pointer font-serif not-italic tracking-widest">Apartment Marta</h3>
                    <div className="flex flex-col self-center justify-center m-3">
                        <div className="bg-white flex justify-center gap-1 items-end">
                            <i className="bg-white "></i>
                            <p className="bg-white font-serif font-medium not-italic tracking-wide">Meje, Split</p>
                        </div>
                        <div className="flex flex-col text-center bg-white">
                            <p className="bg-white self-center font-serif font-medium not-italic tracking-wide">1 bedroom apartment</p>
                            <p className="bg-white self-center font-serif font-medium not-italic tracking-wide">80€ night</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="top-0  w-1/4 bg-white flex flex-col justify-around items-center m-4 hover:scale-105">
                <div className="bg-white flex justify-center p-4  m-3 basis-2/4">
                    <Image className="absoulute h-fit w-fit" height={200} width={300} src="/images/slika_sobe_5.jpg" alt="Image 5"/>
                </div>
                <div className="bg-white relative basis-6/12 w-8/12 m-4 flex flex-col justify-between gap-1 text-center ">
                    <h3 className="bg-white self-center text-2xl font-bold mb-4 hover:underline cursor-pointer font-serif not-italic tracking-widest">Apartment Kira</h3>
                    <div className="flex flex-col self-center justify-center m-3">
                        <div className="bg-white flex justify-center gap-1 items-end">
                            <i className="bg-white "></i>
                            <p className="bg-white font-serif font-medium not-italic tracking-wide">Radunica, Split</p>
                        </div>
                        <div className="flex flex-col text-center bg-white">
                            <p className="bg-white self-center font-serif font-medium not-italic tracking-wide">2 bedroom apartment</p>
                            <p className="bg-white self-center font-serif font-medium not-italic tracking-wide">100€ night</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="top-0  w-1/4 bg-white flex flex-col justify-around items-center m-4 hover:scale-105">
                <div className="bg-white flex justify-center p-4  m-3 basis-2/4">
                    <Image className="absoulute h-fit w-fit" height={200} width={300} src="/images/slika_sobe_6.jpg" alt="Image 6"/>
                </div>
                <div className="bg-white relative basis-6/12 w-8/12 m-4 flex flex-col justify-between gap-1 text-center ">
                    <h3 className="bg-white self-center text-2xl font-bold mb-4 hover:underline cursor-pointer font-serif not-italic tracking-widest">Apartment Lu</h3>
                    <div className="flex flex-col self-center justify-center m-3">
                        <div className="bg-white flex justify-center gap-1 items-end">
                            <i className="bg-white "></i>
                            <p className="bg-white font-serif font-medium not-italic tracking-wide">Bacvice, Split</p>
                        </div>
                        <div className="flex flex-col text-center bg-white">
                            <p className="bg-white self-center font-serif font-medium not-italic tracking-wide">1 bedroom apartment</p>
                            <p className="bg-white self-center font-serif font-medium not-italic tracking-wide">90€ night</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        
         
    )
}
    