import React from 'react';

import FirstRowOfTopCourses from './FirstRowOfTopCourses';

function TopCourses() {
  return (
    <div className=' max-w-[1920px] m-auto h-[1179px] pt-20 pb-80 px-[300px] flex flex-col gap-10 bg-[#F5F7FA]'>
      <p className='text-[#1D2026] font-inter text-[40px] font-semibold leading-[48px] m-auto'>
        Best selling courses
      </p>

      <div className='w-[1320px] flex flex-col gap-6'>
        {/* both rows */}
        <FirstRowOfTopCourses/>
      </div>
    </div>
  );
}

export default TopCourses;
