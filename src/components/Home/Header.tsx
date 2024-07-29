import React from 'react';

const Header = () => {
  return (
    <nav className=" fixed top-0 bg-white w-full md:pr-[2%] lg:pr-0 min-h-[72px] px-4 md:pl-[2%] flex z-50">
      <div className="text-5xl font-bold mr-auto my-auto text-black">re<span className='text-blue-500'><i>m</i></span>ark</div>
      <div className="lg:flex ml-auto justify-between items-center gap-x-20 hidden">
        <div className="flex justify-center items-center w-fit gap-x-10 h-full text-black">
          <a href="#home" className="hover:text-blue-500">home</a>
          <a href="#works" className="hover:text-blue-500">works</a>
          <a href="#services" className="hover:text-blue-500">services</a>
          <a href="#about" className="hover:text-blue-500">about</a>
          <a href="#blog" className="hover:text-blue-500">blog</a>
          <a href="#contact" className="text-white text-lg font-medium leading-normal bg-blue-500 hover:bg-blue-200 hover:text-blue-500 transition-colors duration-500 py-6 px-14">contact us</a>
        </div>
        <button className="outline-0 border-0 w-8 flex-col my-auto justify-start items-start gap-y-2 lg:hidden inline-flex"><span className="w-8 border-y border-remark-grey"></span><span className="w-8 border-y border-remark-grey"></span></button>
      </div>
    </nav>
  );
};

export default Header;
