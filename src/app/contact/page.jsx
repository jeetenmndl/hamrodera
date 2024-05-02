import HeroHome from '@/components/HeroHome'
import React from 'react'

const page = () => {
  return (
    <main className='px-4 md:px-20 py-4 md:py-8'>
        <h1 className='text-3xl lg:text-5xl font-bold mb-4 md:mt-4 md:mb-12 text-center'>Contact</h1>

        <hr />

        <section className='py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12'>
            <div>
                <h2 className='text-2xl font-semibold sticky top-8'>For Advertisement</h2>
            </div>
            <article>
                <p>We are open to advertisement offers form institutions of related fields. People (mainly students) visit the page most of the time for finding their rooms which makes this perfect platform to showcase your advertisement and gain attention.</p>
                <ul className='list-disc pl-4 space-y-4 mt-4 md:mt-8'>
                    <li>Relatable and targeted audience.</li>
                    <li>Different slots available.</li>
                    <li>Flexibility in pricing and duration. </li>
                    <li className='font-medium'>Contact: 98XXXXXXXX</li>
                </ul>
            </article>
        </section>

        <hr />

        <section className='py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12'>
            <div>
                <h2 className='text-2xl font-semibold sticky top-8'>For Affiliate Programs</h2>
            </div>
            <article>
                <p>You can run Affiliate program campaign with Hamrodera where you can link your product and services with us and get access to the customer base.</p>
                <ul className='list-disc pl-4 space-y-4 mt-4 md:mt-8'>
                    <li>Showcase your product and services</li>
                    <li>Integrate within our website.</li>
                    <li>Greater reach and convenience. </li>
                    <li className='font-medium'>Contact: 98XXXXXXXX</li>
                </ul>
            </article>
        </section>


    </main>
  )
}

export default page