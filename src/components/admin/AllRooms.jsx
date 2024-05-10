import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { MessageSquareText, Phone, SquareArrowOutUpRight, Trash2 } from 'lucide-react'
import Link from 'next/link'
  

const AllRooms = () => {
  return (
    <section className=''>
    <Table className="rounded-lg">
    <TableCaption>List of all rooms.</TableCaption>
    <TableHeader className="bg-slate-900 rounded-lg">
        <TableRow className="">
        <TableHead className=" text-white w-16">Link</TableHead>
        <TableHead className=" text-white">City</TableHead>
        <TableHead className=" text-white">Type</TableHead>
        <TableHead className=" text-white">Price</TableHead>
        <TableHead className=" text-white">Area</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
      {
        [1,2,3,4,5].map((item)=>{
          return(
          <TableRow key={item}>
            <TableCell>
                <Link href={"/room/"+item}>
                    <SquareArrowOutUpRight className='cursor-pointer' size={20} strokeWidth={1.75} />
                </Link>
            </TableCell>
            <TableCell>Biratnagar</TableCell>
            <TableCell>9812345678</TableCell>
            <TableCell>3000</TableCell>
            <TableCell>Arniko college</TableCell>
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
    </section>

  )
}

export default AllRooms