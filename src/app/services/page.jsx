import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Banner1 from '@/../public/banner1.png'
import Banner2 from '@/../public/banner2.png'
import {ChevronRight} from 'lucide-react'

export const metadata = {
    title: "Services",
    description: "See the details of all the services provided by hamrodera.",
  };
  

const page = () => {
  return (

    
<section className=" my-8 md:my-24 mx-4 md:mx-20">
<article className="grid grid-cols-1 md:grid-cols-2 gap-8">

    <div className="md:flex rounded bg-gray-100 overflow-hidden shadow-sm border border-gray-200">
        <div className="md:grid place-content-center w-full md:w-2/5 overflow-hidden bg-brick">
            <Image src={Banner1} alt="buy" className=" h-52 w-full md:w-max" />
        </div>
        <div className="md:w-3/5 py-3 md:py-8 px-3 md:px-6 flex flex-col justify-between border-b-2 border-transparent hover:border-main duration-500">
            <h3 className="text-xl md:text-2xl font-semibold">Rent your room, flat, home</h3>
            <p className="text-sm  italic text-gray-700 mt-2 md:mt-0">Upload details about your rooms and we will do the finding job.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="/post-room" className="text-333 hover:underline">Upload Room</Link>
            <ChevronRight />
            </div>
        </div>
    </div>

    <div className="md:flex rounded bg-gray-100 overflow-hidden shadow-sm border border-gray-200">
        <div className="md:grid place-content-center md:w-2/5 overflow-hidden bg-brick">
            <Image src={Banner2} alt="buy" className=" h-52 w-full md:w-max" />
        </div>
        <div className="md:w-3/5 py-3 md:py-8 px-3 md:px-6  flex flex-col justify-between border-b-2 border-transparent hover:border-main duration-500">
            <h3 className="text-xl md:text-2xl font-semibold">Find available rooms</h3>
            <p className="text-sm italic text-gray-700 mt-2 md:mt-0">Choose and book rooms of your choice at required location.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="/" className="text-333 hover:underline">View Rooms</Link>
            <ChevronRight />
            </div>
        </div>
    </div>
    
    <div className="md:flex rounded bg-gray-100 overflow-hidden shadow-sm border border-gray-200">
        <div className="md:grid place-content-center w-full md:w-2/5 overflow-hidden bg-brick">
            <Image src={Banner1} alt="buy" className=" h-52 w-full md:w-max" />
        </div>
        <div className="md:w-3/5 py-3 md:py-8 px-3 md:px-6 flex flex-col justify-between border-b-2 border-transparent hover:border-main duration-500">
            <h3 className="text-xl md:text-2xl font-semibold">Search and filter rooms.</h3>
            <p className="text-sm  italic text-gray-700 mt-2 md:mt-0">Filter the rooms on the basis of city, type of stay, and rent amount.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="/find-room" className="text-333 hover:underline">Search room</Link>
            <ChevronRight />
            </div>
        </div>
    </div>

    <div className="md:flex rounded bg-gray-100 overflow-hidden shadow-sm border border-gray-200">
        <div className="md:grid place-content-center md:w-2/5 overflow-hidden bg-brick">
            <Image src={Banner2} alt="buy" className=" h-52 w-full md:w-max" />
        </div>
        <div className="md:w-3/5 py-3 md:py-8 px-3 md:px-6  flex flex-col justify-between border-b-2 border-transparent hover:border-main duration-500">
            <h3 className="text-xl md:text-2xl font-semibold">View your profile.</h3>
            <p className="text-sm italic text-gray-700 mt-2 md:mt-0">View your details and status of your room at profile page</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="/profile" className="text-333 hover:underline">View Profile</Link>
            <ChevronRight />
            </div>
        </div>
    </div>


</article>
</section>
    
  )
}

export default page