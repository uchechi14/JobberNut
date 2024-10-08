// import React from 'react'
import { IoIosFunnel } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import profile1 from '../assets/04.jpeg'
import profile2 from '../assets/05.jpeg'
import profile3 from '../assets/01.jpeg'

import { FaRegHeart } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";

const Profile = ({prof1, prof2, prof3, profileName, Cont, Loc}) => {
  return (
    <div className='w-[93%] h-[130px] border-b border-[#e5ebfc] flex justify-center items-center   hover:shadow-md  hover:transition-all mt-6' >
        <div className='w-[95%] flex justify-between'>
            <div className="flex items-center gap-6">
                <div className="size-[90px] rounded-full">
                   {prof1 && <img src={profile1} className="size-[full] rounded-full" />}
                   {prof2 && <img src={profile2} className="size-[full] rounded-full" />}
                   {prof3 && <img src={profile3} className="size-[full] rounded-full" />}
                    </div>
                <div>
                    <b className="text-xl font-semibold">{profileName}</b>
                    <div className="flex items-center text-[#989DAA] text-[15px] gap-1"><IoIosFunnel />{Cont}<MdLocationOn />{Loc}</div>
                </div>
            </div>
            <div>
            <div className='size-10 border flex justify-center items-center rounded-full text-xl text-[#989DAA]'><FaRegHeart /></div>
            <div className='flex items-center text-xl w-full gap-1 text-[#989DAA] mt-4'><CiClock2 /><span className='text-sm'>2W ago</span></div>
            </div>
        </div>
    </div>
  )
}

export default Profile