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
import { File, Frown, MessageSquareText, Phone, Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useToast } from '../ui/use-toast'
import getAllUsers from '@/lib/actions/admin/getAllUsers'
import Link from 'next/link'

  

const AllUsers = () => {

  const router = useRouter();
  const {toast} = useToast();

  // const [auth, setAuth] = useState(null);
  const [allusers, setallusers] = useState({success:false, message: "Loading..."});


  useEffect(() => {
    let auth = sessionStorage.getItem("tempo");
    if(auth==null || auth==""){
      toast({
        title:"Oops!",
        description: "You do not have access",
        variant: "destructive"
      });

      console.log("not verified")
      
      setTimeout(() => {
        router.push("/admin");
      }, 2000);
    }else{
      console.log("verified")
      getUsers(auth);
      
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getUsers = async(phone)=>{
    const response = await getAllUsers(phone);
    setallusers(response);
  }
  


  return (
    <section>
      {
        allusers.success?
      <Table className="rounded-lg">
      <TableCaption>List of all users.</TableCaption>
      <TableHeader className="bg-slate-900 rounded-lg">
       <TableRow className="">
          <TableHead className=" min-w-48 text-white">Name</TableHead>
          <TableHead className=" text-white">Phone</TableHead>
          <TableHead className=" text-white">Address</TableHead>
          <TableHead className=" text-white">Study</TableHead>
          <TableHead className=" text-white">Document</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          allusers.data.map((item)=>{
            return(
            <TableRow key={item._id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell>{item.address}</TableCell>
              <TableCell>{item.study}</TableCell>
              <TableCell>
                {
                  item.document?
                  <Link disabled target='_blank' href={item.document}>
                  <File className='cursor-pointer hover:text-green-600' size={20} strokeWidth={1.75} />
                  </Link>
                  :
                  ""

                }
              </TableCell>
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
              <p>{allusers.message}</p> <Frown size={32} />
            </div>
      }
    </section>

  )
}

export default AllUsers