'use client'

import React, { useState } from 'react'
import { Button } from './ui/button'
import RoomCard from './RoomCard'
import Link from 'next/link'
import { Frown } from 'lucide-react'

const MoreRooms = ({rooms}) => {

    const [show, setShow] = useState(false)
  return (
    <>
        <div className={show?"hidden":"flex flex-col items-center my-12"}>
            <p className="font-semibold text-lg mb-4 text-center">Continue exploring more rooms and flats</p>
            <Button className="bg-main" onClick={()=>{setShow(true)}}>Show More</Button>
        </div>

        <article className={show?'grid relative grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 mt-8':"hidden"}>
            {
                rooms.map((room)=>{
                    return (
                        <RoomCard room={room} key={room._id} />
                    )
                    
                })
            }

        </article>

        <div className={show && rooms.length==0?'w-full flex items-center flex-col gap-4 text-3xl font-semibold text-gray-500':"hidden"}>
                 <p>No more rooms available</p> <Frown size={32} />
        </div>
    
        <div className={show && rooms.length!=0 ?"flex flex-col items-center my-12":"hidden"}>
            <p className="font-semibold text-lg mb-4 text-center">Did not find your stay of your choice?</p>
            <Link href="/find-room">
                <Button className="bg-main">Search Rooms</Button>
            </Link>
        </div>

    </>
  )
}

export default MoreRooms