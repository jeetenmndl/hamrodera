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
  

const AllUsers = () => {
  return (
    <section className='overflow-scroll'>
    <Table className="rounded-lg">
    <TableCaption>A list of your recent invoices.</TableCaption>
    <TableHeader className="bg-slate-900 rounded-lg">
        <TableRow className="">
        <TableHead className=" min-w-48 text-white">Name</TableHead>
        <TableHead className=" text-white">Phone</TableHead>
        <TableHead className=" text-white">Address</TableHead>
        <TableHead className="text-right text-white">Study</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        <TableRow>
        <TableCell>Jeeten Kumar Mandal</TableCell>
        <TableCell>9812345678</TableCell>
        <TableCell>Biratnagar 10</TableCell>
        <TableCell className="text-right">Arniko college biratnagar</TableCell>
        </TableRow>
        <TableRow>
        <TableCell>Jeeten Kumar Mandal</TableCell>
        <TableCell>9812345678</TableCell>
        <TableCell>Biratnagar 10</TableCell>
        <TableCell className="text-right">Arniko college biratnagar</TableCell>
        </TableRow><TableRow>
        <TableCell>Jeeten Kumar Mandal</TableCell>
        <TableCell>9812345678</TableCell>
        <TableCell>Biratnagar 10</TableCell>
        <TableCell className="text-right">Arniko college biratnagar</TableCell>
        </TableRow><TableRow>
        <TableCell>Jeeten Kumar Mandal</TableCell>
        <TableCell>9812345678</TableCell>
        <TableCell>Biratnagar 10</TableCell>
        <TableCell className="text-right">Arniko college biratnagar</TableCell>
        </TableRow><TableRow>
        <TableCell>Jeeten Kumar Mandal</TableCell>
        <TableCell>9812345678</TableCell>
        <TableCell>Biratnagar 10</TableCell>
        <TableCell className="text-right">Arniko college biratnagar</TableCell>
        </TableRow><TableRow>
        <TableCell>Jeeten Kumar Mandal</TableCell>
        <TableCell>9812345678</TableCell>
        <TableCell>Biratnagar 10</TableCell>
        <TableCell className="text-right">Arniko college biratnagar</TableCell>
        </TableRow>
    </TableBody>
    </Table>
    </section>

  )
}

export default AllUsers