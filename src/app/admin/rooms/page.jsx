import AllRooms from '@/components/admin/AllRooms'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <main className='px-4 md:px-20 py-4 md:py-8'>
    <div className=' mb-4 md:mt-4 md:mb-12 flex justify-between'>
    <h1 className='text-2xl lg:text-4xl font-bold'>Admin Dashboard</h1>
    <div className='flex gap-4'>
      <Link href="/admin/rooms"><Button>All Rooms</Button></Link>
      <Link href="/admin/users"><Button variant="secondary">All Users</Button></Link>
    </div>
    </div>

    <AllRooms />
    

    </main>
  )
}

export default page