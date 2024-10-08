import React from 'react'
import image1 from '../assets/resume.png'
import image2 from '../assets/hiring.png'
import image3 from '../assets/office-chair.png'

const Option = ({Work, info, img1, img2, img3}) => {
  return (
    <div className='w-[300px] flex flex-col gap-4 items-center'>
        <div className='size-[150px] rounded-full bg-[#F6F6F6] flex justify-center items-center'>
            { img1 && <img src={image1} className='w-[40px] h-[40px]'/>}
            { img2 && <img src={image2} className='w-[40px] h-[40px]'/>}
            { img3 && <img src={image3} className='w-[40px] h-[40px]'/>}
            </div>
        <div className='flex flex-col items-center'>
            <div className='font-semibold text-[20px]'>{Work}</div>
            <div className='text-center text-[#817d7c]'>{info}</div>
        </div>
    </div>
  )
}

export default Option