import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='mt-20 w-full flex flex-col items-center'>
        <div className='w-[85%] flex justify-between'>
            <div>
                <b className='text-2xl font-semibold text-[#081a35]'>For Candidates</b>
                <p className='text-[#817d7c] mt-4 '>Browse Jobs</p>
                <p className='text-[#817d7c] mt-3'>Browse Categories</p>
                <p className='text-[#817d7c] mt-3'>Submit Resume</p>
                <p className='text-[#817d7c] mt-3'>Candidate Dashboard</p>
                <p className='text-[#817d7c] mt-3'>Job Alerts</p>
                <p className='text-[#817d7c] mt-3'>My Bookmarks</p>
            </div>
            <div>
                <b className='text-2xl font-semibold text-[#081a35]'>For Employers</b>
                <p className='text-[#817d7c] mt-4'>Browse Jobs</p>
                <p className='text-[#817d7c] mt-3'>Browse Categories</p>
                <p className='text-[#817d7c] mt-3'>Employer Dashboard</p>
                <p className='text-[#817d7c] mt-3'>Add Job</p>
                <p className='text-[#817d7c] mt-3'>Job Packages</p>
            </div>
            <div>
                <b className='text-2xl font-semibold text-[#081a35]'>Partner Sites</b>
                <p className='text-[#817d7c] mt-4'>Short Pages</p>
                <p className='text-[#817d7c] mt-3'>Job Page</p>
                <p className='text-[#817d7c] mt-3'>Job Page Alternative</p>
                <p className='text-[#817d7c] mt-3'>Resume Page</p>
                <p className='text-[#817d7c] mt-3'>Blog</p>
                <p className='text-[#817d7c] mt-3'>Contact</p>
            </div>
            <div>
                <b className='text-2xl font-semibold text-[#081a35]'>Contact Us</b>
                <p className='text-[#817d7c] mt-4 flex items-center gap-2'><div className='text-[#EC8923]'><IoLocationSharp /></div> 214 West Arnold St. New York, NY 10002</p>
                <p className='text-[#817d7c] flex items-center mt-2 gap-2'><div className='text-[#EC8923]'><MdOutlinePhoneIphone /></div> +(123) 345-6789</p>
                <p className='text-[#817d7c] flex items-center mt-2 gap-2'><div className='text-[#EC8923]'><AiOutlineMail /></div> support@jobber.demo</p>
            </div>
        </div>
        <div className='w-[85%] border-t-[1px] border-[#F6F6F6] mt-10 justify-between flex py-8'>
                <div className='flex text-[#817d7c] gap-1'>©Copyright 2024 <p className='text-[#EC8923] '>Jobber</p> All Rights Reserved</div>
                <div className='flex gap-4'>
                <div className='text-[#094ecd] cursor-pointer font-medium'>FB</div>
                <div className='text-[#25d1e0] cursor-pointer font-medium'>TW</div>
                <div className='text-[#094ecd] cursor-pointer font-medium'>FB</div>
                </div>
        </div>
    </div>
  )
}

export default Footer