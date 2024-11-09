import React from 'react'
import Netflix from "../../assets/netflix.jpg"
import Slack from "../../assets/slack.jpg"
import Youtube from "../../assets/yt.jpg"
import Verson from "../../assets/ver.jpg"
import Lex from "../../assets/le.jpg"
import Lenovo from "../../assets/leno.jpg"
import Microsoft from "../../assets/mic.jpg"
import Google from "../../assets/go.jpg"

function TrustedCompaniesComponent() {
  return (
    <div className='w-[1920px] m-auto pt-[80px] pb-[80px] px-[300px] flex  gap-[24px] justify-center items-center'>
      {/* 1st coloum */}
      <div className='w-[424px] flex flex-col gap-6'>
        <p className='font-inter text-[32px] font-semibold leading-[40px] tracking-[-0.01em] text-left text-[#1D2026]'>
          6.3k trusted companies
        </p>
        <p className='font-inter w-[280px] text-[14px] font-normal leading-[22px] tracking-[-0.01em] text-left text-[#6E7485]'>
          Nullam egestas tellus at enim ornare tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
        </p>
      </div>

      {/* 2nd coloum */}
      <div className='w-[200px] h-[224px] flex flex-col gap-6'>
            <img 
                className='w-[200px] h-[100px] p-[0_50px] bg-white shadow-[0px_0px_32px_0px_rgba(9,26,68,0.07)]'
                src={Netflix} 
                alt="Netflix Logo" 
            />
            <img 
                className='w-[200px] h-[100px] p-[0_50px] bg-white shadow-[0px_0px_32px_0px_rgba(9,26,68,0.07)]'
                src={Slack} 
                alt="Slack Logo" 
            />
      </div>
      {/* 3rd colum */}
      <div className='w-[200px] h-[224px] flex flex-col gap-6'>
            <img 
                className='w-[200px] h-[100px] p-[0_50px] bg-white shadow-[0px_0px_32px_0px_rgba(9,26,68,0.07)]'
                src={Youtube} 
                alt="Netflix Logo" 
            />
            <img 
                className='w-[200px] h-[100px] p-[0_50px] bg-white shadow-[0px_0px_32px_0px_rgba(9,26,68,0.07)]'
                src={Verson} 
                alt="Slack Logo" 
            />
      </div>
      {/* 4th coloum */}
      <div className='w-[200px] h-[224px] flex flex-col gap-6'>
            <img 
                className='w-[200px] h-[100px] p-[0_50px] bg-white shadow-[0px_0px_32px_0px_rgba(9,26,68,0.07)]'
                src={Google} 
                alt="Netflix Logo" 
            />
            <img 
                className='w-[200px] h-[100px] p-[0_50px] bg-white shadow-[0px_0px_32px_0px_rgba(9,26,68,0.07)]'
                src={Lex} 
                alt="Slack Logo" 
            />
      </div>
      {/* 5th coloum */}
      <div className='w-[200px] h-[224px] flex flex-col gap-6'>
            <img 
                className='w-[200px] h-[100px] p-[0_50px] bg-white shadow-[0px_0px_32px_0px_rgba(9,26,68,0.07)]'
                src={Lenovo} 
                alt="Netflix Logo" 
            />
            <img 
                className='w-[200px] h-[100px] p-[0_50px] bg-white shadow-[0px_0px_32px_0px_rgba(9,26,68,0.07)]'
                src={Microsoft} 
                alt="Slack Logo" 
            />
      </div>
    </div>
  )
}

export default TrustedCompaniesComponent
