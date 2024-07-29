import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SolvingProblem = () => {
  return (
<div className="w-full bg-blue-100 lg:pl-[2%] z-[1] relative flex md:pt-[216px] pt-[146px] lg:pb-[192px] -mt-12 md:-mt-[99px]">
      <div className="w-full max-w-10xl mx-auto flex lg:flex-row flex-col justify-between items-start gap-x-[6%]">
        <h3 className="text-blue-400 text-2xl font-medium xl:shrink-0 lg:shrink shrink-0 px-4 md:px-[2%] lg:px-0">
          The problems we solve
        </h3>
        <div className="max-w-[466px] w-full text-gray-500 mt-12 lg:mt-0 px-4 md:px-[2%] lg:px-0">
          <div className="flex flex-col justify-start items-start gap-y-4">
            <h3 className="text-blue-400 text-xl sm:text-2xl font-medium">1. Over-reliance on ads only</h3>
            <p className="sm:text-lg text-base font-normal leading-relaxed">
              The over-reliance on advertising alone. This overshadows organic marketing and building a consistent voice online which impacts brand visibility, customer loyalty, and market share.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-y-4 mt-6 lg:mt-12">
            <h3 className="text-blue-400 text-xl sm:text-2xl font-medium">2. Underestimation of consistent online content marketing</h3>
            <p className="sm:text-lg text-base font-normal leading-relaxed">
              Consistent online content marketing helps you build a great relationship with your target audience while helping you reach new audiences. This impacts your sales for the now and in the long haul.
            </p>
          </div>
          <Link href="/services" className="mt-12 lg:mt-6 w-fit flex justify-center px-6 md:px-8 py-4 text-base sm:text-lg font-medium rounded-lg items-center relative outline-0 duration-300 disabled:!bg-opacity-50 disabled:hover:!bg-opacity-50 disabled:!text-opacity-50 gap-2 bg-blue-400 text-blue-100 hover:bg-opacity-80" >
              Learn more
          </Link>
        </div>
        <div className="overflow-hidden w-full xl:max-w-[584px] lg:max-w-[420px] shrink-0 xl:shrink lg:mt-0 mt-24 h-[394px] xs:h-[482px] lg:rounded-l-lg">
          <Image
            alt="man on his laptop with leaves around"
            loading="lazy"
            width={584}
            height={482}
            decoding="async"
            className="w-full h-full object-cover object-center relative"
            src="/assets/problem-bg.webp"
          />
        </div>
      </div>
    </div>
  )
}

export default SolvingProblem
