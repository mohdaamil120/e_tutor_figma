import React from 'react'
import image from "../../assets/Images.jpg"

function Header() {
  return (
    <div className='max-w-[1920px] m-auto'>
        <div className="w-[1620px] flex ml-auto justify-between">
            <div className="w-[648px] mt-[94px] flex flex-col gap-10">
                <p className="font-inter text-[72px] font-semibold leading-[74px] tracking-[-0.02em] text-left text-[#1D2026]">
                    Learn with expert anytime anywhere
                </p>

                <p className="font-inter text-[24px] font-normal leading-[32px] text-left text-[#4E5566]">
                    Our mission is to help people to find the best course online and learn with expert anytime, anywhere.
                </p>

                <button className="w-[198px] px-8  bg-[#FF6636] font-inter text-[18px] font-semibold leading-[56px] tracking-[-0.01em] text-left text-white">
                    Create Account
                </button>
            </div>

            <div className="w-[900px]  flex justify-center  ">
                <img src={image} alt="hero image"  />
            </div>
        </div>
    </div>
  )
}

export default Header
