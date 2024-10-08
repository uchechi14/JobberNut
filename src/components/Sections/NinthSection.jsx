// import React from 'react'
import { IoLogoApple } from "react-icons/io5";
import MobileAppImage from '../../assets/mobile-app.png'
import { IoLogoGooglePlaystore } from "react-icons/io5";

const NinthSection = () => {
  return (
    <div className='w-full flex justify-center mt-20'>
        <div className='w-[85%] flex justify-center gap-4 bg-[#F6F6F6] pt-7'>
            <div className='w-[80%] flex items-center justify-between'>
                <div className="w-[100%]">
                <div className=' text-3xl font-semibold text-[#081a35]'>Browse Hundreds of Jobs</div>
                <div className='w-10 h-1 bg-[#EC8923] mt-3'></div>
                <div className="mt-4 text-[#817d7c] text-xl">We are efficiently delivering tons of jobs straight to your pocket.</div>
                <div className="flex gap-3 mt-8">
                    <div className="w-[200px] h-[55px] flex justify-center gap-2 items-center rounded-sm bg-white hover:bg-[#EC8923] hover:text-white text-[#081a35] cursor-pointer">
                        <div className="text-[40px] "><IoLogoApple /></div>
                        <div>
                            <p className="text-sm">Download on the</p>
                            <b className="">App Store</b>
                        </div>
                    </div>
                    <div className="w-[200px] h-[55px] flex justify-center gap-2 items-center rounded-sm bg-white hover:bg-[#EC8923] hover:text-white text-[#081a35] cursor-pointer">
                        <div className="text-[40px] "><IoLogoGooglePlaystore /></div>
                        <div>
                            <p className="text-sm">Get it on</p>
                            <b className="">Google Play</b>
                        </div>
                    </div>
                </div>
                </div>
                <div className="w-[100%] flex justify-end">
                    <img src={MobileAppImage} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default NinthSection