'use client'

import React, { useEffect, useState } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Frown, MessageSquareText, Phone, SquareArrowOutUpRight, Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useToast } from '../ui/use-toast'
import getRooms from '@/lib/actions/admin/allRooms'
import Link from 'next/link'

  

const AllRooms = () => {

  const router = useRouter();
  const {toast} = useToast();

  // const [auth, setAuth] = useState(null);
  const [allrooms, setallrooms] = useState({success:false, message: "Loading..."});


  useEffect(() => {
    let auth = sessionStorage.getItem("tempo");
    if(auth==null || auth==""){
      
      toast({
        title:"Oops!",
        description: "You do not have access",
        variant: "destructive"
      });
      
      console.log("not verified");
      
      setTimeout(() => {
        router.push("/admin");
      }, 2000);
    }else{
      console.log("verified")
      getRoomsfunc(auth);
      
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getRoomsfunc = async(phone)=>{
    const response = await getRooms(phone);
    setallrooms(response);
  }
  


  return (
    <section>
      {
        allrooms.success?
      <Table>
      <TableCaption>List of all users.</TableCaption>
      <TableHeader className="bg-slate-900 rounded-lg">
       <TableRow>
          <TableHead className=" w-16 text-white">Link</TableHead>
          <TableHead className=" min-w-48 text-white">City</TableHead>
          <TableHead className=" text-white">Type</TableHead>
          <TableHead className=" text-white">Rent</TableHead>
          <TableHead className=" text-white">Area</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          allrooms.data.map((item)=>{
            return(
            <TableRow key={item._id}>
              <TableCell>
              <Link disabled target='_blank' href={"/room/"+item._id}>
                  <SquareArrowOutUpRight className='cursor-pointer hover:text-green-600' size={20} strokeWidth={1.75} />
                  </Link>
              </TableCell>
              <TableCell>{item.city}</TableCell>
              <TableCell>{item.rooms.type}</TableCell>
              <TableCell>{item.rent}</TableCell>
              <TableCell>{item.area}</TableCell>
              {/* <TableCell className=" flex gap-4 lg:gap-6 justify-end">
                <MessageSquareText className='lg:text-gray-700 hover:text-blue-700 text-blue-700 cursor-pointer' size={20} strokeWidth={1.75} />
                <Phone className='lg:text-gray-700 hover:text-green-700 text-green-700 cursor-pointer' size={20} strokeWidth={1.75} />
                <Trash2 className='lg:text-gray-700 hover:text-red-700 text-red-700 cursor-pointer' size={20} strokeWidth={1.75} />
              </TableCell> */}
            </TableRow>
            )
          })
        }
      </TableBody>
      </Table>
      :
      <div className='w-full py-32 flex items-center flex-col gap-4 text-3xl font-semibold text-gray-500'>
              <p>{allrooms.message}</p> <Frown size={32} />
            </div>
      }
    </section>

  )
}

export default AllRooms