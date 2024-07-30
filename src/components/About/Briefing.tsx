import React from 'react'

const Briefing = () => {
  return (
    <div className="bg-white rounded-t-[32px] -mt-10 md:-mt-24 z-[2] relative md:rounded-t-[64px] w-full px-4 md:px-[2%] pt-24 pb-[148px] md:pt-32 md:pb-[280px]">
      <div className="w-full flex-col mx-auto flex">
        <p className="sm:text-[32px] text-2xl font-normal sm:leading-[48px] text-blue-400 max-w-[884px]">
          We partner with product-based medium to large-scale companies while offering full-stack content marketing services to improve their brand visibility, increase their market share, and build their customer loyalty.
        </p>
        <div className="flex flex-col mt-12 md:mt-20 justify-start items-start gap-y-6 text-gray-500 text-lg sm:text-xl font-normal leading-7 lg:ml-auto max-w-[585px] md:mr-[5%]">
          <p>
            We provide unique and excellent services, custom-fit for your brand. As a creative content marketing agency, we ensure that your brand strategy and messaging are aligned across your digital touch-points (website, social media channels, online ads etc).
          </p>
          <p>
            At Remark DMC, our digital marketing strategies enable us to consistently track your KPIs that teaches you to make better marketing decisions that ultimately impacts sales positively.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Briefing
