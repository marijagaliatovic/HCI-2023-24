"use client"
import Image from "next/image"
export default function WhatWeOffer(){
    return(
        <div className="flex flex-row justify-center h-min mt-12 mx-12 mb-24">
            <Image  src="/images/split.jpg" width={800} height={200}  alt="slika"/>
            <div className="bg-white  w-1/2 grid grid-cols-2 grid-rows-2 ">
                <div className="inline-grid">
                    <p className="bg-slate-200 p-14 text-center font-serif font-medium not-italic tracking-wide">Explore&apos; our varied accommodations, from cozy rooms in Split's historic center to stunning sea-view apartments, catering to every traveler's preference.</p>
                </div>
                <div className="inline-grid">
                    <p className="bg-slate-300 p-14 text-center font-serif font-medium not-italic tracking-wide">Experience&apos; the charm of Split's old town or the allure of its seaside views with our diverse location options.</p>
                </div>
                <div className="inline-grid">
                    <p className="bg-slate-400 p-14 text-center font-serif font-medium not-italic tracking-wide">Elegant&apos; furnishings, fully equipped kitchens, and spacious terraces are just a glimpse of the exceptional amenities we provide for your perfect stay.</p>
                </div>
                <div className="inline-grid">
                    <p className="bg-slate-500 p-14 text-center font-serif font-medium not-italic tracking-wide">Discover&apos; the best of the area with our personalized recommendations, enhancing your stay with exclusive local insights we offer.</p>
                </div>
            </div>
        </div>
    )
}