import React from 'react';

const AboutUs = () => {
  return (
      <div className="bg-blue-100 rounded-t-[32px] -mt-10 md:-mt-24 z-[2] relative md:rounded-t-[64px] w-full px-[2%] pt-[72px] pb-[120px] md:pt-[126px] md:pb-[228px]">
        <div className="w-full flex-col max-w-[820px] mx-auto flex justify-center items-center gap-y-6 text-center">
          <h3 className="text-blue-500 text-2xl sm:text-[32px] font-normal">about us</h3>
          <p className="sm:text-2xl text-lg font-normal sm:leading-10 leading-relaxed text-gray-500">
            We are a Nigerian-based digital marketing company. We partner with product-based medium to large-scale companies while offering full-stack content marketing services to improve their brand visibility, increase their market share, and build their customer loyalty.
          </p>
          <a 
            className=" flex justify-center px-6 md:px-8 py-4 text-base sm:text-lg font-medium rounded-lg items-center relative outline-0 duration-300 disabled:!bg-opacity-50 disabled:hover:!bg-opacity-50 disabled:!text-opacity-50 gap-2 bg-blue-500 text-powder hover:bg-opacity-80" 
            href="/about"
          >
            learn more
          </a>
        </div>
    </div>
  );
};

export default AboutUs;
