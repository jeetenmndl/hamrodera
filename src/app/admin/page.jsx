import AdminLogin from '@/components/admin/AdminLogin'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <main className='px-4 py-24 md:px-20 md:py-24 flex justify-center'>
      <AdminLogin />
    </main>
  )
}

export default page