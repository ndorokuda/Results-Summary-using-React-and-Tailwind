const YourResult = () => {
  return (
    <>
      {/* <!-- Top Section --> */}
      <section className='font-bodyFont text-center'>
        <div className='bg-gradient-to-b from-lightSlateBlue to-lightRoyalBlue py-5 rounded-b-[50px] md:rounded-[50px] h-full'>
          <p className='pt-5 text-xl text-lightLavender font-semibold'>
            Your Result
          </p>
          <div className='w-52 h-52 bg-gradient-to-b from-violetBlue to-persianBlue rounded-full mx-auto my-7 flex flex-col justify-center items-center'>
            <p className='text-white text-8xl font-extrabold mb-4'>76</p>
            <p className='text-lightLavender text-lg opacity-60'>of 100</p>
          </div>
          <p className='text-4xl text-white font-semibold mb-4'>Great</p>
          <p className='text-lightLavender opacity-80 text-lg'>
            You scored higher than 65% of the
            <span className='block'>people who have taken these tests</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default YourResult;
