import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const page = () => {
  return (
    <main className='px-4 md:px-20 py-4 md:py-8'>
    <h1 className='text-3xl lg:text-5xl font-bold mb-4 md:mt-4 md:mb-12 text-center'>FAQ</h1>

    <hr />
    <article className='grid grid-cols-1 md:grid-cols-2 gap-x-12 py-2 md:py-12'>

        <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
            <AccordionTrigger className="mb-2 text-left">How do I list a room on your website?</AccordionTrigger>
            <AccordionContent>
            <p>Posting the room is made easy by dividing into steps. You can follow these simple steps in order to complete the procedure.</p>
                <ul className='disc space-y-4 mt-4 md:mt-8'>
                    <li><span className='font-semibold'>Step 1: </span>Enter the location details and owner details along with the rent.</li>
                    <li><span className='font-semibold'>Step 2: </span>Enter number of rooms, room type, facilities and brief description.</li>
                    <li><span className='font-semibold'>Step 3: </span>Upload 2-3 photos one by one patiently. </li>
                    <li><span className='font-semibold'>Step 4: </span>Apply the standard rules and also disclose more about house specific rules and habits.</li>
                    <li><span className='font-semibold'>Step 5: </span>Confirm and your rooom will be posted.</li>
                </ul>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
            <AccordionTrigger className="mb-2 text-left">How do I search for rooms on your website?</AccordionTrigger>
            <AccordionContent>
            <p>Searching the room is very easy and convenient at Hamrodera. You can follow these simple steps in order to complete the procedure.</p>
                <ul className='disc space-y-4 mt-4 md:mt-8'>
                    <li><span className='font-semibold'>Step 1: </span>Enter the city name. Be sure with the spelling.</li>
                    <li><span className='font-semibold'>Step 2: </span>(optional) Select the type of room to be searched.</li>
                    <li><span className='font-semibold'>Step 3: </span>(optional) Enter the maximum rent you can afford. </li>
                    <li><span className='font-semibold'>Step 4: </span>Press the search button and you will get the results.</li>
                </ul>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
            <AccordionTrigger className="mb-2 text-left">How to book rooms?</AccordionTrigger>
            <AccordionContent>
            <ul className='disc space-y-4 mt-4 md:mt-8'>
                    <li><span className='font-semibold'>Step 1: </span>Log in or register at first.</li>
                    <li><span className='font-semibold'>Step 2: </span>Choose the room you find perfect for you</li>
                    <li><span className='font-semibold'>Step 3: </span>After seeing the location, photos, rooms, and facilities press the Book Now button. </li>
                    <li><span className='font-semibold'>Step 4: </span>You will receive the phone number of owner through SMS in no time. You can contact and make a deal.</li>
                </ul>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
            <AccordionTrigger className="mb-2 text-left">How to register at Hamrodera?</AccordionTrigger>
            <AccordionContent>
            <p>Registering contains very few details at hamrodera. You can follow these simple steps in order to complete the procedure.</p>
                <ul className='disc space-y-4 mt-4 md:mt-8'>
                    <li><span className='font-semibold'>Step 1: </span>Enter your full name and address.</li>
                    <li><span className='font-semibold'>Step 2: </span>Enter your phone number for contacting you in case of buying or selling room.</li>
                    <li><span className='font-semibold'>Step 3: </span>Upload any of the following documents (student ID, citizenship, driving liscense). </li>
                    <li><span className='font-semibold'>Step 4: </span>If you are studying or planning to study college or school fill the study field and you will get gift hampers.</li>
                    <li><span className='font-semibold'>Step 4: </span>Hit the register button and you will be redirected.</li>
                </ul>
            </AccordionContent>
        </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
            <AccordionTrigger className="mb-2 text-left">Are there any fees associated with using your website?</AccordionTrigger>
            <AccordionContent>
            <p className='leading-8'>At our platform, we prioritize transparency and fairness. That is why we are proud to say that we do not charge any commission fees. Whether you are listing a room or booking a stay, you can rest assured that you will not encounter any hidden costs or surprise charges. We believe in providing a straightforward and hassle-free experience for our users, allowing you to focus on finding the perfect room or welcoming guests into your space without worrying about additional expenses. Join our community today and enjoy the benefits of commission-free transactions every step of the way..</p>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
            <AccordionTrigger className="mb-2 text-left">How do I communicate with the owner or renter of a room?</AccordionTrigger>
            <AccordionContent>
            <p className='leading-8'>After you book a room, after slight wait you will get an sms about your booking details. Furthermore, you also get the phone number of the home owner. You can contact with the owner to deal with them and negotiate your terms and conditions of stay.</p>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
            <AccordionTrigger className="mb-2 text-left">What should I do if I encounter an issue during my stay?
        </AccordionTrigger>
            <AccordionContent>
            <p className='leading-8'>You can complain about the issue with the property owner. If you are not provided the service and facilities that is provided in the website and you are obeying the rules too, you can renegotiate the rent or make discussions about how to continue further.</p>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
            <AccordionTrigger className="mb-2 text-left">What if I want to leave the room after some time?
        </AccordionTrigger>
            <AccordionContent>
            <p className='leading-8'>It is okay to discuss with the owner and make settlements of your rents and services.Reach out to the room owner or landlord as soon as possible to discuss your situation and explore potential solutions</p>
            </AccordionContent>
        </AccordionItem>
        </Accordion>
        </article>
    </main>
  )
}

export default page