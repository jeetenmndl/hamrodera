import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>admin sign in
        <Link href="/admin/users"><Button>Dashboard</Button></Link>

    </div>
  )
}

export default page