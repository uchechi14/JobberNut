// import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaQuoteLeft } from "react-icons/fa";

import image1 from '../../assets/womanRed.jpg'

const EightSection = () => {
  return (
    <div className='mt-20 w-full flex justify-center'>
        <div className='w-[85%] flex flex-col items-center'>
        <div className='text-3xl font-semibold text-[#081a35]'>Clients Say About Us</div>
        <div className='w-10 h-1 bg-[#EC8923] mt-4'></div>
        <div className="mt-4 text-[#817d7c]">Focus is having the unwavering attention to complete what you set out to do.</div>
        <div className="flex items-center mt-8 gap-3">
            <p className="text-[25px] text-[#636363] hover:text-[#EC8923] cursor-pointer"><IoIosArrowBack /></p>
            <div className="size-[100px] rounded-full"><img src={image1} className="size-[100%] rounded-full" /></div>
            <p className="text-[25px] text-[#636363] hover:text-[#EC8923] cursor-pointer"><IoIosArrowForward /></p>
            </div>
            <p className="text-[#636363] w-[70%] font-medium text-[17px] mt-5">Their turnaround time for fixing any issue is just a few minutes, and that is appreciable. Their Business Development Team is always there to help at any point in time. Thank you so much for all your effort.</p>
            <div className="text-5xl text-[#DDDDDD] mt-3"><FaQuoteLeft /></div>
            <b className="text-[#081a35] font-semibold text-[17px] mt-3">Felica Queen</b>
            <div className="text-[#817d7c]">Product Designer</div>
        </div>
    </div>
  )
}

export default EightSection