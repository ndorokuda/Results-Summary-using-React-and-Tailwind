import React from 'react';

const Summary = () => {
  return (
    <>
      {/* <!-- Bottom Section --> */}
      <section className='mt-7 px-7 pb-7 md:rounded-r-[50px] '>
        <p className='text-2xl font-semibold mb-7'>Summary</p>
        <div className='flex flex-col gap-5'>
          {/* <!-- Reaction --> */}
          <div className='w-full h-16 flex justify-between items-center text-xl bg-lightRedLowOpacity px-5 rounded-xl'>
            <div className='flex gap-3 font-bold text-lightRed'>
              <img
                src='../src/assets/images/icon-reaction.svg'
                alt='icon-reaction'
              />
              <p>Reaction</p>
            </div>
            <div className='grade text-lightLavender font-bold'>
              <span className='text-darkGrayBlue'>80</span> / 100
            </div>
          </div>
          {/* <!-- Memory --> */}
          <div className='w-full h-16 flex justify-between items-center text-xl bg-orangeYellowLowOpacity px-5 rounded-xl'>
            <div className='flex gap-3 font-semibold text-orangeYellow'>
              <img
                src='../src/assets/images/icon-memory.svg'
                alt='icon-memory'
              />
              <p>Reaction</p>
            </div>
            <div className='grade text-lightLavender font-bold'>
              <span className='text-darkGrayBlue'>92</span> / 100
            </div>
          </div>
          {/* <!-- Verbal--> */}
          <div className='w-full h-16 flex justify-between items-center text-xl bg-greenTealLowOpacity px-5 rounded-xl'>
            <div className='flex gap-3 font-semibold text-greenTeal'>
              <img
                src='../src/assets/images/icon-verbal.svg'
                alt='icon-verbal'
              />
              <p>Reaction</p>
            </div>
            <div className='grade text-lightLavender font-bold'>
              <span className='text-darkGrayBlue'>61</span> / 100
            </div>
          </div>
          {/* <!-- Visual --> */}
          <div className='w-full h-16 flex justify-between items-center text-xl bg-cobaltBlueLowOpacity px-5 rounded-xl'>
            <div className='flex gap-3 font-semibold text-cobaltBlue'>
              <img
                src='../src/assets/images/icon-visual.svg'
                alt='icon-visual'
              />
              <p>Visual</p>
            </div>
            <div className='grade text-lightLavender font-bold'>
              <span className='text-darkGrayBlue'>72</span> / 100
            </div>
          </div>
        </div>
        {/* <!-- Button --> */}
        <section className='mx-auto mt-7'>
          <button className='bg-darkGrayBlue text-white w-full h-16 text-xl rounded-full font-semibold hover:bg-gradient-to-b from-lightSlateBlue to-lightRoyalBlue'>
            Continue
          </button>
        </section>
      </section>
    </>
  );
};

export default Summary;
