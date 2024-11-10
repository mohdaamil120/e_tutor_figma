import React from 'react'
import StarIcon from '../../../svg/StarIcon';
import CourseImage from "../../assets/courseImage.jpg";
import sev from "../../assets/7.jpg";
import eig from "../../assets/8.jpg";
import nin from "../../assets/9.jpg";
import ten from "../../assets/10.jpg";
import ele from "../../assets/11.jpg";
import twe from "../../assets/12.jpg";
import thi from "../../assets/13.jpg";
import fou from "../../assets/14.jpg";
import fif from "../../assets/15.jpg";

function FirstRowOfTopCourses() {
  return (
    <>
        <div className='flex gap-6'>
            {/* 1st Card */}
            <div className='w-[244px]  bg-white shadow-md rounded-md'>
                    <img
                    className='w-full object-cover mb-4 shadow-inner'
                    src={CourseImage}
                    alt=""
                    />

                    <div className='flex flex-col gap-[10px] px-[14px]'>
                        <div className='flex justify-between'>
                            <div className='px-2 py-1 bg-[#FFEEE8] text-[#993D20] text-[10px] font-medium rounded'>
                            Design
                            </div>
                            <p className='text-[#FF6636] text-[16px] font-semibold'>
                            $57
                            </p>
                        </div>

                        <p className='text-[#1D2026] text-[14.7px] font-medium leading-5'>
                            Machine Learning A-Z™: Hands-On Python & R In Data...
                        </p>
                    </div>
                    <hr className='my-3 h-[1px] bg-[#E9EAF0] border-0 ' />

                    <div className=' flex justify-between items-center px-[14px] mt-[2px] mb-[14px]'>
                        <div className='flex items-center gap-1 text-[#4E5566] text-[14px] font-medium'>
                            <StarIcon />
                            <span>5.0</span>
                        </div>
                        <div className='flex items-center gap-1 text-[#4E5566] text-[14px] font-medium'>
                            <span>265.7K</span>
                            <span className='text-[#8C94A3] font-normal'>students</span>
                        </div>
                    </div>
            </div>
            {/* 2nd Card */}
            <div className='w-[244px]  bg-white shadow-md rounded-md'>
                    <img
                    className='w-full object-cover mb-4 shadow-inner'
                    src={sev}
                    alt=""
                    />

                    <div className='flex flex-col gap-[10px] px-[14px]'>
                        <div className='flex justify-between'>
                            <div className='px-2 py-1 bg-[#EBEBFF] text-[#342F98] text-[10px] font-medium rounded'>
                            DEVELOPMENTS
                            </div>
                            <p className='text-[#FF6636] text-[16px] font-semibold'>
                            $57
                            </p>
                        </div>

                        <p className='text-[#1D2026] text-[14.7px] font-medium leading-5'>
                            The Complete 2021 Web Development Bootcamp
                        </p>
                    </div>
                    <hr className='my-3 h-[1px] bg-[#E9EAF0] border-0 ' />

                    <div className=' flex justify-between items-center px-[14px] mt-[2px] mb-[14px]'>
                        <div className='flex items-center gap-1 text-[#4E5566] text-[14px] font-medium'>
                            <StarIcon />
                            <span>5.0</span>
                        </div>
                        <div className='flex items-center gap-1 text-[#4E5566] text-[14px] font-medium'>
                            <span>265.7K</span>
                            <span className='text-[#8C94A3] font-normal'>students</span>
                        </div>
                    </div>
            </div>
            {/* 3rd Card */}
            <div className='w-[244px]  bg-white shadow-md rounded-md'>
                    <img
                    className='w-full object-cover mb-4 shadow-inner'
                    src={eig}
                    alt=""
                    />

                    <div className='flex flex-col gap-[10px] px-[14px]'>
                        <div className='flex justify-between'>
                            <div className='px-2 py-1 bg-[#E1F7E3] text-[#15711F] text-[10px] font-medium rounded'>
                            BUSINESS
                            </div>
                            <p className='text-[#FF6636] text-[16px] font-semibold'>
                            $57
                            </p>
                        </div>

                        <p className='text-[#1D2026] text-[14.7px] font-medium leading-5'>
                            Learn Python Programming Masterclass
                        </p>
                    </div>
                    <hr className='my-3 h-[1px] bg-[#E9EAF0] border-0 ' />

                    <div className=' flex justify-between items-center px-[14px] mt-[2px] mb-[14px]'>
                        <div className='flex items-center gap-1 text-[#4E5566] text-[14px] font-medium'>
                            <StarIcon />
                            <span>5.0</span>
                        </div>
                        <div className='flex items-center gap-1 text-[#4E5566] text-[14px] font-medium'>
                            <span>265.7K</span>
                            <span className='text-[#8C94A3] font-normal'>students</span>
                        </div>
                    </div>
            </div>
            {/* 4th Card */}
            <div className='w-[244px]  bg-white shadow-md rounded-md'>
                    <img
                    className='w-full object-cover mb-4 shadow-inner'
                    src={nin}
                    alt=""
                    />

                    <div className='flex flex-col gap-[10px] px-[14px]'>
                        <div className='flex justify-between'>
                            <div className='px-2 py-1 bg-[#EBEBFF] text-[#342F98] text-[10px] font-medium rounded'>
                            MARKETING
                            </div>
                            <p className='text-[#FF6636] text-[16px] font-semibold'>
                            $57
                            </p>
                        </div>

                        <p className='text-[#1D2026] text-[14.7px] font-medium leading-5'>
                            The Complete Digital Marketing Course - 12 Courses in 1
                        </p>
                    </div>
                    <hr className='my-3 h-[1px] bg-[#E9EAF0] border-0 ' />

                    <div className=' flex justify-between items-center px-[14px] mt-[2px] mb-[14px]'>
                        <div className='flex items-center gap-1 text-[#4E5566] text-[14px] font-medium'>
                            <StarIcon />
                            <span>5.0</span>
                        </div>
                        <div className='flex items-center gap-1 text-[#4E5566] text-[14px] font-medium'>
                            <span>265.7K</span>
                            <span className='text-[#8C94A3] font-normal'>students</span>
                        </div>
                    </div>
            </div>
            {/* 5th Card */}
            <div className='w-[244px]  bg-white shadow-md rounded-md'>
                    <img
                    className='w-full object-cover mb-4 shadow-inner'
                    src={ten}
                    alt=""
                    />

                    <div className='flex flex-col gap-[10px] px-[14px]'>
                        <div className='flex justify-between'>
                            <div className='px-2 py-1 bg-[#FFF0F0] text-[#882929] text-[10px] font-medium rounded'>
                            IT & SOFTWARE
                            </div>
                            <p className='text-[#FF6636] text-[16px] font-semibold'>
                            $57
                            </p>
                        </div>

                        <p className='text-[#1D2026] text-[14.7px] font-medium leading-5'>
                            Reiki Level I, II and Master/Teacher Program
                        </p>
                    </div>
                    <hr className='my-3 h-[1px] bg-[#E9EAF0] border-0 ' />

                    <div className=' flex justify-between items-center px-[14px] mt-[2px] mb-[14px]'>
                        <div className='flex items-center gap-1 text-[#4E5566] text-[14px] font-medium'>
                            <StarIcon />
                            <span>5.0</span>
                        </div>
                        <div className='flex items-center gap-1 text-[#4E5566] text-[14px] font-medium'>
                            <span>265.7K</span>
                            <span className='text-[#8C94A3] font-normal'>students</span>
                        </div>
                    </div>
            </div>
        </div>
        <div className='flex gap-6'>
            {/* 1st Card */}
            <div className='w-[244px]  bg-white shadow-md rounded-md'>
                    <img
                    className='w-full object-cover mb-4 shadow-inner'
                    src={ele}
                    alt=""
                    />

                    <div className='flex flex-col gap-[10px] px-[14px]'>
                        <div className='flex justify-between'>
                            <div className='px-2 py-1 bg-[#FFF2E5] text-[#65390C] text-[10px] font-medium rounded'>
                            MUSIC
                            </div>
                            <p className='text-[#FF6636] text-[16px] font-semibold'>
                            $57
                            </p>
                        </div>

                        <p className='text-[#1D2026] text-[14.7px] font-medium leading-5'>
                            The Complete Foundation Stock Trading Course
                        </p>
                    </div>
                    <hr className='my-3 h-[1px] bg-[#E9EAF0] border-0 ' />

                    <div className=' flex justify-between items-center px-[14px] mt-[2px] mb-[14px]'>
                        <div className='flex items-center gap-1 text-[#4E5566] text-[14px] font-medium'>
                            <StarIcon />
                            <span>5.0</span>
                        </div>
                        <div className='flex items-center gap-1 text-[#4E5566] text-[14px] font-medium'>
                            <span>265.7K</span>
                            <span className='text-[#8C94A3] font-normal'>students</span>
                        </div>
                    </div>
            </div>
            {/* 2nd Card */}
            <div className='w-[244px]  bg-white shadow-md rounded-md'>
                    <img
                    className='w-full object-cover mb-4 shadow-inner'
                    src={twe}
                    alt=""
                    />

                    <div className='flex flex-col gap-[10px] px-[14px]'>
                        <div className='flex justify-between'>
                            <div className='px-2 py-1 bg-[#EBEBFF] text-[#342F98] text-[10px] font-medium rounded'>
                            MARKETING
                            </div>
                            <p className='text-[#FF6636] text-[16px] font-semibold'>
                            $57
                            </p>
                        </div>

                        <p className='text-[#1D2026] text-[14.7px] font-medium leading-5'>
                            Beginner to Pro in Excel: Financial Modeling and Valuati...
                        </p>
                    </div>
                    <hr className='my-3 h-[1px] bg-[#E9EAF0] border-0 ' />

                    <div className=' flex justify-between items-center px-[14px] mt-[2px] mb-[14px]'>
                        <div className='flex items-center gap-1 text-[#4E5566] text-[14px] font-medium'>
                            <StarIcon />
                            <span>5.0</span>
                        </div>
                        <div className='flex items-center gap-1 text-[#4E5566] text-[14px] font-medium'>
                            <span>265.7K</span>
                            <span className='text-[#8C94A3] font-normal'>students</span>
                        </div>
                    </div>
            </div>
            {/* 3rd Card */}
            <div className='w-[244px]  bg-white shadow-md rounded-md'>
                    <img
                    className='w-full object-cover mb-4 shadow-inner'
                    src={thi}
                    alt=""
                    />

                    <div className='flex flex-col gap-[10px] px-[14px]'>
                        <div className='flex justify-between'>
                            <div className='px-2 py-1 bg-[#E1F7E3] text-[#15711F] text-[10px] font-medium rounded'>
                            HEALTH & FITNESS
                            </div>
                            <p className='text-[#FF6636] text-[16px] font-semibold'>
                            $57
                            </p>
                        </div>

                        <p className='text-[#1D2026] text-[14.7px] font-medium leading-5'>
                             The Python Mega Course: Build 10 Real World Applications
                        </p>
                    </div>
                    <hr className='my-3 h-[1px] bg-[#E9EAF0] border-0 ' />

                    <div className=' flex justify-between items-center px-[14px] mt-[2px] mb-[14px]'>
                        <div className='flex items-center gap-1 text-[#4E5566] text-[14px] font-medium'>
                            <StarIcon />
                            <span>5.0</span>
                        </div>
                        <div className='flex items-center gap-1 text-[#4E5566] text-[14px] font-medium'>
                            <span>265.7K</span>
                            <span className='text-[#8C94A3] font-normal'>students</span>
                        </div>
                    </div>
            </div>
            {/* 4th Card */}
            <div className='w-[244px]  bg-white shadow-md rounded-md'>
                    <img
                    className='w-full object-cover mb-4 shadow-inner'
                    src={fou}
                    alt=""
                    />

                    <div className='flex flex-col gap-[10px] px-[14px]'>
                        <div className='flex justify-between'>
                            <div className='px-2 py-1 bg-[#FFEEE8] text-[#993D20] text-[10px] font-medium rounded'>
                            DESIGN
                            </div>
                            <p className='text-[#FF6636] text-[16px] font-semibold'>
                            $57
                            </p>
                        </div>

                        <p className='text-[#1D2026] text-[14.7px] font-medium leading-5'>
                            Copywriting - Become a Freelance Copywriter, your ow...
                        </p>
                    </div>
                    <hr className='my-3 h-[1px] bg-[#E9EAF0] border-0 ' />

                    <div className=' flex justify-between items-center px-[14px] mt-[2px] mb-[14px]'>
                        <div className='flex items-center gap-1 text-[#4E5566] text-[14px] font-medium'>
                            <StarIcon />
                            <span>5.0</span>
                        </div>
                        <div className='flex items-center gap-1 text-[#4E5566] text-[14px] font-medium'>
                            <span>265.7K</span>
                            <span className='text-[#8C94A3] font-normal'>students</span>
                        </div>
                    </div>
            </div>
            {/* 5th Card */}
            <div className='w-[244px]  bg-white shadow-md rounded-md'>
                    <img
                    className='w-full object-cover mb-4 shadow-inner'
                    src={fif}
                    alt=""
                    />

                    <div className='flex flex-col gap-[10px] px-[14px]'>
                        <div className='flex justify-between'>
                            <div className='px-2 py-1 bg-[#FFF2E5] text-[#65390C] text-[10px] font-medium rounded'>
                            LIFESTYLE
                            </div>
                            <p className='text-[#FF6636] text-[16px] font-semibold'>
                            $57
                            </p>
                        </div>

                        <p className='text-[#1D2026] text-[14.7px] font-medium leading-5'>
                            Google Analytics Certification - Learn How To Pass The Exam
                        </p>
                    </div>
                    <hr className='my-3 h-[1px] bg-[#E9EAF0] border-0 ' />

                    <div className=' flex justify-between items-center px-[14px] mt-[2px] mb-[14px]'>
                        <div className='flex items-center gap-1 text-[#4E5566] text-[14px] font-medium'>
                            <StarIcon />
                            <span>5.0</span>
                        </div>
                        <div className='flex items-center gap-1 text-[#4E5566] text-[14px] font-medium'>
                            <span>265.7K</span>
                            <span className='text-[#8C94A3] font-normal'>students</span>
                        </div>
                    </div>
            </div>
        </div>
    </>
    
  )
}

export default FirstRowOfTopCourses
