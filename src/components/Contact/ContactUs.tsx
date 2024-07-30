import React, { useState } from 'react';

const ContactUs = () => {
const [service, setService] = useState('');
  return (
    <div className="w-full h-full flex-grow pt-10">
      <div className="w-full h-full bg-white md:bg-gray-100 pt-8 pb-12 md:py-36 md:px-[2%]">
        <div className="relative transform overflow-hidden rounded-2xl bg-white transition-all w-full md:max-w-[827px] flex flex-col py-12 md:py-[72px] px-4 md:px-10 lg:px-20 mx-auto">
          <div className="w-full">
            <h2 className="text-gray-500 text-[26px] md:text-[32px] font-normal leading-9 md:leading-10 text-left md:text-center md:max-w-[540px] md:mx-auto">
              <span className="font-medium">contact us</span>, let’s help you connect your product to your customers
            </h2>
            <h3 className="text-left md:text-center text-blue-400 text-lg mt-3 font-normal">Fill the form below</h3>
            <form className="mt-11 md:mt-12 grid grid-cols-1 gap-y-8 gap-x-5 sm:grid-cols-2">
              <fieldset className="grid w-full grid-cols-1 gap-y-2 sm:gap-y-5 flex-1">
                <label htmlFor="firstName" className="sm:text-lg text-base font-normal leading-none text-gray-500">
                  First name<span>*</span>
                </label>
                <input
                  id="firstName"
                  className="text-wow-grey rounded border border-transparent w-full hover:border-gray-500/20 focus:border-blue-400 px-4 transition-color duration-300 placeholder-gray-500/50 h-12 outline-0 bg-blue-100 text-gray-500 text-base sm:text-[17px] font-normal leading-relaxed"
                  name="firstName"
                  placeholder="Your first name"
                  autoComplete="given-name"
                  required
                />
              </fieldset>
              <fieldset className="grid w-full grid-cols-1 gap-y-2 sm:gap-y-5 flex-1">
                <label htmlFor="lastName" className="sm:text-lg text-base font-normal leading-none text-gray-500">
                  Last name<span>*</span>
                </label>
                <input
                  id="lastName"
                  className="text-wow-grey rounded border border-transparent w-full hover:border-gray-500/20 focus:border-blue-400 px-4 transition-color duration-300 placeholder-gray-500/50 h-12 outline-0 bg-blue-100 text-gray-500 text-base sm:text-[17px] font-normal leading-relaxed"
                  name="lastName"
                  placeholder="Your last name"
                  autoComplete="family-name"
                  required
                />
              </fieldset>
              <fieldset className="grid w-full grid-cols-1 gap-y-2 sm:gap-y-5 flex-1">
                <label htmlFor="email" className="sm:text-lg text-base font-normal leading-none text-gray-500">
                  Email<span>*</span>
                </label>
                <input
                  id="email"
                  className="text-wow-grey rounded border border-transparent w-full hover:border-gray-500/20 focus:border-blue-400 px-4 transition-color duration-300 placeholder-gray-500/50 h-12 outline-0 bg-blue-100 text-gray-500 text-base sm:text-[17px] font-normal leading-relaxed"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email address"
                  required
                />
              </fieldset>
              <fieldset className="grid w-full grid-cols-1 gap-y-2 sm:gap-y-5 flex-1">
                <label htmlFor="phone" className="sm:text-lg text-base font-normal leading-none text-gray-500">
                  Phone number<span>*</span>
                </label>
                <input
                  id="phone"
                  className="text-wow-grey rounded border border-transparent w-full hover:border-gray-500/20 focus:border-blue-400 px-4 transition-color duration-300 placeholder-gray-500/50 h-12 outline-0 bg-blue-100 text-gray-500 text-base sm:text-[17px] font-normal leading-relaxed"
                  name="phone"
                  placeholder="Your phone number"
                  autoComplete="tel"
                  required
                />
              </fieldset>
              <fieldset className="grid w-full grid-cols-1 gap-y-2 sm:gap-y-5 flex-1">
                <label htmlFor="organization" className="sm:text-lg text-base font-normal leading-none text-gray-500">
                  Organization<span>*</span>
                </label>
                <input
                  id="organization"
                  className="text-wow-grey rounded border border-transparent w-full hover:border-gray-500/20 focus:border-blue-400 px-4 transition-color duration-300 placeholder-gray-500/50 h-12 outline-0 bg-blue-100 text-gray-500 text-base sm:text-[17px] font-normal leading-relaxed"
                  name="organization"
                  placeholder="Organization name"
                  autoComplete="organization"
                  required
                />
              </fieldset>
              <input type="hidden" hidden readOnly name="service" value="" />
              <div className="grid w-full grid-cols-1 gap-y-2 sm:gap-y-5 flex-1" id="service">
                <label htmlFor="service" className="sm:text-lg text-base font-normal leading-none text-gray-500">
                  How may we help you?<span>*</span>
                </label>
                <div className="relative">
                  <button
                    className="text-wow-grey rounded border border-transparent w-full hover:border-gray-500/20 focus:border-blue-400 px-4 transition-color duration-300 placeholder-gray-500/50 h-12 outline-0 bg-blue-100 text-gray-500 text-base sm:text-[17px] font-normal leading-relaxed text-left"
                    type="button"
                  >
                    <span className="block truncate text-gray-500/50">Choose a service</span>
                    <span className="absolute inset-y-0 text-gray-500 right-0 flex items-center pr-2 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-6 h-6"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
              <fieldset className="col-span-full flex flex-col sm:flex-row gap-y-4 gap-x-8">
                <div>
                  <label className="sm:text-lg text-base font-normal leading-none text-gray-500">Do you have a website?</label>
                </div>
                <div className="flex justify-start items-center gap-x-4">
                  <fieldset className="gap-x-2 flex justify-center items-center">
                    <label htmlFor="website-yes" className="text-gray-500 text-base xs:text-lg font-normal leading-relaxed">Yes</label>
                    <input
                      id="website-yes"
                      type="radio"
                      className="h-5 w-5 appearance-none shrink-0 rounded-full border-2 checked:bg-blue-400 checked:border-white border-gray-500 ring-2 checked:ring-blue-400 ring-transparent"
                      name="website"
                      value="Yes"
                    />
                  </fieldset>
                  <fieldset className="gap-x-2 flex justify-center items-center">
                    <label htmlFor="website-no" className="text-gray-500 text-base xs:text-lg font-normal leading-relaxed">No</label>
                    <input
                      id="website-no"
                      type="radio"
                      className="h-5 w-5 appearance-none shrink-0 rounded-full border-2 checked:bg-blue-400 checked:border-white border-gray-500 ring-2 checked:ring-blue-400 ring-transparent"
                      name="website"
                      value="No"
                    />
                  </fieldset>
                </div>
              </fieldset>
              <div className="col-span-full">
                <fieldset className="grid w-full grid-cols-1 gap-4 flex-1">
                  <label htmlFor="message" className="sm:text-lg text-base font-normal leading-none text-gray-500">Your message (Optional)</label>
                  <textarea
                    id="message"
                    className="text-wow-grey rounded border border-transparent w-full hover:border-gray-500/20 focus:border-blue-400 p-4 transition-color duration-300 placeholder-gray-500/50 outline-0 bg-blue-100 text-gray-500 text-base sm:text-lg font-normal leading-relaxed resize-none col-span-full"
                    rows="5"
                    name="message"
                    placeholder="Start typing..."
                  />
                </fieldset>
              </div>
              <div className="col-span-full flex">
                <button
                  className="mx-auto w-full max-w-[228px] flex justify-center px-6 md:px-8 py-4 text-base sm:text-lg font-medium rounded-lg items-center relative outline-0 duration-300 disabled:!bg-opacity-50 disabled:hover:!bg-opacity-50 disabled:!text-opacity-50 gap-2 bg-blue-400 text-blue-100 hover:bg-opacity-80"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;
