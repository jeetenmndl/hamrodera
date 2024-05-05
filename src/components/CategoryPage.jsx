
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import getAllRooms from '@/lib/actions/getAllRooms'
import RoomCard from '@/components/RoomCard';
import getRooms from '@/lib/actions/getRooms';

const CategoryPage = async () => {

const rooms = await getAllRooms();



  return (
        <Tabs defaultValue="rooms" className="w-full">
            <div className="flex justify-center sticky  top-4 z-30 ">
        <TabsList className="py-6 px-2 rounded-md">
            <TabsTrigger value="rooms" className="py-2 px-6 md:px-8">Rooms</TabsTrigger>
            <TabsTrigger value="flat" className="py-2 px-6 md:px-8">Flat</TabsTrigger>
            <TabsTrigger value="home" className="py-2 px-6 md:px-8">Home</TabsTrigger>
            <TabsTrigger value="office" className="py-2 px-6 md:px-8">Office</TabsTrigger>
        </TabsList>
        </div>
        {
            rooms.success?
            <>
        <TabsContent className="my-8" value="rooms">
        <article className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">
            {
                rooms.data.map((room)=>{
                    if(room.rooms.type=="Room"){
                     return (
                    <RoomCard key={room._id} room={room} />
                    )
                    }
                })
            }
            </article>
        </TabsContent>

        <TabsContent className="my-8" value="flat">
        <article className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">
            {
                rooms.data.map((room)=>{
                    if(room.rooms.type=="Flat"){
                     return (
                    <RoomCard key={room._id} room={room} />
                    )
                    }
                })
            }
            </article>
        </TabsContent>

        <TabsContent className="my-8" value="home">
        <article className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">
            {
                rooms.data.map((room)=>{
                    if(room.rooms.type=="Home"){
                     return (
                    <RoomCard key={room._id} room={room} />
                    )
                    }
                })
            }
            </article>
        </TabsContent>

        <TabsContent className="my-8" value="office">
        <article className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">
            {
                rooms.data.map((room)=>{
                    if(room.rooms.type=="Office"){
                     return (
                    <RoomCard key={room._id} room={room} />
                    )
                    }
                })
            }
            </article>
        </TabsContent>
        </>
        :
        <div>{rooms.error}</div>
        }
        </Tabs>

  )
}

export default CategoryPage;