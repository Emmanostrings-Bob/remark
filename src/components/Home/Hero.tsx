
import Image from 'next/image';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section className="w-full h-full flex-grow pr-10">
      <div className="w-full max-h-[712px] md:max-h-[792px] h-[100svh] relative flex z-[1]">
      <Image src='/assets/home-image.jpeg' alt='hero image background' fill style={{ objectFit: 'cover' }} />
        <div className="h-full w-full absolute bg-gradient-to-t pb-[72px] md:pb-[168px] px-4 md:px-8 lg:px-14 from-black via-black/70 to-black/10 flex flex-col justify-end items-start">
          <div className='flex flex-col justify-start items-start gap-y-10 w-full'>
            <h1 className="text-white md:text-7xl font-bold md:leading-[88px] tracking-tighter sm:tracking-normal xs:text-[40px] text-[38px] leading-[56px]">
              improve your <br className="sm:hidden" />
              <span className="text-blue-500 inline-flex">
                <Typewriter
                  words={['customer loyalty,', 'brand visibility,', 'brand messaging,']}
                  loop={true}
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
              <br />increase your market share
            </h1>
            <div className="flex flex-row-reverse md:flex-row justify-start items-center gap-x-6">
              <div className="flex mt-8 space-x-4">
                <a href="#learn-more" className="bg-white text-gray-500 flex justify-center px-6 md:px-8 py-4 text-base sm:text-lg font-medium rounded-lg items-center relative outline-0 duration-300 disabled:!bg-opacity-50 disabled:hover:!bg-opacity-50 disabled:!text-opacity-50 gap-2">learn more</a>
                <a href="#get-started" className="bg-blue-500 flex justify-center px-6 md:px-8 py-4 text-base sm:text-lg font-medium rounded-lg items-center relative outline-0 duration-300 disabled:!bg-opacity-50 disabled:hover:!bg-opacity-50 disabled:!text-opacity-50 gap-2 bg-remark-blue text-remark-powder hover:bg-opacity-80">get started</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
