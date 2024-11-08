import React from 'react'
import RightArrowIcon from '../../../svg/RightArrowIcon'
import CpuIcon from '../../../svg/CpuIcon'
import BuissnessIcon from '../../../svg/BuissnessIcon'
import ChartBarIcon from '../../../svg/ChartBarIcon'
import CreditCardIcon from '../../../svg/CreditCardIcon'
import BugIcon from '../../../svg/BugIcon'
import ReceiptIcon from '../../../svg/ReceiptIcon'
import MegaPhoneIcon from '../../../svg/MegaPhoneIcon'
import CameraIcon from '../../../svg/CameraIcon'
import PackageIcon from '../../../svg/PackageIcon'
import PennibIcon from '../../../svg/PennibIcon'
import FirstaidIcon from '../../../svg/FirstaidIcon'
import HeadphoeIcon from '../../../svg/HeadphoeIcon'

function Category() {
    return (
        <div className="max-w-[1920px] px-[300px] py-[80px] m-auto flex flex-col gap-10">
          <p className=" m-auto font-inter text-[40px] font-semibold leading-[48px] tracking-[-0.01em] text-[#1D2026]">
            Browse top category
          </p>
    
          <div className="w-[1320px] flex flex-col gap-6">
            {/* 1st row */}
            <div className='w-[1320px] flex gap-6'>
                <div className='w-[312px] bg-[#EBEBFF] px-[20px] py-[20px] flex gap-5 cursor-pointer hover:shadow-[0px_12px_32px_0px_#1D20261A] '>
                   <div className='w-[64px] px-[16px] py-[16px] bg-[#FFFFFF] flex gap-2'>
                        <CpuIcon/>
                   </div>
                   <div className="w-[188px] flex flex-col gap-2">
                        <p className="font-inter text-[16px] font-medium leading-[22px] text-left text-[#1D2026]">
                            Label
                        </p>
                        <p className="font-inter text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-left text-[#6E7485]">
                            63,476 Courses
                        </p>
                    </div>
                </div>
                <div className='w-[312px] bg-[#E1F7E3] px-[20px] py-[20px] flex gap-5 cursor-pointer hover:shadow-[0px_12px_32px_0px_#1D20261A] '>
                   <div className='w-[64px] px-[16px] py-[16px] bg-[#FFFFFF] flex gap-2'>
                        <BuissnessIcon/>
                   </div>
                   <div className="w-[188px] flex flex-col gap-2">
                        <p className="font-inter text-[16px] font-medium leading-[22px] text-left text-[#1D2026]">
                            Business
                        </p>
                        <p className="font-inter text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-left text-[#6E7485]">
                            52,822 Courses
                        </p>
                    </div>
                </div>
                <div className='w-[312px] bg-[#FFF2E5] px-[20px] py-[20px] flex gap-5 cursor-pointer hover:shadow-[0px_12px_32px_0px_#1D20261A] '>
                   <div className='w-[64px] px-[16px] py-[16px] bg-[#FFFFFF] flex gap-2'>
                        <CreditCardIcon/>
                   </div>
                   <div className="w-[188px] flex flex-col gap-2">
                        <p className="font-inter text-[16px] font-medium leading-[22px] text-left text-[#1D2026]">
                            Finance & Accounting
                        </p>
                        <p className="font-inter text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-left text-[#6E7485]">
                            33,841 Courses
                        </p>
                    </div>
                </div>
                <div className='w-[312px] bg-[#FFF0F0] px-[20px] py-[20px] flex gap-5 cursor-pointer hover:shadow-[0px_12px_32px_0px_#1D20261A] '>
                   <div className='w-[64px] px-[16px] py-[16px] bg-[#FFFFFF] flex gap-2'>
                        <ChartBarIcon/>
                   </div>
                   <div className="w-[188px] flex flex-col gap-2">
                        <p className="font-inter text-[16px] font-medium leading-[22px] text-left text-[#1D2026]">
                            IT & Software
                        </p>
                        <p className="font-inter text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-left text-[#6E7485]">
                            22,649 Courses
                        </p>
                    </div>
                </div>
            </div>
            {/* 2nd row */}
            <div className='w-[1320px] flex gap-6'>
                <div className=' w-[312px] bg-[#FFFFFF] px-[20px] py-[20px] flex gap-5 cursor-pointer hover:shadow-[0px_12px_32px_0px_#1D20261A]'>
                   <div className='w-[64px] px-[16px] py-[16px] bg-[#FF6636] flex gap-2'>
                        <BugIcon/>
                   </div>
                   <div className="w-[188px] flex flex-col gap-2">
                        <p className="font-inter text-[16px] font-medium leading-[22px] text-left text-[#1D2026]">
                            Personal Development
                        </p>
                        <p className="font-inter text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-left text-[#6E7485]">
                            20,126 Courses
                        </p>
                    </div>
                </div>
                <div className='w-[312px] bg-[#F5F7FA] px-[20px] py-[20px] flex gap-5 cursor-pointer hover:shadow-[0px_12px_32px_0px_#1D20261A]'>
                   <div className='w-[64px] px-[16px] py-[16px] bg-[#FFFFFF] flex gap-2'>
                        <ReceiptIcon/>
                   </div>
                   <div className="w-[188px] flex flex-col gap-2">
                        <p className="font-inter text-[16px] font-medium leading-[22px] text-left text-[#1D2026]">
                            Office Productivity
                        </p>
                        <p className="font-inter text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-left text-[#6E7485]">
                            13,932 Courses
                        </p>
                    </div>
                </div>
                <div className='w-[312px] bg-[#EBEBFF] px-[20px] py-[20px] flex gap-5 cursor-pointer hover:shadow-[0px_12px_32px_0px_#1D20261A]'>
                   <div className='w-[64px] px-[16px] py-[16px] bg-[#FFFFFF] flex gap-2'>
                        <MegaPhoneIcon/>
                   </div>
                   <div className="w-[188px] flex flex-col gap-2">
                        <p className="font-inter text-[16px] font-medium leading-[22px] text-left text-[#1D2026]">
                            Marketing
                        </p>
                        <p className="font-inter text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-left text-[#6E7485]">
                            12,068 Courses
                        </p>
                    </div>
                </div>
                <div className='w-[312px] bg-[#F5F7FA] px-[20px] py-[20px] flex gap-5 cursor-pointer hover:shadow-[0px_12px_32px_0px_#1D20261A]'>
                   <div className='w-[64px] px-[16px] py-[16px] bg-[#FFFFFF] flex gap-2'>
                        <CameraIcon/>
                   </div>
                   <div className="w-[188px] flex flex-col gap-2">
                        <p className="font-inter text-[16px] font-medium leading-[22px] text-left text-[#1D2026]">
                            Photography & Video
                        </p>
                        <p className="font-inter text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-left text-[#6E7485]">
                            6,196 Courses
                        </p>
                    </div>
                </div>
            </div>
            {/* 3rd row */}
            <div className='w-[1320px] flex gap-6'>
                <div className='w-[312px] bg-[#FFF2E5] px-[20px] py-[20px] flex gap-5 cursor-pointer hover:shadow-[0px_12px_32px_0px_#1D20261A]'>
                   <div className='w-[64px] px-[16px] py-[16px] bg-[#FFFFFF] flex gap-2'>
                        <PackageIcon/>
                   </div>
                   <div className="w-[188px] flex flex-col gap-2">
                        <p className="font-inter text-[16px] font-medium leading-[22px] text-left text-[#1D2026]">
                            Lifestyle
                        </p>
                        <p className="font-inter text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-left text-[#6E7485]">
                            2,736 Courses
                        </p>
                    </div>
                </div>
                <div className='w-[312px] bg-[#FFEEE8] px-[20px] py-[20px] flex gap-5 cursor-pointer hover:shadow-[0px_12px_32px_0px_#1D20261A]'>
                   <div className='w-[64px] px-[16px] py-[16px] bg-[#FFFFFF] flex gap-2'>
                        <PennibIcon/>
                   </div>
                   <div className="w-[188px] flex flex-col gap-2">
                        <p className="font-inter text-[16px] font-medium leading-[22px] text-left text-[#1D2026]">
                            Design
                        </p>
                        <p className="font-inter text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-left text-[#6E7485]">
                            2,600 Courses
                        </p>
                    </div>
                </div>
                <div className='w-[312px] bg-[#E1F7E3] px-[20px] py-[20px] flex gap-5 cursor-pointer hover:shadow-[0px_12px_32px_0px_#1D20261A]'>
                   <div className='w-[64px] px-[16px] py-[16px] bg-[#FFFFFF] flex gap-2'>
                        <FirstaidIcon/>
                   </div>
                   <div className="w-[188px] flex flex-col gap-2">
                        <p className="font-inter text-[16px] font-medium leading-[22px] text-left text-[#1D2026]">
                            Health & Fitness
                        </p>
                        <p className="font-inter text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-left text-[#6E7485]">
                            1,678 Courses
                        </p>
                    </div>
                </div>
                <div className='w-[312px] bg-[#FFF2E5] px-[20px] py-[20px] flex gap-5 cursor-pointer hover:shadow-[0px_12px_32px_0px_#1D20261A]'>
                   <div className='w-[64px] px-[16px] py-[16px] bg-[#FFFFFF] flex gap-2'>
                        <HeadphoeIcon/>
                   </div>
                   <div className="w-[188px] flex flex-col gap-2">
                        <p className="font-inter text-[16px] font-medium leading-[22px] text-left text-[#1D2026]">
                            Music
                        </p>
                        <p className="font-inter text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-left text-[#6E7485]">
                            959 Courses
                        </p>
                    </div>
                </div>
            </div>
          </div>
    
          <div className="w-[369px] flex gap-3 m-auto items-center justify-center ">
            <p className="text-[#4E5566] font-inter text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-center">
              We have more category & subcategory.
            </p>
    
            <button className="text-[#FF6636] w-[101px] py-[4px] flex items-center justify-center gap-2 font-inter text-[14px] font-medium leading-[20px] tracking-[-0.01em] text-center">
              Browse All <RightArrowIcon />
            </button>
          </div>
        </div>
      )
}

export default Category
