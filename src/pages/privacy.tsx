import Header from '@/components/Home/Header'
import PartnerWithUs from '@/components/Home/PartnerWithUs'
import Footer from '@/components/Home/Footer'
import React from 'react'

const privacy = () => {
  return (
    <>
      <Header />
      <div className="w-full h-full flex-grow pt-10 bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-gray-500 w-full pt-16 md:pt-28 pb-12 md:pb-[72px] max-w-10xl mx-auto px-4 md:px-[2%]">
        <div className="xl:col-span-4 lg:col-span-5 col-span-full flex flex-col gap-y-3 xs:gap-y-4">
          <div className="flex flex-col sticky top-24 -mt-4">
            <h1 className="lg:text-5xl md:text-[40px] xs:text-4xl text-3xl font-medium lg:!leading-[88px]">privacy policy</h1>
            <p className="md:text-xl xs:text-lg text-base font-normal leading-7">Last updated: December 20, 2023</p>
          </div>
        </div>
        <div className="xl:col-span-8 lg:col-span-7 col-span-full flex justify-end">
          <div className="max-w-[805px] w-full selection:text-gray-500 selection:bg-gray-100/20">
            <div>
              <p className="text-lg font-normal mb-5 !leading-relaxed">
                Thank you for choosing Remark DMC Ltd ("we," "us," or "our") for your digital marketing needs. We are committed to protecting your privacy and maintaining the confidentiality of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information.
              </p>
              <h3 className="text-lg font-medium mb-3 mt-6">Information We Collect:</h3>
              <p className="text-lg font-normal mb-5 !leading-relaxed">
                We may collect the following types of personal information when you visit our website or interact with our services:
              </p>
              <ul className="list-disc pl-5">
                <li className="text-lg font-normal !leading-[1.8]">
                  <strong className="font-medium">Name:</strong> We collect your name to address you properly and personalize our communications.
                </li>
                <li className="text-lg font-normal !leading-[1.8]">
                  <strong className="font-medium">Email Address:</strong> Your email address is collected for communication purposes, such as sending updates, newsletters, or responding to inquiries.
                </li>
                <li className="text-lg font-normal !leading-[1.8]">
                  <strong className="font-medium">Phone Number:</strong> We may collect your phone number to contact you for business-related discussions or support.
                </li>
              </ul>
              <h3 className="text-lg font-medium mb-3 mt-6">How We Collect Information:</h3>
              <p className="text-lg font-normal mb-5 !leading-relaxed">
                We collect information directly from you when you voluntarily provide it through forms on our website or other communication channels.
              </p>
              <h3 className="text-lg font-medium mb-3 mt-6">Use of Personal Information:</h3>
              <p className="text-lg font-normal mb-5 !leading-relaxed">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-5">
                <li className="text-lg font-normal !leading-[1.8]">To communicate with you regarding our services, promotions, and updates.</li>
                <li className="text-lg font-normal !leading-[1.8]">To respond to your inquiries and provide customer support.</li>
                <li className="text-lg font-normal !leading-[1.8]">To improve our services and enhance user experience.</li>
                <li className="text-lg font-normal !leading-[1.8]">To comply with legal obligations.</li>
              </ul>
              <h3 className="text-lg font-medium mb-3 mt-6">Disclosure of Personal Information:</h3>
              <p className="text-lg font-normal mb-5 !leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties. However, we may share your information with trusted third-party service providers who assist us in operating our website, conducting business, or servicing you, as long as those parties agree to keep this information confidential.
              </p>
              <h3 className="text-lg font-medium mb-3 mt-6">Security:</h3>
              <p className="text-lg font-normal mb-5 !leading-relaxed">
                We implement a variety of security measures to maintain the safety of your personal information. We use industry-standard encryption to protect data transmissions and restrict access to your personal information to only those employees who need it for specific purposes.
              </p>
              <h3 className="text-lg font-medium mb-3 mt-6">Your Choices:</h3>
              <p className="text-lg font-normal mb-5 !leading-relaxed">
                You have the right to opt-out of receiving marketing communications from us. You can do so by following the unsubscribe instructions in the emails we send or by contacting us directly.
              </p>
              <h3 className="text-lg font-medium mb-3 mt-6">Changes to This Privacy Policy:</h3>
              <p className="text-lg font-normal mb-5 !leading-relaxed">
                We reserve the right to update or modify this Privacy Policy at any time without prior notice. Changes will be effective immediately upon posting on our website. Please review this policy periodically for any updates.
              </p>
              <h3 className="text-lg font-medium mb-3 mt-6">Contact Us:</h3>
              <p className="text-lg font-normal mb-5 !leading-relaxed">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at hello@remarkdmc.com. By using our website and services, you consent to the terms outlined in this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      <PartnerWithUs />
      <Footer />
    </>
  )
}

export default privacy
