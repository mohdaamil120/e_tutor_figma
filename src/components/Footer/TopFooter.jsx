import React from 'react'

function TopFooter() {
  return (
    <div className='w-full  py-24 px-[300px] flex gap-36 bg-[#1D2026]  shadow-[inset_0px_-1px_0px_0px_rgba(54,59,71,0.5)] ' >
        {/* left div  */}
        <div className='  w-[536px] flex flex-col gap-8'>
          <p className='text-white font-inter text-[40px] font-semibold leading-[48px] tracking-[-0.01em] text-left'>
            Start learning with 67.1k students around the world.
          </p>
          <div className='w-[381px] flex gap-4'>
            <button className='w-[168px] px-6 flex gap-3 bg-[#FF6636] text-white font-inter text-lg font-semibold leading-[48px] tracking-[-0.008em] text-justify'>
              Join the Family
            </button>
            <button className='w-[197px] px-6 flex gap-3 bg-[#FFFFFF0D] text-white font-inter text-lg font-semibold leading-[48px] tracking-[-0.008em] text-justify'>
              Browse all courses
            </button>
          </div>
        </div>

        {/* Right div */}
        <div className='w-[648px] flex  items-center gap-6'>
            <div className='w-[200px] flex flex-col gap-3'>
                <p className='text-white font-inter text-[40px] font-semibold leading-[48px] tracking-[-0.01em] text-justify'>
                    6.3k
                </p>
                <p className='text-[#B7BAC7] font-inter text-lg font-medium leading-[22px] text-justify'>
                    Online Courses
                </p>
            </div>
            <div className='w-[200px] flex flex-col gap-3'>
                <p className='text-white font-inter text-[40px] font-semibold leading-[48px] tracking-[-0.01em] text-justify'>
                    36k
                </p>
                <p className='text-[#B7BAC7] font-inter text-lg font-medium leading-[22px] text-justify'>
                    Certified Instructor
                </p>
            </div>
            <div className='w-[200px] flex flex-col gap-3'>
                <p className='text-white font-inter text-[40px] font-semibold leading-[48px] tracking-[-0.01em] text-justify'>
                    99.9%
                </p>
                <p className='text-[#B7BAC7] font-inter text-lg font-medium leading-[22px] text-justify'>
                    Sucess Rate
                </p>
            </div>
        </div>
      </div>
  )
}

export default TopFooter
