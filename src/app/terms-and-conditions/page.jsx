import React from 'react'

const page = () => {
  return (
    <main className='px-4 md:px-20 py-4 md:py-8'>
        <h1 className='text-3xl lg:text-5xl font-bold mb-4 md:mt-4 md:mb-12 text-center'>Terms & Conditions</h1>

        <hr />

        <section className='py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12'>
            <div>
                <h2 className='text-2xl font-semibold sticky top-8'>User Accounts</h2>
            </div>
            <article>
                <ul className='disc space-y-4'>
                <li>You must be at least 18 years old to create an account on our website and use our services. By creating an account, you represent and warrant that you are at least 18 years old.</li>

                <li>You are responsible for maintaining the confidentiality of your account credentials, including your username and password. You agree not to share your account credentials with anyone else or allow anyone else to access your account.</li>

                <li>You agree to notify us immediately if you become aware of any unauthorized use of your account or any other breach of security. We reserve the right to suspend or terminate your account if we believe that your account has been compromised or used in violation of these Terms.</li>

                <li>You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. Failure to provide accurate information may result in the suspension or termination of your account.</li>
                </ul>
            </article>
        </section>
        
        <hr />

        <section className='py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12'>
            <div>
                <h2 className='text-2xl font-semibold sticky top-8'>Listings and transactions</h2>
            </div>
            <article>
                
            <ul className='disc space-y-4'>

            <li>We provide a platform for users to list, discover, and book rooms. We do not own, create, sell, resell, provide, control, manage, offer, deliver, or supply any listings. We are not a party to any transactions between users.
            </li>
            <li>Users are solely responsible for the accuracy, legality, and quality of their listings and transactions. We do not endorse, guarantee, or verify the authenticity, accuracy, or legality of any listings or the identity of any users.</li>

            <li>We reserve the right to remove or modify any listings that violate these Terms or our policies. We may also suspend or terminate the accounts of users who violate these Terms or our policies.
            </li>
            <li>Users agree to comply with all applicable laws, regulations, and policies when creating listings and conducting transactions on our website. Users are solely responsible for ensuring that their listings and transactions comply with all applicable laws and regulations.</li>

            <li>Users agree to indemnify and hold us harmless from any claims, damages, liabilities, costs, or expenses (including attorneys fees) arising out of or in connection with their listings or transactions.
            </li>
            </ul>
            </article>
        </section>

    </main>
  )
}

export default page