import React from 'react'

const page = () => {
  return (
    <main className='px-4 md:px-20 py-4 md:py-8'>
        <h1 className='text-3xl lg:text-5xl font-bold my-4 md:my-12 text-center'>Guide</h1>

        <hr />

        <section className='py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12'>
            <div>
                <h2 className='text-2xl font-semibold sticky top-8'>Steps for buying rooms</h2>
            </div>
            <article>
                <p>Buying the room is very easy and convenient at Hamrodera. You can follow these simple steps in order to complete the procedure.</p>
                <ul className='disc space-y-4 mt-4 md:mt-8'>
                    <li><span className='font-semibold'>Step 1: </span>Log in or register at first.</li>
                    <li><span className='font-semibold'>Step 2: </span>Choose the room you find perfect for you</li>
                    <li><span className='font-semibold'>Step 3: </span>After seeing the location, photos, rooms, and facilities press the Book Now button. </li>
                    <li><span className='font-semibold'>Step 4: </span>You will receive the phone number of owner through SMS in no time. You can contact and make a deal.</li>
                </ul>
            </article>
        </section>

        <hr />

        <section className='py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12'>
            <div>
                <h2 className='text-2xl font-semibold sticky top-8'>Steps for posting rooms</h2>
            </div>
            <article>
                <p>Posting the room is made easy by dividing into steps. You can follow these simple steps in order to complete the procedure.</p>
                <ul className='disc space-y-4 mt-4 md:mt-8'>
                    <li><span className='font-semibold'>Step 1: </span>Enter the location details and owner details along with the rent.</li>
                    <li><span className='font-semibold'>Step 2: </span>Enter number of rooms, room type, facilities and brief description.</li>
                    <li><span className='font-semibold'>Step 3: </span>Upload 2-3 photos one by one patiently. </li>
                    <li><span className='font-semibold'>Step 4: </span>Apply the standard rules and also disclose more about house specific rules and habits.</li>
                    <li><span className='font-semibold'>Step 5: </span>Confirm and your rooom will be posted.</li>
                </ul>
            </article>
        </section>
        
        <hr />

        <section className='py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12'>
            <div>
                <h2 className='text-2xl font-semibold sticky top-8'>Steps for searching rooms</h2>
            </div>
            <article>
                <p>Searching the room is very easy and convenient at Hamrodera. You can follow these simple steps in order to complete the procedure.</p>
                <ul className='disc space-y-4 mt-4 md:mt-8'>
                    <li><span className='font-semibold'>Step 1: </span>Enter the city name. Be sure with the spelling.</li>
                    <li><span className='font-semibold'>Step 2: </span>(optional) Select the type of room to be searched.</li>
                    <li><span className='font-semibold'>Step 3: </span>(optional) Enter the maximum rent you can afford. </li>
                    <li><span className='font-semibold'>Step 4: </span>Press the search button and you will get the results.</li>
                </ul>
            </article>
        </section>
        
        <hr />

        <section className='py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12'>
            <div>
                <h2 className='text-2xl font-semibold sticky top-8'>Steps to register</h2>
            </div>
            <article>
                <p>Registering contains very few details at hamrodera. You can follow these simple steps in order to complete the procedure.</p>
                <ul className='disc space-y-4 mt-4 md:mt-8'>
                    <li><span className='font-semibold'>Step 1: </span>Enter your full name and address.</li>
                    <li><span className='font-semibold'>Step 2: </span>Enter your phone number for contacting you in case of buying or selling room.</li>
                    <li><span className='font-semibold'>Step 3: </span>Upload any of the following documents (student ID, citizenship, driving liscense). </li>
                    <li><span className='font-semibold'>Step 4: </span>If you are studying or planning to study college or school fill the study field and you will get gift hampers.</li>
                    <li><span className='font-semibold'>Step 4: </span>Hit the register button and you will be redirected.</li>
                </ul>
            </article>
        </section>

    </main>
  )
}

export default page