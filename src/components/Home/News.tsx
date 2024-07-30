import Image from "next/image";
import Link from "next/link";

const News = () => {
  return (
    <div className="w-full bg-white relative flex z-[2] md:-my-24 -my-12 rounded-t-[32px] md:rounded-t-[64px] py-[72px] md:py-24 md:rounded-b-[64px] rounded-b-[32px] md:px-[2%]">
      <div className="max-w-[1120px] w-full mx-auto flex flex-col justify-center items-start md:items-center gap-y-10 md:gap-y-20">
        <div className="flex flex-col justify-center items-start md:items-center px-4 md:px-0">
          <div className="border w-12 border-blue-400 h-0"></div>
          <h3 className="md:text-center mt-4 text-left text-gray-500 text-2xl sm:text-[32px] font-normal leading-[38px] sm:leading-[49px]">
            insights, news, and more
          </h3>
        </div>
        <div className="w-full">
          <div className="md:flex hidden justify-between mx-auto items-center gap-x-6 lg:gap-x-20">
            <Link
              href="/"
              className="max-w-[311px] w-full flex flex-col gap-y-6 lg:gap-y-[30px] justify-start items-start text-gray-500"
            >
              <div className="max-w-[283px] w-full h-[180px] rounded overflow-hidden">
                <Image
                  alt="3 Essential Marketing Channels Every Business Must Invest In"
                  loading="lazy"
                  width={283}
                  height={180}
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                  src="https://cdn.sanity.io/images/nwtu39nc/production/cdf3678b45ee5815612beb90e7c738a0e27066e0-1200x628.png?fit=max&auto=format"
                />
              </div>
              <p className="text-sm font-normal leading-[15px]">February 28, 2024</p>
              <h3 className="lg:text-xl text-lg font-normal leading-relaxed">
                3 Essential Marketing Channels Every Business Must Invest In
              </h3>
            </Link>
            <Link
              href="/"
              className="max-w-[311px] w-full flex flex-col gap-y-6 lg:gap-y-[30px] justify-start items-start text-gray-500"
            >
              <div className="max-w-[283px] w-full h-[180px] rounded overflow-hidden">
                <Image
                  alt="Avoid These 4 Common Marketing Mistakes to Propel Your Brand Forward"
                  loading="lazy"
                  width={283}
                  height={180}
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                  src="https://cdn.sanity.io/images/nwtu39nc/production/ecdba6368886ed647e965b63d3a10ca65775a68e-1600x840.webp?fit=max&auto=format"
                />
              </div>
              <p className="text-sm font-normal leading-[15px]">February 28, 2024</p>
              <h3 className="lg:text-xl text-lg font-normal leading-relaxed">
                Avoid These 4 Common Marketing Mistakes to Propel Your Brand Forward
              </h3>
            </Link>
            <Link
              href="/"
              className="max-w-[311px] w-full flex flex-col gap-y-6 lg:gap-y-[30px] justify-start items-start text-gray-500"
            >
              <div className="max-w-[283px] w-full h-[180px] rounded overflow-hidden">
                <Image
                  alt="5 Crucial Reasons Why You Need Marketing During A Recession"
                  loading="lazy"
                  width={283}
                  height={180}
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                  src="https://cdn.sanity.io/images/nwtu39nc/production/764e59d11a7f068752533e09e0e87f4777fe8409-1000x667.jpg?fit=max&auto=format"
                />
              </div>
              <p className="text-sm font-normal leading-[15px]">February 26, 2024</p>
              <h3 className="lg:text-xl text-lg font-normal leading-relaxed">
                5 Crucial Reasons Why You Need Marketing During A Recession
              </h3>
            </Link>
          </div>
        </div>
        <div className="px-4 md:px-0 mx-auto w-full max-w-[283px] md:max-w-[200px] flex justify-center items-center">
          <Link
            href="#blog"
            className="bg-blue-400 text-center text-base leading-[18px] font-medium w-full py-3 rounded text-blue-100"
          >
         more content
          </Link>
        </div>
      </div>
    </div>
  )
}

export default News
