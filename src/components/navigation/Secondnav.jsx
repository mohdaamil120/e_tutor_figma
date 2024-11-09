import React from 'react'
import Bellicon from '../../../svg/Bellicon'
import HeartIcon from '../../../svg/HeartIcon'
import ShopingCartIcon from '../../../svg/ShopingCartIcon'
import GraduationIcon from '../../../svg/GraduationIcon'
import DownArrowIcon from '../../../svg/DownArrowIcon'
import SearchIcon from '../../../svg/SearchIcon'

function Secondnav() {
    return (
        <div className=" max-w-[1920px] px-8 flex justify-between m-auto bg-[#1D2026] p-[24px_32px]  bg-white shadow-[inset_0px_-1px_0px_0px_#E9EAF0]">
            <div className=" flex max-w-[843px] gap-12 items-center justify-center">
                <div className='py-1 max-w-[153px] flex items-center gap-2 '>
                    <GraduationIcon width="40" height="40"/>
                    <p className='font-inter text-[32px] font-semibold leading-[39.68px] tracking-[-0.03em] text-left text-[#1D2026]'>E-tutor</p>
                </div>
                <div className=' flex max-w-[640px] gap-4 items-center justify-center'>
                    <div className="relative w-[200px]">
                        <select name="" id="" 
                            className="w-full px-[18px] py-[12px] pr-[40px] border border-[#E9EAF0] bg-[#FFFFFF] appearance-none text-[#1D2026] font-inter"
                        >
                            <option value="browse">Browse</option>
                        </select>
                        
                        {/* Custom dropdown arrow icon */}
                        <svg className="absolute right-[18px] top-1/2 transform -translate-y-1/2 pointer-events-none" 
                            width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            
                            <path d="M11 1L6 6L1 1" stroke="#4E5566" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className="relative w-[424px] border border-[#E9EAF0] flex items-center">
                        {/* Search icon */}
                        <span className="absolute left-[18px]">
                            <SearchIcon className="text-[#8C94A3]" />
                        </span>

                        {/* Input field */}
                        <input 
                            type="text" 
                            placeholder="What do you want to learn..." 
                            className="w-full  pl-[44px] py-[12px] text-[#8C94A3] font-inter text-[16px] leading-[24px] placeholder:text-[#8C94A3] outline-none"
                        />
                    </div>
                </div>
            </div>
            <div className="max-w-[424px] flex  items-center gap-6">
                <Bellicon/>
                <HeartIcon/>
                <ShopingCartIcon/>
                <div className="max-w-[280px] gap-3 flex">
                    <button className="max-w-[168px] px-6 bg-[#FFEEE8] font-inter text-[#FF6636]  font-semibold leading-[48px] tracking-[-0.008em]">
                        Create Account
                    </button>
                    <button className="max-w-[100px] px-6 bg-[#FF6636] font-inter text-white   font-semibold leading-[48px] tracking-[-0.008em]">
                        Sign In
                    </button>
                </div>
            </div>
        </div>
      )
}

export default Secondnav
