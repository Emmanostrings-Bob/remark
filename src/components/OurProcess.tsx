import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const OurProcess = () => {
  return (
<div className="w-full relative overflow-hidden h-auto flex -mt-12 md:-mt-24 z-[2] md:rounded-b-[64px] rounded-b-[32px]">
      <Image
        alt="remark - woman looking at her phone and smiling with colorful shopping bags beside"
        loading="lazy"
        width={1512}
        height={771}
        decoding="async"
        className="w-full h-full object-cover object-center absolute lg:flex hidden"
        style={{ color: 'transparent' }}
        src="/assets/our-process.jpeg"
      />
      <Image
        alt="remark - woman looking at her phone and smiling with colorful shopping bags beside"
        loading="lazy"
        width={2308}
        height={4096}
        decoding="async"
        className="w-full h-full object-cover object-center absolute flex lg:hidden"
        style={{ color: 'transparent' }}
        src="/assets/our-process.jpeg"
      />
      <div className="w-full h-full bg-gradient-to-t from-black/70 to-black/10 flex flex-col pt-[120px] md:pt-[193px] pb-24 md:pb-[99px] justify-center items-center z-[1] px-7">
        <div className="w-full max-w-[1381px] flex flex-col justify-center items-center mx-auto">
          <h3 className="text-white text-2xl sm:text-[32px] font-normal leading-loose">our process</h3>
          <div className="md:hidden grid grid-cols-1 gap-y-8 text-white mx-auto w-full mt-12">
            <div className="w-full flex justify-between items-center gap-x-8">
              <Link href="/services#brand-audit">
                <Image
                  alt="brand audit"
                  loading="lazy"
                  width={193}
                  height={193}
                  decoding="async"
                  style={{ color: 'transparent' }}
                  src="/assets/brand-audit.c19cd8a2.svg"
                />
              </Link>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 shrink-0">
                <path d="M5 12l14 0"></path>
                <path d="M15 16l4 -4"></path>
                <path d="M15 8l4 4"></path>
              </svg>
              <Link href="/services#strategy">
                <Image
                  alt="strategy"
                  loading="lazy"
                  width={193}
                  height={193}
                  decoding="async"
                  style={{ color: 'transparent' }}
                  src="/assets/strategy.2b501ed5.svg"
                />
              </Link>
            </div>
            <div className="flex w-full pr-[12%]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 ml-auto shrink-0">
                <path d="M12 5l0 14"></path>
                <path d="M16 15l-4 4"></path>
                <path d="M8 15l4 4"></path>
              </svg>
            </div>
            <div className="w-full flex justify-between items-center gap-x-8">
              <Link href="/services#results">
                <Image
                  alt="results"
                  loading="lazy"
                  width={193}
                  height={193}
                  decoding="async"
                  style={{ color: 'transparent' }}
                  src="/assets/results.3ee457d4.svg"
                />
              </Link>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 shrink-0">
                <path d="M5 12l14 0"></path>
                <path d="M5 12l4 4"></path>
                <path d="M5 12l4 -4"></path>
              </svg>
              <Link href="/services#implementation">
                <Image
                  alt="implementation"
                  loading="lazy"
                  width={193}
                  height={193}
                  decoding="async"
                  style={{ color: 'transparent' }}
                  src="/assets/implementation.36c35a8b.svg"
                />
              </Link>
            </div>
            <div className="flex w-full pl-[12%]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 mr-auto shrink-0">
                <path d="M12 5l0 14"></path>
                <path d="M16 15l-4 4"></path>
                <path d="M8 15l4 4"></path>
              </svg>
            </div>
            <div className="w-full flex justify-between items-center gap-x-8">
              <Link href="/services#evaluation">
                <Image
                  alt="evaluation"
                  loading="lazy"
                  width={193}
                  height={193}
                  decoding="async"
                  style={{ color: 'transparent' }}
                  src="/assets/evaluation.76c3abbb.svg"
                />
              </Link>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 shrink-0 opacity-0 invisible">
                <path d="M5 12l14 0"></path>
                <path d="M5 12l4 4"></path>
                <path d="M5 12l4 -4"></path>
              </svg>
              <div className="opacity-0 invisible">
                <Image
                  alt="evaluation"
                  loading="lazy"
                  width={193}
                  height={193}
                  decoding="async"
                  style={{ color: 'transparent' }}
                  src="/assets/evaluation.svg"
                />
              </div>
            </div>
          </div>
          <div className="md:flex justify-center items-center hidden text-white gap-x-5 lg:gap-x-10 mx-auto mt-24">
            <Link href="/services#brand-audit">
              <Image
                alt="brand audit"
                loading="lazy"
                width={193}
                height={193}
                decoding="async"
                style={{ color: 'transparent' }}
                src="/assets/brand-audit.c19cd8a2.svg"
              />
            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
              <path d="M5 12l14 0"></path>
              <path d="M13 18l6 -6"></path>
              <path d="M13 6l6 6"></path>
            </svg>
            <Link href="/services#strategy">
              <Image
                alt="strategy"
                loading="lazy"
                width={193}
                height={193}
                decoding="async"
                style={{ color: 'transparent' }}
                src="/assets/strategy.2b501ed5.svg"
              />
            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
              <path d="M5 12l14 0"></path>
              <path d="M13 18l6 -6"></path>
              <path d="M13 6l6 6"></path>
            </svg>
            <Link href="/services#implementation">
              <Image
                alt="implementation"
                loading="lazy"
                width={193}
                height={193}
                decoding="async"
                style={{ color: 'transparent' }}
                src="/assets/implementation.36c35a8b.svg"
              />
            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
              <path d="M5 12l14 0"></path>
              <path d="M13 18l6 -6"></path>
              <path d="M13 6l6 6"></path>
            </svg>
            <Link href="/services#results">
              <Image
                alt="results"
                loading="lazy"
                width={193}
                height={193}
                decoding="async"
                style={{ color: 'transparent' }}
                src="/assets/results.3ee457d4.svg"
              />
            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
              <path d="M5 12l14 0"></path>
              <path d="M13 18l6 -6"></path>
              <path d="M13 6l6 6"></path>
            </svg>
            <Link href="/services#evaluation">
              <Image
                alt="evaluation"
                loading="lazy"
                width={193}
                height={193}
                decoding="async"
                style={{ color: 'transparent' }}
                src="/assets/evaluation.76c3abbb.svg"
              />
            </Link>
          </div>
          <Link
            className="mt-24 !border-white !text-white hover:!bg-white/30 flex justify-center px-6 md:px-8 py-4 text-base sm:text-lg font-medium rounded-lg items-center relative outline-0 duration-300 disabled:!bg-opacity-50 disabled:hover:!bg-opacity-50 disabled:!text-opacity-50 gap-2 text-remark-grey bg-transparent border-2 border-remark-grey"
            href="/services#process"
          >
            learn more about our process
          </Link>
        </div>
      </div>
    </div>
  )
}

export default OurProcess
