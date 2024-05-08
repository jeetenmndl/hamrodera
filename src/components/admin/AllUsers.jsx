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
    <Table className="rounded-lg">
    <TableCaption>A list of your recent invoices.</TableCaption>
    <TableHeader className="bg-slate-900 rounded-lg">
        <TableRow className="">
        <TableHead className="w-[100px] text-white">Invoice</TableHead>
        <TableHead className=" text-white">Status</TableHead>
        <TableHead className=" text-white">Method</TableHead>
        <TableHead className="text-right text-white">Amount</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        <TableRow>
        <TableCell className="font-medium">INV001</TableCell>
        <TableCell>Paid</TableCell>
        <TableCell>Credit Card</TableCell>
        <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
    </TableBody>
    </Table>

  )
}

export default AllUsers