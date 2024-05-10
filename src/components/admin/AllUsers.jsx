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
import { MessageSquareText, Phone, Trash2 } from 'lucide-react'
  

const AllUsers = () => {
  return (
    <section className=''>
    <Table className="rounded-lg">
    <TableCaption>List of all users.</TableCaption>
    <TableHeader className="bg-slate-900 rounded-lg">
        <TableRow className="">
        <TableHead className=" min-w-48 text-white">Name</TableHead>
        <TableHead className=" text-white">Phone</TableHead>
        <TableHead className=" text-white">Address</TableHead>
        <TableHead className=" text-white">Study</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
      {
        [1,2,3,4,5].map((item)=>{
          return(
          <TableRow key={item}>
            <TableCell>Jeeten Kumar Mandal</TableCell>
            <TableCell>9812345678</TableCell>
            <TableCell>Biratnagar 10</TableCell>
            <TableCell>Arniko college biratnagar</TableCell>
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

export default AllUsers