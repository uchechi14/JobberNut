// import React from 'react'
import Option from "../Option"
import { FaLongArrowAltRight } from "react-icons/fa";
import imageA from '../../assets/team (1).png'
import imageB from '../../assets/headhunting(1).png'
import LineImage from '../../assets/pattern-01.png'

const FifthSection = () => {
  return (
    <div className='mt-20 w-full flex justify-center'>
        <div className='w-[85%]'>
            <div className='flex flex-col items-center'>
        <div className='text-3xl font-semibold text-[#081a35]'>Easiest Way To Use </div>
        <div className='w-10 h-1 bg-[#EC8923] mt-4'></div>
        <div className="mt-4 text-[#817d7c]">Give yourself the power of responsibility. Remind yourself the only thing stopping you is yourself.</div>
        </div>
        <div className="relative top-28 -z-10"><img src={LineImage} /></div>
        <div className='flex justify-between z-50'>
           <Option Work='Create Account' info='Create an account and access your saved settings on any device.' img1='aa' img2='' img3=''/>
           <Option Work='Find Your Vacancy' info="Don't just find. Be found. Put your CV in front of great employers" img1='' img2='aa' img3=''/>
           <Option Work='Get A Job' info='Your next career move starts here. Choose Job from thousands of companies' img1='' img2='' img3='aa'/>
        </div>
        
        <div className="flex gap-4 mt-20">
            <div className="bg-[#EC8923] w-[100%] h-[200px] flex justify-center rounded-[4px] ">
                <div className="w-[80%] flex justify-between  items-center ">
                <div className="w-[60px]"><img src={imageA} /></div>
                <div>
                    <div className="font-semibold text-white text-xl">Looking For Job</div>
                    <div className="text-white  w-[350px] mt-[10px]">Your next role could be with one of these top leading organizations.</div>
                    <div className="flex items-center gap-1 font-medium text-sm mt-1 text-[#081A35] cursor-pointer">Apply now <FaLongArrowAltRight /></div>
                    </div>
                </div>
            </div>
            <div className="bg-[#081A35] w-[100%] flex justify-center rounded-[4px]">
                <div className="w-[80%] flex justify-between items-center">
                <div className="w-[55px]"><img src={imageB} /></div>
                <div>
                    <div className="font-semibold text-white text-xl">Are You Recruiting?</div>
                    <div className="text-white w-[350px] mt-[10px]">Five million searchable CVs in one place with our linked CV database.</div>
                    <div className="flex items-center gap-1 font-medium text-sm mt-1 text-[#EC8923] cursor-pointer">post a job <FaLongArrowAltRight /></div>
                    </div>
                </div>
            </div>
        </div>
      
        </div>
    </div>
  )
}

export default FifthSection