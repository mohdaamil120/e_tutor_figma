import React from 'react';
import TopFooter from './TopFooter';
import MiddleFooter from './MiddleFooter';
import BottomFooter from './BottomFooter';

function Footer() {
  return (
    <div className='max-w-[1920px] m-auto flex flex-col gap-20 bg-[#1D2026]'>
      <TopFooter/>
      <MiddleFooter/>
      <BottomFooter/>
    </div>
  );
}

export default Footer;
