
import React from 'react';
import GraduationIcon from '../../../svg/GraduationIcon';
import FacebookIcon from '../../../svg/FacebookIcon';
import InstagramIcon from '../../../svg/InstagramIcon';
import TwitterIcon from '../../../svg/TwitterIcon';
import Youtube from '../../../svg/Youtube';
import LinkdinIcon from '../../../svg/LinkdinIcon';
import RightArrowIcon from '../../../svg/RightArrowIcon';
import IphoneIcon from '../../../svg/IphoneIcon';
import PlaystoreIcon from '../../../svg/PlaystoreIcon';

function MiddleFooter() {
  return (
    <div className='  m-auto w-[1320px] flex gap-6'>
        {/* 1st col */}
        <div className='w-[424px] flex flex-col gap-6'>
            <div className='w-[424px] flex flex-col gap-5'>
                <div className='py-1 flex items-center gap-2'>
                    <GraduationIcon width="46" height="46"/>
                    <p className='font-inter text-[36.8px] font-semibold leading-[45.63px] tracking-[-0.03em] text-left text-[#FFFFFF]'>E-tutor</p>
                </div>
                <p className='w-[300px] opacity-70 font-inter text-sm font-normal leading-[22px] tracking-[-0.01em] text-left text-[#8C94A3]'>
                    Aliquam rhoncus ligula est, non pulvinar elit
                    convallis nec. Donec mattis odio at.
                </p>
            </div>
            <div className='w-[278px] flex gap-3'>
                <div className='w-[46px] h-[46px] flex items-center justify-center bg-[#363B4766] p-[14px]'>
                    <FacebookIcon/>
                </div>
                <div className='w-[46px] h-[46px] flex items-center justify-center bg-[#363B4766] p-[14px]'>
                    <InstagramIcon/>
                </div>
                <div className='w-[46px] h-[46px] flex items-center justify-center bg-[#FF6636] p-[14px] shadow-[0px_6px_20px_0px_#CC522B80]'>
                    <LinkdinIcon/>
                </div>
                <div className='w-[46px] h-[46px] flex items-center justify-center bg-[#363B4766] p-[14px]'>
                    <TwitterIcon/>
                </div>
                <div className='w-[46px] h-[46px] flex items-center justify-center bg-[#363B4766] p-[14px]'>
                    <Youtube/>
                </div>
            </div>       
        </div>

       {/* 2nd col */}
        <div className=' w-[200px] flex flex-col gap-5'>
            <p className='text-[#FFFFFF] font-inter text-[14px] font-medium leading-[14px] text-justify'>
                TOP 4 CATEGORY
            </p>
            <div className=' w-[141px] gap-0'>
                <div className='bg-[#1D2026] w-[87px] py-1 flex gap-3'>
                    <p className='text-[#8C94A3] font-inter text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-justify'>
                        Development
                    </p>
                </div>
                <div className='bg-[#1D2026] w-[141px] py-1 flex gap-3'>
                    <p className='text-[#8C94A3] font-inter text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-justify'>
                        Finance & Accounting
                    </p>
                </div>
                <div className='bg-[#1D2026] w-[87px] py-1 flex gap-3'>
                    <p className='text-[#8C94A3] font-inter text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-justify'>
                        Design
                    </p>
                </div>
                <div className='bg-[#1D2026] w-[87px] py-1 flex gap-3'>
                    <p className='text-[#8C94A3] font-inter text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-justify'>
                        Business
                    </p>
                </div>
            </div>
        </div>

        {/* 3nd col  */}
        <div className=' w-[200px] flex flex-col gap-5'>
            <p className='text-[#FFFFFF] font-inter text-[14px] font-medium leading-[14px] text-justify'>
                QUICK LINKS
            </p>
            <div className=' w-[141px] gap-0'>
                <div className='bg-[#1D2026] w-[87px] py-1 flex gap-3'>
                    <p className='text-[#8C94A3] font-inter text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-justify'>
                        About
                    </p>
                </div>
                <div className='bg-[#1D2026] shadow-[inset_0px_-1.5px_0px_0px_#FF6636] w-[135px] py-1 gap-3 flex items-center'>
                    <p className='text-[#8C94A3] font-inter text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-left flex items-center'>
                        Become instructor <span className='ml-2'><RightArrowIcon color='#FFFFFF' width='16' height='16'/></span>
                    </p>
                </div>

                <div className='bg-[#1D2026] w-[87px] py-1 flex gap-3'>
                    <p className='text-[#8C94A3] font-inter text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-justify'>
                        Contact
                    </p>
                </div>
                <div className='bg-[#1D2026] w-[87px] py-1 flex gap-3'>
                    <p className='text-[#8C94A3] font-inter text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-justify'>
                        Career
                    </p>
                </div>
            </div>
        </div>

        {/* 4nd col  */}
        <div className=' w-[200px] flex flex-col gap-5'>
            <p className='text-[#FFFFFF] font-inter text-[14px] font-medium leading-[14px] text-justify'>
                SUPPORT
            </p>
            <div className=' w-[141px] gap-0'>
                <div className='bg-[#1D2026] w-[87px] py-1 flex gap-3'>
                    <p className='text-[#8C94A3] font-inter text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-justify'>
                        Help Center
                    </p>
                </div>
                <div className='bg-[#1D2026] w-[141px] py-1 flex gap-3'>
                    <p className='text-[#8C94A3] font-inter text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-justify'>
                        FAQs
                    </p>
                </div>
                <div className='bg-[#1D2026] w-[120px] py-1 flex gap-3'>
                    <p className='text-[#8C94A3] font-inter text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-justify'>
                        Terms & Condition
                    </p>
                </div>
                <div className='bg-[#1D2026] w-[87px] py-1 flex gap-3'>
                    <p className='text-[#8C94A3] font-inter text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-justify'>
                        Privacy Policy
                    </p>
                </div>
            </div>
        </div>

       {/* 5th col */}
        <div className='w-[200px] flex flex-col gap-5'>
            <p className='text-[#FFFFFF] font-inter text-[14px] font-medium leading-[14px] text-left'>
                DOWNLOAD OUR APP
            </p>
            <div className='w-[164px] flex flex-col gap-3'>
                <div className='w-[163px] px-5 py-3 flex gap-4 bg-[#363B4766]'>
                    <div className='w-8 h-8 flex items-center justify-center'>
                        <IphoneIcon/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-[#B7BAC7] font-inter text-[10px] font-normal leading-[10px]'>
                            Download now
                        </p>
                        <p className='text-[#FFFFFF] font-inter text-[16px] font-medium leading-[22px]'>
                            App Store
                        </p>
                    </div>
                </div>
                <div className='w-[163px] px-5 py-3 flex gap-4 bg-[#363B4766]'>
                    <div className='w-8 h-8 flex items-center justify-center'>
                        <PlaystoreIcon/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-[#B7BAC7] font-inter text-[10px] font-normal leading-[10px]'>
                            Download now
                        </p>
                        <p className='text-[#FFFFFF] font-inter text-[16px] font-medium leading-[22px]'>
                            Play Store
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  );
}

export default MiddleFooter;
