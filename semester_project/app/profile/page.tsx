// import Footer from "../components/Footer";

import Link from "@/node_modules/next/link";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function profile() {
  return (
    <div className="flex flex-col min-h-screen">
    <div className="flex flex-col items-center relative lg:mt-12 py-8 w-full lg:max-content flex-grow ">
      <h2 className="font-bold text-xl lg:text-2xl self-center lg:mt-10 top-24">
        Account
      </h2>
      <div className="small-line"></div>
      <div className="bg-white mb-20 mt-10 pt-10 pb-10 mx-5 sm:mx-auto md:mx-auto max-w-md px-10 rounded-md shadow-lg">
        <div className="rounded-full bg-gray-100 w-36 h-36"></div>
        <label className="bg-white block mb-2 mt-10 text-sm font-semibold">
          Username: <a className="font-light bg-white ">Karla</a>
        </label>
        <label className="bg-white block mt-4 mb-2 text-sm font-semibold">
          Email: <a className="font-light bg-white ">karla@gmail.com</a>
        </label>
        <div className="text-center bg-white">
                 <Link href="\">
                     <button className="mt-5 bg-gray-400 font-bold p-2 rounded-md hover:bg-slate-600 shadow-xl">
                         Log out
                     </button>
                 </Link>
             </div>
      </div>  
    </div>
    <Footer/>
</div>
    
  );
}

// export default function profile(){
//   return (
//     <>
//         <NavBar/>
//         <div className="flex flex-col items-center relative lg:mt-12 py-8">
//             <h2 className="font-bold text-xl lg:text-2xl self-center lg:mt-10 top-24">Account</h2>
//             <div className="small-line"></div>
//        <div className="bg-white mt-10 pt-10 pb-10 mx-5 sm:mx-auto md:mx-auto max-w-md px-10 rounded-md shadow-lg"></div>
//          <div className="rounded-full bg-gray-100 w-36 h-36"></div>
//         <div className="bg-white mb-20 pb-10 mx-5 sm:mx-auto md:mx-auto max-w-md px-10 shadow-lg">
//             <label className="bg-white block mb-2 text-sm pt-10 font-semibold">Email:</label>
//             <label className="bg-white block mt-4 mb-2 text-sm font-semibold">Username: </label>
//             <div className="text-center bg-white">
//                 <Link href="\">
//                     <button className="mt-5 bg-gray-400 font-bold p-2 rounded-md hover:bg-slate-600 shadow-xl">
//                         Log out
//                     </button>
//                 </Link>
//             </div>
//         </div>
//         </div>
//         <Footer />
//     </>
// );
// }