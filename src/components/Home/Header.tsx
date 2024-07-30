// import React from 'react';
// import { useRouter } from 'next/router';

// const Header = () => {
//   const router = useRouter();
//   const currentPath = router.pathname;

//   const isActive = (path: string) => currentPath === path;

//   return (
//     <nav className="fixed top-0 bg-white w-full md:pr-[2%] lg:pr-0 min-h-[72px] px-4 md:pl-[2%] flex z-50">
//       <a href="/" className="text-5xl font-bold mr-auto my-auto text-gray-500">
//         re<span className="text-blue-400"><i>m</i></span>ark
//       </a>

//       <div className="lg:flex ml-auto justify-between items-center gap-x-20 hidden">
//         <div className="flex justify-center items-center w-fit gap-x-10 h-full">
//           <div className={`border-b-[3px] h-full flex justify-center items-center ${isActive('/') ? 'border-blue-400' : 'border-transparent'}`}>
//             <a className={`text-base font-medium px-2 h-fit ${isActive('/') ? 'text-blue-400' : 'text-gray-500'} hover:text-blue-400 text-center flex justify-center items-center`} href="/">
//               home
//             </a>
//           </div>
//           <div className={`border-b-[3px] h-full flex justify-center items-center ${isActive('/services') ? 'border-blue-400' : 'border-transparent'}`}>
//             <a className={`text-base font-medium px-2 h-fit ${isActive('/services') ? 'text-blue-400' : 'text-gray-500'} hover:text-blue-400 text-center flex justify-center items-center`} href="/services">
//               services
//             </a>
//           </div>
//           <div className={`border-b-[3px] h-full flex justify-center items-center ${isActive('/about') ? 'border-blue-400' : 'border-transparent'}`}>
//             <a className={`text-base font-medium px-2 h-fit ${isActive('/about') ? 'text-blue-400' : 'text-gray-500'} hover:text-blue-400 text-center flex justify-center items-center`} href="/about">
//               about
//             </a>
//           </div>
//           <div className={`border-b-[3px] h-full flex justify-center items-center ${isActive('#blog') ? 'border-blue-400' : 'border-transparent'}`}>
//             <a className={`text-base font-medium px-2 h-fit ${isActive('#blog') ? 'text-blue-400' : 'text-gray-500'} hover:text-blue-400 text-center flex justify-center items-center`} href="#blog">
//               blog
//             </a>
//           </div>
//         </div>
//         <a className="text-white text-lg font-medium leading-normal bg-blue-400 hover:bg-blue-100 hover:text-blue-400 transition-colors duration-500 py-6 px-14" href="/contact">
//           contact us
//         </a>
//       </div>
//       <button className="outline-0 border-0 w-8 flex-col my-auto justify-start items-start gap-y-2 lg:hidden inline-flex">
//         <span className="w-8 border-y border-gray-500"></span>
//         <span className="w-8 border-y border-gray-500"></span>
//       </button>
//     </nav>
//   );
// };

// export default Header;

import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const currentPath = router.pathname;

  const isActive = (path) => currentPath === path;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 bg-white w-full min-h-[72px] px-4 flex z-50">
      <a href="/" className="text-5xl font-bold mr-auto my-auto text-gray-500">
        re<span className="text-blue-400"><i>m</i></span>ark
      </a>

      <div className={`lg:flex ml-auto justify-between items-center gap-x-20 hidden`}>
        <div className="flex justify-center items-center w-fit gap-x-10 h-full">
          <div className={`border-b-[3px] h-full flex justify-center items-center ${isActive('/') ? 'border-blue-400' : 'border-transparent'}`}>
            <a className={`text-base font-medium px-2 h-fit ${isActive('/') ? 'text-blue-400' : 'text-gray-500'} hover:text-blue-400 text-center flex justify-center items-center`} href="/">
              home
            </a>
          </div>
          <div className={`border-b-[3px] h-full flex justify-center items-center ${isActive('/services') ? 'border-blue-400' : 'border-transparent'}`}>
            <a className={`text-base font-medium px-2 h-fit ${isActive('/services') ? 'text-blue-400' : 'text-gray-500'} hover:text-blue-400 text-center flex justify-center items-center`} href="/services">
              services
            </a>
          </div>
          <div className={`border-b-[3px] h-full flex justify-center items-center ${isActive('/about') ? 'border-blue-400' : 'border-transparent'}`}>
            <a className={`text-base font-medium px-2 h-fit ${isActive('/about') ? 'text-blue-400' : 'text-gray-500'} hover:text-blue-400 text-center flex justify-center items-center`} href="/about">
              about
            </a>
          </div>
          <div className={`border-b-[3px] h-full flex justify-center items-center ${isActive('#blog') ? 'border-blue-400' : 'border-transparent'}`}>
            <a className={`text-base font-medium px-2 h-fit ${isActive('#blog') ? 'text-blue-400' : 'text-gray-500'} hover:text-blue-400 text-center flex justify-center items-center`} href="#blog">
              blog
            </a>
          </div>
        </div>
        <a className="text-white text-lg font-medium leading-normal bg-blue-400 hover:bg-blue-100 hover:text-blue-400 transition-colors duration-500 py-6 px-14" href="/contact">
          contact us
        </a>
      </div>
      <button onClick={toggleMenu} className="outline-0 border-0 w-8 flex-col my-auto justify-start items-start gap-y-2 lg:hidden inline-flex">
        <span className="w-8 border-y border-gray-500"></span>
        <span className="w-8 border-y border-gray-500"></span>
      </button>

      {menuOpen && (
        <div className="fixed inset-0 bg-blue-400 z-40 flex flex-col items-center justify-center p-4">
                <a href="/" className="text-5xl font-bold mr-auto my-auto text-gray-400">
        re<span className="text-blue-100"><i>m</i></span>ark
      </a>
      <button onClick={toggleMenu} className="absolute top-9 right-4 outline-0 border-0 w-8 flex-col justify-start items-start gap-y-2 lg:hidden inline-flex">
            <span className="w-8 h-1 bg-gray-500 transform rotate-45 translate-y-1"></span>
            <span className="w-8 h-1 bg-gray-500 transform -rotate-45 -translate-y-1"></span>
          </button>
          <div className="flex flex-col items-center justify-center gap-10 h-full">
            <a className={`text-3xl font-medium ${isActive('/') } hover:text-gray-500`} href="/" onClick={toggleMenu}>
              home
            </a>
            <a className={`text-3xl font-medium ${isActive('/services') } hover:text-gray-500`} href="/services" onClick={toggleMenu}>
              services
            </a>
            <a className={`text-3xl font-medium ${isActive('/about') } hover:text-gray-500`} href="/about" onClick={toggleMenu}>
              about
            </a>
            <a className={`text-3xl font-medium ${isActive('#blog') } hover:text-gray-500`} href="#blog" onClick={toggleMenu}>
              blog
            </a>
            <a className="text-blue-400 bg-white rounded text-3xl font-medium leading-normal hover:bg-blue-100 hover:text-blue-400 transition-colors duration-500 py-3 px-6" href="/contact" onClick={toggleMenu}>
              contact us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
