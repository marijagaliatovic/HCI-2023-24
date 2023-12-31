import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState,Dispatch, SetStateAction } from "react";
import { apartmentsItem } from "@/lib/.contentfulClient";
import contentfulService from "@/lib/.contentfulClient";


export type FilterProps = {
    setData: (newApartments: apartmentsItem[]) => void,
    data : apartmentsItem[]
  }

export default function Filter({setData,data}:FilterProps){
    const [isFiltersOpen,setIsFiltersOpen] = useState(false);
    const[type,setType] = useState(0);
    const[numberOfRooms,setNumberOfRooms] = useState(4);
    const [min,setMin] = useState<number>(50);
    const [max,setMax] = useState<number>(130);

    const handleFiltersClick = () =>{
        setIsFiltersOpen(!isFiltersOpen);
    }

    const closeFilter = () =>{
        setIsFiltersOpen(false);
    }

    const handleNumberOfRoomsClick = (num:number) => {
        setNumberOfRooms(num);
    }

    const useMin = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMin(Number(event.target.value));
        
    }

    const useMax = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMax(Number(event.target.value));
        
    }

    const handleTypeClick = (option:number) =>{
       setType(option);
    }

    const applyFilters = () => {
        let apartments = data.slice();
        if(type == 1)
        {
            apartments = apartments.filter(item => (item.apartment == false));
        }
        else if(type == 2)
        {
            apartments = apartments.filter(item => (item.apartment == true));
        }

        if (numberOfRooms == 0)
        {
            apartments = apartments.filter(item => (item.size == "Room"));
        }
        else if(numberOfRooms == 1)
        {
            apartments = apartments.filter(item => (item.size == "1 bedroom apartment"));
        }
        else if(numberOfRooms == 2)
        {
            apartments = apartments.filter(item => (item.size == "2 bedroom apartment"));
        }

        else if(numberOfRooms == 3)
        {
            apartments = apartments.filter(item => (item.size == "3 bedroom apartment"));
        }
        

        apartments = apartments.filter(item => (item.priceNumber >= min && item.priceNumber <= max));

        setData(apartments);       
    }

    const resetFilters = () =>{
        setMin(50);
        setMax(130);
        setType(0);
        setNumberOfRooms(4);
        setData(data);
        setIsFiltersOpen(false);
    }
    return(
        <>
        <div className="bg-white relative flex flex-row px-4 m-1 rounded-full justify-center gap-1 lg:items-center hover:underline cursor-pointer" onClick={handleFiltersClick}>
            <svg className="bg-white color: rgb(0, 0, 0);" height="25" viewBox="0 0 21 21" width="25" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 4)"><path d="m4.5 0c.55228475 0 1 .44771525 1 1v2c0 .55228475-.44771525 1-1 1s-1-.44771525-1-1v-2c0-.55228475.44771525-1 1-1z" fill="#000000"></path><path d="m16.5 2h-11" fill="#000000"></path><path d="m3.5 2h-3" fill="#000000"></path><path d="m4.5 10c.55228475 0 1 .4477153 1 1v2c0 .5522847-.44771525 1-1 1s-1-.4477153-1-1v-2c0-.5522847.44771525-1 1-1z" fill="#000000"></path><path d="m16.5 12h-11" fill="#000000"></path><path d="m3.5 12h-3" fill="#000000"></path><path d="m12.5 5c.5522847 0 1 .44771525 1 1v2c0 .55228475-.4477153 1-1 1s-1-.44771525-1-1v-2c0-.55228475.4477153-1 1-1z" fill="#000000"></path><path d="m11.5 7h-11" fill="#000000"></path><path d="m16.5 7h-3" fill="#000000" onClick={handleFiltersClick}></path></g></svg>
            <p className="bg-white font-bold" >Filters</p>
        </div>
        {(isFiltersOpen && (
            <div className="bg-slate-400 absolute z-10 top-10 flex flex-col lg:w-max w-7/8 h-max lg:h-max shadow-lg p-4 rounded-md m-5">
                <div className="bg-transparent flex flex-row items-center justify-start gap-48 border-b-2 border-slate-200 px-2 pb-3">
                    <div className="bg-transparent hover:bg-slate-200  rounded-full p-1"onClick={handleFiltersClick}><XMarkIcon className="w-4 h-4 bg-transparent"/></div>
                    <p className="bg-transparent font-bold ">Filters</p>
                </div>
                 
                 <div className="bg-slate-400 flex flex-col my-2">
                    <span className="bg-slate-400 mx-10 my-1 font-bold tracking-wide">Type of a place</span>
                    <div className="bg-slate-500  p-4 rounded-md shadow-lg flex flex-col lg:flex-row mx-10 lg:justify-around items-center gap-2 cursor-pointer">
                        <span className={`shadow-2xl basis-1/3 px-10 py-2 rounded-md text-center ${type === 0 ? 'bg-white' : ' bg-slate-400'}`} onClick={() => handleTypeClick(0)}>Any</span>
                        <span className={`shadow-2xl  basis-1/3 px-10 py-2 rounded-md text-center ${type === 1 ? 'bg-white' : 'bg-slate-400'}`} onClick={() => handleTypeClick(1)}>Room</span>
                        <span className={`shadow-2xl basis-1/3 px-10 py-2 rounded-md text-center ${type === 2 ? 'bg-white' : 'bg-slate-400'}`} onClick={() => handleTypeClick(2)}>Apartment</span>
                    </div>
                 </div>
                 <div className="bg-slate-400 flex flex-col my-2">
                    <span className="bg-slate-400 mx-10 my-1 font-bold tracking-wide">Number of rooms</span>
                    <div className="bg-slate-500  p-4 rounded-md shadow-lg flex flex-col lg:flex-row mx-10 justify-around items-center gap-2 cursor-pointer">
                        <span className={`shadow-2xl px-10 py-2 rounded-md ${numberOfRooms === 4 ? 'bg-white' : 'bg-slate-400'}`} onClick={()=>{handleNumberOfRoomsClick(4)}}>Any</span>
                        <span className={`shadow-2xl px-10 py-2 rounded-md ${numberOfRooms === 0 ? 'bg-white' : 'bg-slate-400'}`} onClick={()=>{handleNumberOfRoomsClick(0)}}>0</span>
                        <span className={`shadow-2xl px-10 py-2 rounded-md ${numberOfRooms === 1 ? 'bg-white' : 'bg-slate-400'}`} onClick={()=>{handleNumberOfRoomsClick(1)}}>1</span>
                        <span className={`shadow-2xl px-10 py-2 rounded-md ${numberOfRooms === 2 ? 'bg-white' : 'bg-slate-400'}`} onClick={()=>{handleNumberOfRoomsClick(2)}}>2</span>
                        <span className={`shadow-2xl px-10 py-2 rounded-md ${numberOfRooms === 3 ? 'bg-white' : 'bg-slate-400'}`} onClick={()=>{handleNumberOfRoomsClick(3)}}>3</span>
                        
                    </div>
                 </div>
                 
                 <div className="bg-slate-400 flex flex-col my-2">
                    <span className="bg-slate-400 mx-10 my-1 font-bold tracking-wide">Price range</span>
                    <div className="bg-slate-500 relative p-4 rounded-md shadow-lg flex flex-col lg:flex-row mx-10 justify-center items-center gap-2 cursor-pointer">
                        <div className="flex flex-col justify-center items-center bg-slate-500 text-sm basis-1/3">
                            <label className="bg-transparent block mb-2 text-sm text-centerfont-medium text-gray-900">Minimum</label>
                            <input className="text-gray-900 text-sm rounded-lg text-center block p-2.5 placeholder-black w-1/2 bg-slate-400 min" type="text" name="Min" placeholder={min.toString()} onChange={useMin}/>
                        </div>
                        <div className="flex flex-col justify-center items-center  bg-slate-500 text-sm basis-1/3">
                            <label className="bg-transparent block mb-2 text-sm font-medium text-center text-gray-900">Maximum</label>
                            <input className="text-gray-900 text-sm rounded-lg text-center block p-2.5 placeholder-black w-1/2 bg-slate-400 max" type="text" name="Max" placeholder={max.toString()} onChange={useMax}/>
                        </div>
                    </div>
                 </div>

                <div className="bg-transparent relative py-4 rounded-md  flex flex-col lg:flex-row mx-10 justify-between items-center gap-2 mt-2">
                <button className="bg-slate-500  w-max relative p-2 rounded-md shadow-xl  cursor-pointer hover:bg-white" onClick={resetFilters}>Reset</button>
                <button className="bg-slate-500  w-max relative p-2 rounded-md shadow-xl  cursor-pointer hover:bg-white" onClick={applyFilters}>Apply</button>
                </div>
                
            </div>
         ))}
         </>
    )
}