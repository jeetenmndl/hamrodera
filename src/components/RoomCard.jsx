import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Img1 from '@/../public/img1.jpg'
import { Button } from './ui/button'
import {ChevronRight} from 'lucide-react'

const RoomCard = ({room}) => {
  return (
    <Link href={"/room/"+room._id}>
    <div className='cursor-pointer border-b-2 border-transparent hover:border-main duration-500'>

        <div className=" relative flex justify-center imageBox max-w-full md:max-w-80 h-72 rounded-lg overflow-hidden">
            {/* <Image className='rounded-lg' layout='fill' objectFit='cover' src={room.photos[0]} alt='room in Biratnagar'/> */}
            <Image className='rounded-lg h-full min-w-fit' src={room.photos[0]} width={400} height={300} alt='room in Biratnagar'/>
        </div>

        <div className="descBox text-sm my-4">
          
            <h3 className='font-semibold text-gray-800 text-base overflow-hidden whitespace-nowrap text-ellipsis capitalize'>{room.area}, {room.city}</h3>
            <p className='text-gray-500 overflow-hidden whitespace-nowrap text-ellipsis'>{room.neighbourhood}</p>
            <p className='text-gray-500'>{room.rooms.type}, {room.rooms.roomSize}</p>

            <div className="flex justify-between items-end">
              <p className='text-gray-800 font-medium mt-2'>Rs {room.rent} <span className='font-light'>/month</span></p>

                <Button variant="outline" size="icon"  className=" size-8 hover:bg-main hover:text-white" >
                  <ChevronRight size={20} />
                </Button>
                
            </div>

        </div>

    </div>
    </Link>
  )
}

export default RoomCard