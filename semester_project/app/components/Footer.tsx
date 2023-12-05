export default function Footer(){
    return(
        <div className="bg-gray-600 flex flex-row justify-between lg:justify-start lg:gap-20 lg:mt-12 p-8">
            <div className="bg-gray-600 flex flex-col justify-start lg:ml-16">
                <h2 className="bg-gray-600 text-white font-serif mb-4 lg:text-xl">It-bookiraj</h2>
                <p className="bg-gray-600 text-white font-serif text-xs">Šibenska 19</p>
                <p className="bg-gray-600 text-white font-serif text-xs">21000 Split</p>
                <p className="bg-gray-600 text-white font-serif text-xs">+221 222 222</p>
            </div>
            <div className="bg-gray-600 flex flex-col justify-start">
                <h2 className="bg-gray-600 text-white font-serif mb-4 lg:text-xl">Navigation</h2>
                <p className="bg-gray-600 text-white font-serif text-xs">Home</p>
                <p className="bg-gray-600 text-white font-serif text-xs">Accomodation</p>
                <p className="bg-gray-600 text-white font-serif text-xs">Local Services</p>
            </div>
            <div className="bg-gray-600 flex flex-col justify-start">
                <h2 className="bg-gray-600 text-white font-serif mb-4 lg:text-xl">Information</h2>
                <p className="bg-gray-600 text-white font-serif text-xs">FAQ</p>
                <p className="bg-gray-600 text-white font-serif text-xs">Policies</p>
            </div>
        </div>
    )
}