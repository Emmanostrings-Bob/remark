import Link from 'next/link'
import React, { useState } from 'react'
import Modal from '../Modal'
import ContactUs from '../Contact/ContactUs'

const OurProcess = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="bg-white rounded-[32px] -mt-10 md:-mt-24 z-[3] relative md:rounded-[64px] w-full px-4 md:px-[2%] py-24">
    <div className="w-full flex-col items-start md:items-center mx-auto flex">
      <h3 className="text-blue-400 text-2xl sm:text-[32px] font-normal">our services</h3>
      <div className="max-w-5xl w-full mx-auto flex md:flex-row flex-col justify-between items-start gap-y-16 mt-12 md:mt-24">
        <div className="flex flex-col gap-y-[72px] md:pr-8 xl:pr-12">
          <div className="sm:max-w-[464px] w-full flex flex-col items-start gap-y-6 h-fit">
            <h3 className="text-blue-400 text-xl sm:text-2xl font-medium lowercase">Social media marketing</h3>
            <div className="text-lg font-normal leading-relaxed text-gray-500">
              The over-reliance on advertising alone which overshadows organic marketing and building a consistent voice online which impacts brand visibility, customer loyalty and market share.
            </div>
            <button className="flex justify-center px-6 md:px-8 py-4 text-base sm:text-lg font-medium rounded-lg items-center relative outline-0 duration-300 disabled:!bg-opacity-50 disabled:hover:!bg-opacity-50 disabled:!text-opacity-50 gap-2 bg-blue-400 text-remark-powder hover:bg-opacity-80" onClick={handleOpenModal}>
              I need this service
            </button>
          </div>
          <div className="sm:max-w-[464px] w-full flex flex-col items-start gap-y-6 h-fit">
            <h3 className="text-blue-400 text-xl sm:text-2xl font-medium lowercase">Email marketing</h3>
            <div className="text-lg font-normal leading-relaxed text-gray-500">
              We craft compelling email campaigns that captivate your audience, ensuring your messages land in inboxes, not spam. From eye-catching designs to persuasive content, we foster deeper customer engagement, drive conversions, and nurture lasting relationships. With us, your email marketing becomes a powerful tool for growth.
            </div>
            <button className="flex justify-center px-6 md:px-8 py-4 text-base sm:text-lg font-medium rounded-lg items-center relative outline-0 duration-300 disabled:!bg-opacity-50 disabled:hover:!bg-opacity-50 disabled:!text-opacity-50 gap-2 bg-blue-400 text-remark-powder hover:bg-opacity-80" onClick={handleOpenModal}>
              I need this service
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-y-[72px] md:pl-8 xl:pl-12 md:border-l border-gray-500/20 md:pb-[136px]">
          <div className="sm:max-w-[464px] w-full flex flex-col items-start gap-y-6 h-fit">
            <h3 className="text-blue-400 text-xl sm:text-2xl font-medium lowercase">Search engine optimization</h3>
            <div className="text-lg font-normal leading-relaxed text-gray-500">
              We optimize your website to rank higher on search engines, enhancing visibility for relevant keywords. This drives organic traffic, increases your site's authority, and connects you directly with customers actively seeking your products. Let us bridge the gap between you and your next customer through SEO.
            </div>
            <button className="flex justify-center px-6 md:px-8 py-4 text-base sm:text-lg font-medium rounded-lg items-center relative outline-0 duration-300 disabled:!bg-opacity-50 disabled:hover:!bg-opacity-50 disabled:!text-opacity-50 gap-2 bg-blue-400 text-remark-powder hover:bg-opacity-80" onClick={handleOpenModal}>
              I need this service
            </button>
          </div>
          <div className="sm:max-w-[464px] w-full flex flex-col items-start gap-y-6 h-fit">
            <h3 className="text-blue-400 text-xl sm:text-2xl font-medium lowercase">Web development</h3>
            <div className="text-lg font-normal leading-relaxed text-gray-500">
              We build lightweight, and extremely fast websites that deliver a top-notch user experience, giving your users the best possible experience and leading them to give you your desired end. We do this with the help of our partner, 
              <Link href="https://tscdesign.co" target="_blank" rel="noreferrer" className="underline">TSC Design Studio</Link>, they use simple technologies to produce the best website experience that renders on all types of screens.
            </div>
            <button className="flex justify-center px-6 md:px-8 py-4 text-base sm:text-lg font-medium rounded-lg items-center relative outline-0 duration-300 disabled:!bg-opacity-50 disabled:hover:!bg-opacity-50 disabled:!text-opacity-50 gap-2 bg-blue-400 text-remark-powder hover:bg-opacity-80" onClick={handleOpenModal}>
              I need this service
            </button>
          </div>
        </div>
      </div>
    </div>
    <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <ContactUs />
      </Modal>
  </div>
  )
}

export default OurProcess
