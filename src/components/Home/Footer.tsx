import React from 'react'

const Footer = () => {
  return (
<footer className="w-full md:px-[2%] bg-white pt-6 md:pt-10 overflow-hidden">
      <div className="flex flex-col w-full max-w-10xl mx-auto">
        <div className="md:pb-24 md:px-0 flex xs:grid grid-cols-12 md:flex flex-col flex-wrap md:flex-row justify-between h-fit w-full gap-x-10 xl:gap-x-16">
          <div className="md:w-fit w-full md:px-0 px-4 md:pb-0 pb-10 border-b md:border-b-0 col-span-full">
            <form className="flex flex-col justify-start items-start gap-y-4 w-full max-w-[328px]">
              <label htmlFor="newsletter" className="text-blue-400 text-base font-medium leading-7">
                Receive newsletters, and offers
              </label>
              <input
                type="email"
                id="newsletter"
                autoComplete="email"
                placeholder="Enter your email address"
                className="py-4 w-full rounded-lg px-6 outline-0 focus:ring-0 ring-0 border border-transparent focus:border-gray-500/30 bg-gray-200 text-base font-normal text-gray-500 leading-normal"
              />
              <fieldset className="flex justify-start items-start gap-x-2.5 max-w-[295px]">
                <input
                  id="agreement"
                  type="checkbox"
                  className="w-3 h-3 rounded-none shrink-0 border-2 border-gray-500 checked:border-white ring-transparent checked:bg-gray-500 checked:ring-gray-500 ring-1 appearance-none outline-0"
                />
                <label htmlFor="agreement" className="text-xs font-normal !leading-normal text-gray-500">
                  I understand that Remark will send me emails about offers, company news, and more.
                </label>
              </fieldset>
              <button className="flex justify-center px-6 md:px-8 py-4 text-base sm:text-lg font-medium rounded-lg items-center relative outline-0 duration-300 disabled:!bg-opacity-50 disabled:hover:!bg-opacity-50 disabled:!text-opacity-50 gap-2 bg-blue-400 text-remark-powder hover:bg-opacity-80">
                subscribe
              </button>
            </form>
          </div>
          <div className="md:w-fit w-full md:px-0 px-4 md:py-0 py-10 border-b md:border-b-0 col-span-full">
            <div className="grid grid-cols-2 md:grid-cols-1 gap-y-4 h-fit">
              <label className="text-blue-400 text-base font-medium leading-7 col-span-full">Links</label>
              <a className="w-max hover:underline text-gray-500 text-base font-normal leading-normal shrink-0" href="/about">
                About
              </a>
              <a className="w-max hover:underline text-gray-500 text-base font-normal leading-normal shrink-0" href="/services">
                Services
              </a>
              <a className="w-max hover:underline text-gray-500 text-base font-normal leading-normal shrink-0" href="/services#process">
                Our process
              </a>
              <a className="w-max hover:underline text-gray-500 text-base font-normal leading-normal shrink-0" href="#blog">
                Blog
              </a>
              <a className="w-max hover:underline text-gray-500 text-base font-normal leading-normal shrink-0" href="/contact">
                Contact
              </a>
              <a className="w-max hover:underline text-gray-500 text-base font-normal leading-normal shrink-0" href="/privacy">
                Privacy
              </a>
            </div>
          </div>
          <div className="md:w-fit w-full md:px-0 px-4 md:pt-0 pt-10 md:pb-0 pb-5 col-span-full">
            <div className="flex flex-col justify-start items-start gap-y-4 h-fit">
              <label className="text-blue-400 text-base font-medium leading-7">Contact</label>
              <a className="w-fit hover:underline text-gray-500 text-base font-normal leading-normal" href="mailto:hello@remarkdmc.com">
                hello@remarkdmc.com
              </a>
              <a className="w-fit hover:underline text-gray-500 text-base font-normal leading-normal" href="tel:+2348021328038">
                +234 802 132 8038
              </a>
              <a
                className="mt-5  md:flex flex justify-center px-6 md:px-8 py-4 text-base sm:text-lg font-medium rounded-lg items-center relative outline-0 duration-300 disabled:!bg-opacity-50 disabled:hover:!bg-opacity-50 disabled:!text-opacity-50 gap-2 bg-gray-500 text-white hover:bg-opacity-80"
                target="_blank"
                href="https://cal.com/remarkdmc"
              >
                Book a call
              </a>
            </div>
          </div>
          <div className="md:w-fit w-full md:px-0 flex px-4 md:pb-0 pb-10 md:pt-0 pt-5 border-b md:border-b-0 col-span-full">
            <div className="flex flex-col justify-start items-start gap-y-4 h-fit w-fit">
              <a target="_blank" rel="noreferrer" className="w-fit hover:underline text-gray-500 text-base font-normal leading-normal" href="https://instagram.com/remarkdmc">
                Instagram
              </a>
              <a target="_blank" rel="noreferrer" className="w-fit hover:underline text-gray-500 text-base font-normal leading-normal" href="https://linkedin.com/company/remarkdmc">
                LinkedIn
              </a>
            </div>
            <a
              className="md:hidden h-fit ml-auto flex justify-center px-6 md:px-8 py-4 text-base sm:text-lg font-medium rounded-lg items-center relative outline-0 duration-300 disabled:!bg-opacity-50 disabled:hover:!bg-opacity-50 disabled:!text-opacity-50 gap-2 bg-gray-500 text-white hover:bg-opacity-80"
              target="_blank"
              href="https://cal.com/remarkdmc"
            >
              Book a call
            </a>
          </div>
          <p className=" justify-center items-center gap-x-2 w-fit h-fit lg:!flex !hidden">
            <a href="/">
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-10 sm:h-10 relative">
                <rect width="40" height="40" fill="#0FBBEF"></rect>
                <path
                  fill="#EFFBFF"
                  d="M6.45011 31.933H0L6.10745 9.1157H7.76029C9.9372 9.1157 11.5094 11.1717 10.945 13.268C13.0413 10.0832 15.9036 8.57147 19.1689 8.57147C23.039 8.57147 24.8732 10.3654 25.2562 13.2276C27.4331 10.0832 30.376 8.57147 33.8228 8.57147C39.769 8.57147 40.9179 12.8648 39.386 18.6296L35.8183 31.9531H29.3682L32.8351 18.9924C33.6212 16.0496 32.7948 14.2959 30.0938 14.2959C27.3928 14.2959 25.4175 16.0899 24.6112 19.0731L21.1644 31.933H14.7143L18.1812 18.9723C18.9674 16.0294 18.1409 14.2758 15.3795 14.2758C12.6987 14.2758 10.7032 16.0697 9.89689 19.0731L6.45011 31.933Z"
                ></path>
              </svg>
            </a>
            <span className="text-xs font-normal !leading-tight text-gray-500">Remark DMC © 2024</span>
          </p>
        </div>
        <div className="border-t border-gray-500/20 py-6 flex w-full md:px-0 px-4 items-center">
          <p className="flex justify-center items-center gap-x-2 w-fit h-fit lg:hidden mr-auto">
            <a href="/">
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-10 sm:h-10 relative">
                <rect width="40" height="40" fill="#0FBBEF"></rect>
                <path
                  fill="#EFFBFF"
                  d="M6.45011 31.933H0L6.10745 9.1157H7.76029C9.9372 9.1157 11.5094 11.1717 10.945 13.268C13.0413 10.0832 15.9036 8.57147 19.1689 8.57147C23.039 8.57147 24.8732 10.3654 25.2562 13.2276C27.4331 10.0832 30.376 8.57147 33.8228 8.57147C39.769 8.57147 40.9179 12.8648 39.386 18.6296L35.8183 31.9531H29.3682L32.8351 18.9924C33.6212 16.0496 32.7948 14.2959 30.0938 14.2959C27.3928 14.2959 25.4175 16.0899 24.6112 19.0731L21.1644 31.933H14.7143L18.1812 18.9723C18.9674 16.0294 18.1409 14.2758 15.3795 14.2758C12.6987 14.2758 10.7032 16.0697 9.89689 19.0731L6.45011 31.933Z"
                ></path>
              </svg>
            </a>
            <span className="text-xs font-normal !leading-tight text-gray-500">Remark DMC © 2024</span>
          </p>
          <a target="_blank" rel="norefrrer" className="text-gray-500 text-sm font-normal leading-normal hover:text-blue-400 ml-auto" href="https://tscdesign.co">
            by TSC
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer
