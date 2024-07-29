import Image from 'next/image'
import React from 'react'

const OurServices = () => {
  return (
    <div className="bg-white rounded-[32px] -mt-8 md:-mt-24 z-[3] relative md:rounded-[64px] w-full px-[2%] py-[72px] md:pt-[126px] md:pb-24">
    <div className="w-full flex-col mx-auto flex justify-center items-center text-center">
      <h3 className="text-blue-500 text-2xl sm:text-[32px] font-normal">our services</h3>
      <h2 className="text-gray-500 text-2xl sm:text-[40px] font-normal leading-10 mt-2">we elevate your brand through...</h2>
      <div className="max-w-5xl w-full mx-auto flex md:flex-row flex-col justify-between items-center md:items-start gap-x-8 gap-y-[72px] mt-12 md:mt-[72px]">
        <div className="flex flex-col gap-y-[72px]">
          <div className="sm:max-w-[416px] w-full flex flex-col justify-center md:justify-start md:text-left text-center items-center md:items-start sm:gap-y-6 gap-y-4 h-fit">
            <h3 className="text-blue-500 text-xl sm:text-2xl font-medium">social media marketing</h3>
            <div className="text-lg font-normal leading-relaxed text-gray-500">
              Through targeted strategies, we engage your audience, amplify your message, and drive sales, ensuring your social media works hard for your success.
            </div>
            <Image
              src="/assets/social-media-marketing.webp"
              alt="social media marketing"
              width={350}
              height={94}
              loading="lazy"
              className="relative min-h-[90px] max-h-[94px] w-auto h-auto shrink-0"
            />
          </div>
          <div className="sm:max-w-[416px] w-full flex flex-col justify-center md:justify-start md:text-left text-center items-center md:items-start sm:gap-y-6 gap-y-4 h-fit">
            <h3 className="text-blue-500 text-xl sm:text-2xl font-medium">web development</h3>
            <div className="text-lg font-normal leading-relaxed text-gray-500">
              We build lightweight, and extremely fast websites that deliver a top-notch user experience, giving your users the best possible experience and leading them to give you your desired end. We do this with the help of our partner, <a target="_blank" rel="noreferrer" href="https://tscdesign.co" className="underline">TSC Design Studio</a>, they use simple technologies to produce the best website experience that renders on all types of screens.
            </div>
            <Image
              src="/assets/web-development.webp"
              alt="web development"
              width={350}
              height={94}
              loading="lazy"
              className="relative min-h-[90px] max-h-[94px] w-auto h-auto shrink-0"
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-[72px]">
          <div className="sm:max-w-[416px] w-full flex flex-col justify-center md:justify-start md:text-left text-center items-center md:items-start sm:gap-y-6 gap-y-4 h-fit">
            <h3 className="text-blue-500 text-xl sm:text-2xl font-medium">search engine optimization</h3>
            <div className="text-lg font-normal leading-relaxed text-gray-500">
              We optimize your website to rank higher on search engines, enhancing visibility for relevant keywords. This drives organic traffic, increases your site's authority, and connects you directly with customers actively seeking your products. Let us bridge the gap between you and your next customer through SEO.
            </div>
            <Image
              src="/assets/search-engine-optimization (1).webp"
              alt="search engine optimization"
              width={350}
              height={94}
              loading="lazy"
              className="relative min-h-[90px] max-h-[94px] w-auto h-auto shrink-0"
            />
          </div>
          <div className="sm:max-w-[416px] w-full flex flex-col justify-center md:justify-start md:text-left text-center items-center md:items-start sm:gap-y-6 gap-y-4 h-fit">
            <h3 className="text-blue-500 text-xl sm:text-2xl font-medium">email marketing</h3>
            <div className="text-lg font-normal leading-relaxed text-gray-500">
              We craft compelling email campaigns that captivate your audience, ensuring your messages land in inboxes, not spam. From eye-catching designs to persuasive content, we foster deeper customer engagement, drive conversions, and nurture lasting relationships. With us, your email marketing becomes a powerful tool for growth.
            </div>
            <Image
              src="/assets/email-marketing.webp"
              alt="email marketing"
              width={350}
              height={94}
              loading="lazy"
              className="relative min-h-[90px] max-h-[94px] w-auto h-auto shrink-0"
            />
          </div>
        </div>
      </div>
      <a
        className="mt-[72px] sm:w-fit w-64 flex justify-center px-6 md:px-8 py-4 text-base sm:text-lg font-medium rounded-lg items-center relative outline-0 duration-300 disabled:!bg-opacity-50 disabled:hover:!bg-opacity-50 disabled:!text-opacity-50 gap-2 bg-blue-500 text-powder hover:bg-opacity-80"
        href="/services"
      >
        learn more
      </a>
    </div>
  </div>
  )
}

export default OurServices
