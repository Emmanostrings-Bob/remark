import React from 'react'

const Solutions = () => {
  return (
    <div className="w-full bg-white md:pb-24 pb-[72px] pt-[120px] md:pt-[205px] md:-mt-24 -mt-12 relative flex z-[2] px-4 md:px-[2%]">
      <div className="mx-auto w-full flex flex-col max-w-[605px] items-start md:items-center gap-y-12">
        <h3 className="text-blue-400 text-2xl sm:text-[32px] font-normal">our solutions</h3>
        <div className="flex flex-col items-start md:items-center divide-y divide-gray-500/20">
          <div className="w-full flex gap-x-2 justify-start md:justify-center text-gray-500 text-lg sm:text-xl font-normal py-6 text-left sm:text-center">
            <p>1.</p>
            <p>We help you to improve your brand visibility</p>
          </div>
          <div className="w-full flex gap-x-2 justify-start md:justify-center text-gray-500 text-lg sm:text-xl font-normal py-6 text-left sm:text-center">
            <p>2.</p>
            <p>We help you to improve your market share</p>
          </div>
          <div className="w-full flex gap-x-2 justify-start md:justify-center text-gray-500 text-lg sm:text-xl font-normal py-6 text-left sm:text-center">
            <p>3.</p>
            <p>We help you to build and sustain customer loyalty</p>
          </div>
          <div className="w-full flex gap-x-2 justify-start md:justify-center text-gray-500 text-lg sm:text-xl font-normal py-6 text-left sm:text-center">
            <p>4.</p>
            <p>We help you to track your KPIs for better market decisions</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solutions
