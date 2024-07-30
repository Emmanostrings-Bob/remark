import Image from 'next/image'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  return (
    <section className="w-full h-full flex-grow pt-10">
      <div className="w-full max-h-[712px] md:max-h-[792px] h-[100svh] relative flex z-[1]">
      <Image src='/assets/services-image.jpeg' alt='hero image background' fill style={{ objectFit: 'cover' }} />
        <div className="h-full w-full absolute bg-gradient-to-t pb-[72px] md:pb-[168px] px-4 md:px-8 lg:px-14 from-black via-black/70 to-black/10 flex flex-col justify-end items-start gap-y-6">
          <div className='flex flex-col justify-start items-start gap-y-6 w-full'>
            <p className='text-white text-xl font-normal'>services</p>
            <h1 className="text-white md:text-7xl font-bold md:leading-[88px] tracking-tighter sm:tracking-normal xs:text-[40px] text-[38px] leading-[56px]">
              we elevate your brand through <br className="sm:hidden" /> <span className="text-blue-400 inline-flex">
                <Typewriter
                  words={['social media marketing', 'search engine optimization', 'email marketing', 'web development']}
                  loop={true}
                  cursor
                  cursorStyle='|'
                  typeSpeed={90}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
