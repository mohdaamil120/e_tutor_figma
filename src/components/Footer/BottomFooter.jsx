import React from 'react';

const CustomDropdownIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ stroke: '#FFFFFF' }} 
  >
    <path
      d="M13 6.00024L8 11.0002L3 6.00024"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function BottomFooter() {
  return (
    <div className="w-full px-[300px] py-[24px] flex justify-between bg-[#1D2026] shadow-[inset_0px_1px_0px_0px_rgba(54,59,71,0.5)]">
      <p className="w-[431px] h-[22px] text-[#8C94A3] font-inter text-sm font-normal leading-[22px] tracking-[-0.01em] text-justify">
        © 2021 - Eduflex. Designed by{" "}
        <span className="font-inter text-sm font-normal leading-[22px] text-white">
          Templatecookie
        </span>
        . All rights reserved
      </p>

      <div className="relative">
        <select
          className="w-[200px] h-[48px] px-4 py-3 bg-[#1D2026] text-[#8C94A3] border border-[#363B47] font-inter text-base font-normal leading-[24px] appearance-none pr-8"
        >
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>
        {/* Custom dropdown icon */}
        <span className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer">
          <CustomDropdownIcon />
        </span>
      </div>
    </div>
  );
}

export default BottomFooter;
