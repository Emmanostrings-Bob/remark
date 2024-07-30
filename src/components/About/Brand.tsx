import React from 'react'

const Brand = () => {
  return (
<div className="bg-blue-100 rounded-[32px] -mt-8 md:-mt-24 z-[3] relative md:rounded-[64px] w-full px-4 md:px-[2%] py-[72px] md:py-24">
      <div className="w-full flex-col mx-auto flex justify-center items-start md:items-center max-w-[1060px]">
        <h3 className="text-blue-400 text-2xl sm:text-[32px] font-normal">our brand essence</h3>
        <div className="md:mt-24 mt-14 flex md:flex-row flex-col gap-y-12 justify-between items-start w-full">
          <div className="w-full md:max-w-[50%] md:pr-12">
            <h3 className="text-blue-400 text-2xl font-medium">
              <span className="md:hidden inline-flex">1.</span> brands rely on ads only
            </h3>
            <p className="mt-6 text-gray-500 text-lg sm:text-xl font-normal leading-7">
              The over-reliance on advertising alone which overshadows organic marketing and building a consistent voice online which impacts brand visibility, customer loyalty and market share.
            </p>
          </div>
          <div className="w-full md:max-w-[50%] md:border-l md:border-gray-500/20 md:pl-12">
            <h3 className="text-blue-400 text-2xl font-medium">
              <span className="md:hidden inline-flex">2.</span> brands underestimate the relevance of consistent online content marketing
            </h3>
            <p className="mt-6 text-gray-500 text-lg sm:text-xl font-normal leading-7">
              Consistent online content marketing helps you build a great relationship with your target audience while helping you reach new audiences. This impacts your sales for the now and in the long haul.
            </p>
            <p className="mt-6 text-gray-500 text-lg sm:text-xl font-normal leading-7">
              Building a great relationship with your audience online also amplifies your word of mouth marketing, this is a result of your digital interaction with your existing customers and turning them into your brand ambassadors.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brand
