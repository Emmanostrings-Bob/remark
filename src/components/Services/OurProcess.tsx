import React from 'react';

const OurServices = () => {
  const processSteps = [
    {
      id: 'brand-audit',
      step: 1,
      title: 'brand audit',
      description:
        'We start by looking at your current content marketing efforts, we see what you have on ground. We will also look at your brand message, goals, KPIs and see how your current content marketing activities align with them. This helps to give us an idea of where you are with regard to content marketing.',
    },
    {
      id: 'strategy',
      step: 2,
      title: 'strategy',
      description:
        'After the brand audit, we move to drawing up a strategy for your various content channels. We design an SEO strategy, Social Media Strategy for all social media channels and email marketing strategy. The goal of the strategy is to help us create a plan that helps us to achieve your content goals and reach your business KPIs.',
    },
    {
      id: 'implementation',
      step: 3,
      title: 'implementation',
      description:
        'After we have a working strategy for all the individual content channels, we implement. We start to put out content on your various channels and execute on all the plans that we have. This is the core of the process because it will go on day-by-day!',
    },
    {
      id: 'results',
      step: 4,
      title: 'results',
      description:
        'At the end of a 30-day period, we look at the results we have gotten so far from our content marketing efforts. We see if we are getting to our set goals and KPIs.',
    },
    {
      id: 'evaluation',
      step: 5,
      title: 'evaluation',
      description:
        'After obtaining the results, the next phase is to evaluate what we are doing to see what is working and resonating with your target market and what is not. This allows us to make better content that will drive better results for your business.',
    },
  ];

  return (
    <div className="w-full bg-blue-100 px-4 md:px-[2%] z-[1] relative flex pt-[142px] pb-24 md:py-[196px] -mt-[50px] md:-mt-[72px]">
      <div id="process" className="mx-auto w-full max-w-10xl gap-y-11 md:gap-y-24 flex flex-col items-center">
        <h3 className="text-blue-400 text-2xl sm:text-[32px] font-normal">our process</h3>
        <div className="grid grid-cols-1 gap-y-8 md:gap-y-6 mx-auto place-items-center max-w-[514px]">
          {processSteps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div id={step.id} className="flex justify-start items-start gap-x-5">
                <span className="text-blue-400 text-2xl sm:text-[40px] font-bold leading-[48px]">
                  {step.step}
                </span>
                <div className="space-y-6">
                  <h3 className="text-blue-400 text-2xl font-medium">{step.title}</h3>
                  <p className="text-gray-500 text-lg sm:text-xl font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
              {index < processSteps.length - 1 && (
                <div className="border-r w-0 h-24 md:h-[140px] border-gray-500/30"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
