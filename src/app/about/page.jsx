import HeroHome from '@/components/HeroHome'
import React from 'react'

export const metadata = {
    title: "About",
    description: "Introducing hamrodera, your go-to destination for seamless room hunting. Whether you're a student, a working professional, or someone in search of a cozy space to call your own, hamrodera has got you covered!",
  };
  

const page = () => {
  return (
    <>
    
    <main className='px-4 md:px-20 py-4 md:py-8'>
        <h1 className='text-3xl lg:text-5xl font-bold mb-4 md:mt-4 md:mb-12 text-center'>About</h1>

        <hr />

        <section className='py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12'>
            <div>
                <h2 className='text-2xl font-semibold sticky top-8'>About Hamrodera</h2>
            </div>
            <article>
                <p>Hamrodera is a platform where you can find the rooms, flats, and offices easily within your required location. You can also get access to huge audience if you need to rent your property.</p>
                <ul className='list-disc pl-4 space-y-4 mt-4 md:mt-8'>
                    <li>We do not charge any commission.</li>
                    <li>Its a free to use platform without any charges.</li>
                    <li>You can buy, sell, search rooms of your choice. </li>
                    <li>We are here to provide quality service for both the parties reducing your effort and saving time.</li>
                </ul>
            </article>
        </section>

        <hr />


    </main>

    <HeroHome />
        
    </>
  )
}

export default page