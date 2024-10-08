// import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import image1 from '../assets/FirstImage.jpg'
import image2 from '../assets/SecondImage(2).png'
import image3 from '../assets/thirdImage.jpg'

const PhotoSession = ({imgA, imgB, imgC}) => {
  return (
    <div className="flex flex-col items-center">
        <div className="w-[100%]">
           {imgA && <img src={image1} />}
           {imgB && <img src={image2} />}
           {imgC && <img src={image3} />}
            </div>
        <div className="flex flex-col items-center">
            <p className="text-sm text-[#817d7c] mt-6 font-medium">February 4, 2019</p>
            <div className='font-semibold text-[20px] text-[#081A35] w-[90%] text-center hover:text-[#EC8923] cursor-pointer'>How to sell youself in a job interview</div>
            <div className="flex items-center gap-1 font-medium text-[15px] text-[#EC8923] mt-1 hover:text-[#081A35] cursor-pointer">Read More <FaLongArrowAltRight /></div>
        </div>
    </div>
  )
}

export default PhotoSession