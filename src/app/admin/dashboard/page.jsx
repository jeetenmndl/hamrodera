import AllUsers from '@/components/admin/AllUsers'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <main className='px-4 md:px-20 py-4 md:py-8'>
    <h1 className='text-2xl lg:text-4xl font-bold mb-4 md:mt-4 md:mb-12'>Admin Dashboard</h1>

    <AllUsers />

    <div>admin dashboard 
        <br />
        <Link href="/admin"><Button>Back to admin</Button></Link>
    </div>
    </main>
  )
}

export default page