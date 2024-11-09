import React from 'react';
import RightArrowIcon from '../../../svg/RightArrowIcon';
import Devon from "../../assets/2.jpg"
import D from "../../assets/3.jpg"
import J from "../../assets/4.jpg"
import A from "../../assets/5.jpg"
import K from "../../assets/6.jpg"
import StarIcon from '../../../svg/StarIcon';

function TopInstructor() {
  return (
    <div className=' relative max-w-[1920px] m-auto'>
        <div className=" absolute top-[-240px] ml-[220px] mr-[220px] w-[1480px] pt-[80px] flex flex-col gap-[40px] border border-[#E9EAF0] bg-white ">
            {/* 1st row */}
            <p className="font-inter text-[40px] font-semibold leading-[48px] tracking-[-0.01em] text-center text-[#1D2026]">
                Top instructor of the month
            </p>
            
            {/* 2nd row */}
            <div className="w-[1320px] h-[362px] flex gap-[25px] mx-[80px] ">
                {/* 1st card */}
                <div className="w-[244px] h-[362px] p-0 pb-[12px] flex flex-col gap-[12px] border border-solid border-[#E9EAF0] bg-white">
                    <img className="shadow-[inset_0px_-1px_0px_0px_#E9EAF0]" src={Devon} alt="Profile image of Devon Lane" />
                    
                    <div className="w-[212px] h-[48px] flex flex-col gap-[4px] items-center">
                        <p className="font-inter text-[16px] font-medium leading-[22px] text-center text-[#1D2026]">
                        Devon Lane
                        </p>
                        <p className="font-inter text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-center text-[#8C94A3]">
                        Senior Developer
                        </p>
                    </div>

                    <hr className="border-t border-[#E9EAF0]" />

                    <div className="w-[244px] h-[22px] px-[16px] flex justify-between items-center">
                        <div className="flex items-center gap-[5px]">
                            <StarIcon />
                            <span className="font-inter text-[14px] font-medium leading-[20px] tracking-[-0.01em] text-left text-[#4E5566]">
                                4.6
                            </span>
                        </div>
                        <div className="w-[108px] flex justify-between ">
                            <span className="mt-[1px] mb-[1px] font-inter text-[14px] font-medium leading-[20px] tracking-[-0.01em] text-left text-[#4E5566]">
                                854
                            </span>
                            <span className="font-inter text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-right text-[#8C94A3]">
                                students
                            </span>
                        </div>
                    </div>
                </div> 
                {/* 2nd card */}
                <div className="w-[244px] h-[362px] p-0 pb-[12px] flex flex-col gap-[12px] border border-solid border-[#E9EAF0] bg-white">
                    <img className="shadow-[inset_0px_-1px_0px_0px_#E9EAF0]" src={D} alt="Profile image of Devon Lane" />
                    
                    <div className="w-[212px] h-[48px] flex flex-col gap-[4px] items-center">
                        <p className="font-inter text-[16px] font-medium leading-[22px] text-center text-[#1D2026]">
                        Darrell Steward
                        </p>
                        <p className="font-inter text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-center text-[#8C94A3]">
                        Digital Product Designer
                        </p>
                    </div>

                    <hr className="border-t border-[#E9EAF0]" />

                    <div className="w-[244px] h-[22px] px-[16px] flex justify-between items-center">
                        <div className="flex items-center gap-[5px]">
                            <StarIcon />
                            <span className="font-inter text-[14px] font-medium leading-[20px] tracking-[-0.01em] text-left text-[#4E5566]">
                                4.9
                            </span>
                        </div>
                        <div className="w-[108px] flex justify-between ">
                            <span className="mt-[1px] mb-[1px] font-inter text-[14px] font-medium leading-[20px] tracking-[-0.01em] text-left text-[#4E5566]">
                                451,444
                            </span>
                            <span className="font-inter text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-right text-[#8C94A3]">
                                students
                            </span>
                        </div>
                    </div>
                </div> 
                {/* 3rd card */}
                <div className="w-[244px] h-[362px] p-0 pb-[12px] flex flex-col gap-[12px] border border-solid border-[#E9EAF0] bg-white">
                    <img className="shadow-[inset_0px_-1px_0px_0px_#E9EAF0]" src={J} alt="Profile image of Devon Lane" />
                    
                    <div className="w-[212px] h-[48px] flex flex-col gap-[4px] items-center">
                        <p className="font-inter text-[16px] font-medium leading-[22px] text-center text-[#1D2026]">
                        Jane Cooper
                        </p>
                        <p className="font-inter text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-center text-[#8C94A3]">
                        UI/UX Desogner
                        </p>
                    </div>

                    <hr className="border-t border-[#E9EAF0]" />

                    <div className="w-[244px] h-[22px] px-[16px] flex justify-between items-center">
                        <div className="flex items-center gap-[5px]">
                            <StarIcon />
                            <span className="font-inter text-[14px] font-medium leading-[20px] tracking-[-0.01em] text-left text-[#4E5566]">
                                4.8
                            </span>
                        </div>
                        <div className="w-[108px] flex justify-between ">
                            <span className="mt-[1px] mb-[1px] font-inter text-[14px] font-medium leading-[20px] tracking-[-0.01em] text-left text-[#4E5566]">
                                435,671
                            </span>
                            <span className="font-inter text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-right text-[#8C94A3]">
                                students
                            </span>
                        </div>
                    </div>
                </div> 
                {/* 4th card */}
                <div className="w-[244px] h-[362px] p-0 pb-[12px] flex flex-col gap-[12px] border border-solid border-[#E9EAF0] bg-white">
                    <img className="shadow-[inset_0px_-1px_0px_0px_#E9EAF0]" src={A} alt="Profile image of Devon Lane" />
                    
                    <div className="w-[212px] h-[48px] flex flex-col gap-[4px] items-center">
                        <p className="font-inter text-[16px] font-medium leading-[22px] text-center text-[#1D2026]">
                        Albert Flores
                        </p>
                        <p className="font-inter text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-center text-[#8C94A3]">
                        Adobe Instructor
                        </p>
                    </div>

                    <hr className="border-t border-[#E9EAF0]" />

                    <div className="w-[244px] h-[22px] px-[16px] flex justify-between items-center">
                        <div className="flex items-center gap-[5px]">
                            <StarIcon />
                            <span className="font-inter text-[14px] font-medium leading-[20px] tracking-[-0.01em] text-left text-[#4E5566]">
                                4.7
                            </span>
                        </div>
                        <div className="w-[108px] flex justify-between ">
                            <span className="mt-[1px] mb-[1px] font-inter text-[14px] font-medium leading-[20px] tracking-[-0.01em] text-left text-[#4E5566]">
                                511,123
                            </span>
                            <span className="font-inter text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-right text-[#8C94A3]">
                                students
                            </span>
                        </div>
                    </div>
                </div> 
                {/* 5th card */}
                <div className="w-[244px] h-[362px] p-0 pb-[12px] flex flex-col gap-[12px] border border-solid border-[#E9EAF0] bg-white">
                    <img className="shadow-[inset_0px_-1px_0px_0px_#E9EAF0]" src={K} alt="Profile image of Devon Lane" />
                    
                    <div className="w-[212px] h-[48px] flex flex-col gap-[4px] items-center">
                        <p className="font-inter text-[16px] font-medium leading-[22px] text-center text-[#1D2026]">
                        Kathryn Murphy
                        </p>
                        <p className="font-inter text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-center text-[#8C94A3]">
                        Lead Developer
                        </p>
                    </div>

                    <hr className="border-t border-[#E9EAF0]" />

                    <div className="w-[244px] h-[22px] px-[16px] flex justify-between items-center">
                        <div className="flex items-center gap-[5px]">
                            <StarIcon />
                            <span className="font-inter text-[14px] font-medium leading-[20px] tracking-[-0.01em] text-left text-[#4E5566]">
                                4.2
                            </span>
                        </div>
                        <div className="w-[108px] flex justify-between ">
                            <span className="mt-[1px] mb-[1px] font-inter text-[14px] font-medium leading-[20px] tracking-[-0.01em] text-left text-[#4E5566]">
                                2,711
                            </span>
                            <span className="font-inter text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-right text-[#8C94A3]">
                                students
                            </span>
                        </div>
                    </div>
                </div> 
            </div>
            
            {/* 3rd row */}
            <div className="w-[664px] h-[32px] flex m-auto gap-[8px] items-center justify-center">
                <p className="text-[#6E7485] font-inter text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-center">
                    Thousands of students waiting for an instructor. Start teaching & earning now!.
                </p>

                <button className=" w-[154px] py-[4px] flex items-center justify-center gap-[8px] bg-white font-inter text-[14px] font-medium leading-[20px] tracking-[-0.01em] text-center text-[#FF6636]">
                    Become Instructor <RightArrowIcon />
                </button>
            </div>
        </div>
    </div>
  );
}




export default TopInstructor;
