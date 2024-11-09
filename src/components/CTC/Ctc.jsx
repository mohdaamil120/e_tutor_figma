import React from 'react';
import RightArrowIcon from '../../../svg/RightArrowIcon';
import MenImage from "../../assets/1.png"

function Ctc() {
  return (
    <div className="max-w-[1920px] m-auto pt-[80px] px-[300px] pb-[320px] flex gap-6 bg-[#F5F7FA]">
      {/* left div */}
      <div className=" relative overflow-hidden  w-[648px] pt-[40px] flex gap-6 flex-col bg-gradient-to-r from-[#CC522B] to-[#FF6636]">
        <div className=" w-[568px] flex flex-col gap-3 mr-10 ml-10">
          <p className=" w-[600px] font-inter text-[32px] font-semibold leading-[40px] tracking-[-0.01em] text-left text-white">
            Become an instructor
          </p>
          <span className="w-[293px] font-inter text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-left text-white ">
            Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.
          </span>
        </div>
        <button className="w-[196px] px-[24px] flex gap-3 ml-10 mb-10 mr-103  justify-center items-center bg-white shadow-[0px_6px_16px_0px_#00000003] font-inter text-[16px] font-semibold leading-[48px] tracking-[-0.008em] text-left text-[#FF6636]">
          Start teaching <RightArrowIcon />
        </button>

        <img className='absolute  right-0  top-2 w-[310px] ' src={MenImage} alt="men image" />
      </div>

      {/* right div */}
      <div className="w-[648px] pt-[40px] flex flex-col gap-[27px] bg-white">
            <p className=" ml-10 mr-[154px] font-inter text-[32px] font-semibold leading-[40px] tracking-[-0.01em] text-left text-[#1D2026]">
                Your teaching & earning steps
            </p>

            <div className="w-[568px] ml-10 mr-10 mb-10 flex flex-col gap-5 ">
                <div className="w-[568px] flex  gap-5">
                    <div className="w-[274px] flex  items-center gap-4">
                        <div className="w-[52px] py-[11px] rounded-full bg-[#EBEBFF] flex items-center justify-center">
                        <p className="font-inter text-[24px] font-semibold leading-[29.76px] text-center text-[#564FFD]">
                            1
                        </p>
                        </div>
                        <p className="font-inter text-[16px] font-normal leading-[24px] text-left text-[#1D2026]">
                            Apply to become instructor
                        </p>
                    </div>
                    <div className="w-[274px] flex items-center gap-4">
                        <div className="w-[52px] py-[11px] rounded-full bg-[#FFF0F0] flex items-center justify-center">
                        <p className="font-inter text-[24px] font-semibold leading-[29.76px] text-center text-[#FF6636]">
                            2
                        </p>
                        </div>
                        <p className="font-inter text-[16px] font-normal leading-[24px] text-left text-[#1D2026]">
                            Build & edit your profile
                        </p>
                    </div>
                </div>
                <div className="w-[568px] flex gap-5">
                    <div className="w-[274px] flex  items-center gap-4">
                        <div className="w-[52px] py-[11px] rounded-full bg-[#FFF0F0] flex items-center justify-center">
                        <p className="font-inter text-[24px] font-semibold leading-[29.76px] text-center text-[#E34444]">
                            3
                        </p>
                        </div>
                        <p className="font-inter text-[16px] font-normal leading-[24px] text-left text-[#1D2026]">
                            Create your new course
                        </p>
                    </div>
                    <div className="w-[274px] flex  items-center gap-4">
                        <div className="w-[52px] py-[11px] rounded-full bg-[#E1F7E3] flex items-center justify-center">
                        <p className="font-inter text-[24px] font-semibold leading-[29.76px] text-center text-[#23BD33]">
                            4
                        </p>
                        </div>
                        <p className="font-inter text-[16px] font-normal leading-[24px] text-left text-[#1D2026]">
                            Start teaching & earning
                        </p>
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
}

export default Ctc;
