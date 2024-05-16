import Search from '@/components/Search'
import React from 'react'

export const metadata = {
  title: "Search",
  description: "Search for the rooms that suits you. Filter the rooms according to the City, stay type, and Rent per month and choose among the matched options.",
};


const page = () => {
  return (
    <main className='min-h-dvh'>
    <Search />
    </main>
  )
}

export default page