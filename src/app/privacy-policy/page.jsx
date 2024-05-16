export const metadata = {
    title: "Privacy policy",
    description: "See the privacy policy at hamrodera.",
  };

  

const page = () => {
  return (
    <main className='px-4 md:px-20 py-4 md:py-8'>
    <h1 className='text-3xl lg:text-5xl font-bold mb-4 md:mt-4 md:mb-12 text-center'>Privacy Policy</h1>
    <hr />

    <article className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 py-4 md:py-12'>
        <section>
        <div className="mb-8">
            <h2 className='text-lg mb-2 font-semibold text-center md:text-left'>What we collect</h2>
            <p className='leading-8'>
            We collect personal information when you create an account, list a room, make a reservation, or communicate with us through our platform. This information may include your name, contact details, document information, and any other information you choose to provide..
            </p>
        </div>
        <div className="mb-8">
            <h2 className='text-lg mb-2 font-semibold text-center md:text-left'>How we share your infotmation</h2>
            <p className='leading-8'>
            We do not sell, trade, or rent your personal information to third parties without your consent. However, we may share your information with trusted third-party service providers who assist us in operating our website, conducting business, or servicing you, as long as those parties agree to keep this information confidential.
            </p>
        </div>
        <div className="mb-8">
            <h2 className='text-lg mb-2 font-semibold text-center md:text-left'>How we use your information</h2>
            <p className='leading-8'>
            We use the information we collect to facilitate transactions, provide customer support, improve our services, and communicate with you about your account and relevant updates. We may also use your information to personalize your experience on our platform and to comply with legal requirements.
            </p>
        </div>
        <div className="mb-8">
            <h2 className='text-lg mb-2 font-semibold text-center md:text-left'>Cookies</h2>
            <p className='leading-8'>
            Currently we do not use any cookies. But later on, we may use cookies and similar tracking technologies to enhance your experience on our website. These cookies help us recognize your browser, remember your preferences, and analyze how our website is used. You can choose to disable cookies through your browser settings, although this may affect your ability to access certain features of our website
            </p>
        </div>
        </section>

        <section>
        <div className="mb-8">
            <h2 className='text-lg mb-2 font-semibold text-center md:text-left'>Privacy Policy</h2>
            <p className='leading-8'>
            At our website, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard the information you provide to us.
            </p>
        </div>
        <div className="mb-8">
            <h2 className='text-lg mb-2 font-semibold text-center md:text-left'>Change to policy</h2>
            <p className='leading-8'>
            We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page, and the updated Privacy Policy will indicate the date of revision. We encourage you to review this Privacy Policy periodically for any changes.
            </p>
        </div>
        <div className="mb-8">
            <h2 className='text-lg mb-2 font-semibold text-center md:text-left'>Third party links</h2>
            <p className='leading-8'>
            Our website may contain links to third-party websites or services that are not operated by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party sites or services. We encourage you to review the privacy policies of these websites before providing any personal information.
            </p>
        </div>
        <div className="mb-8">
            <h2 className='text-lg mb-2 font-semibold text-center md:text-left'>Contact us</h2>
            <p className='leading-8'>
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at [contact email or address]. We value your privacy and will respond promptly to any inquiries or requests for assistance.
            </p>
        </div>
        </section>

    </article>
    </main>


  )
}

export default page
