import React from 'react'
import { MdLocationOn } from "react-icons/md";
import { IoIosFunnel } from "react-icons/io";
import { FaToolbox } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import imageA from '../assets/10.svg'
import imageB from '../assets/09.svg'
import imageC from '../assets/06.svg'
import imageD from '../assets/17.svg'
import imageE from '../assets/18.svg'
import imageF from '../assets/19.svg'



const ThirdSectionJob = ({imgA, imgB, imgC, imgD, imgE, imgF, JobTitle, Design, Location, JobType}) => {
  return (
    <div className='w-full h-[130px] border-b border-[#e5ebfc] flex justify-center items-center  hover:shadow-md  hover:transition-all'>
        <div className='w-[90%] h-[full] flex justify-between '>
            <div className='flex w-[90%] gap-4 '>
            <div className='w-[90px] h-[80px] border p-1 flex items-center justify-center'>
               {imgA && <img src={imageA} />}
               {imgB && <img src={imageB} />}
               {imgC && <img src={imageC} />}
               {imgD && <img src={imageD} />}
               {imgE && <img src={imageE} />}
               {imgF && <img src={imageF} />}
                </div>
            <div className='w-[100%]'>
                <div className='font-medium text-xl'>{JobTitle}</div>
              <div className='flex items-center text-[13px] mt-2 text-[#989DAA]'>  via <span className='ml-2 text-[#EC8923]'>{Design}</span> <span className='ml-2 text-xl'><MdLocationOn /></span>{Location}</div>
              <div className='flex items-center text-sm gap-1 mt-2 text-[#989DAA]'><IoIosFunnel /> {JobType} <span className='flex items-center gap-1 ml-2 text-[#55b428]'><FaToolbox /> Freelance</span></div>
            </div>
            </div>
            <div className='w-[20%] ml-4'>
                <div className='size-10 border flex justify-center items-center rounded-full text-xl text-[#989DAA]'><FaRegHeart /></div>
                <div className='flex items-center text-xl w-full gap-1 text-[#989DAA] mt-4'><CiClock2 /><span className='text-sm'>2W ago</span></div>
            </div>
        </div>
    </div>
  )
}

export default ThirdSectionJob
{/* <IoIosFunnel /> */}
{/* <MdLocationOn /> */}