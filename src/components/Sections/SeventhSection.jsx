// import React from 'react'
import ManImage from '../../assets/manHoldingGlass.png'
import DiscussionImage from '../../assets/MenDiscussing.png'
import LastImage from '../../assets/SecondImage.png'
import image1 from '../../assets/team (2).png'
import image2 from '../../assets/headhunting(1).png'
import image3 from '../../assets/chat.png'
import image4 from '../../assets/business.png'

const SeventhSection = () => {
  return (
    <div className='w-full flex justify-center mt-20'>
        <div className='w-[85%] flex justify-between gap-4'>
            <div className='w-[100%] flex gap-3'>
                <div className='w-[100%]'><img src={ManImage} className='w-[100%]'/></div>
                <div className='mt-4 w-[100%]'>
                    <div className='w-[80%] h-[55%]'><img src={DiscussionImage} className='w-[100%] h-[100%]'/></div>
                    <div className='w-[80%] mt-5 h-[40%] opacity-75'><img src={LastImage}className='w-[100%] h-[100%]' /></div>
                </div>
            </div>
            <div className='w-[100%] mt-6'>
                <div className=' text-3xl font-semibold text-[#081a35]'>Why You Choose Job Among Other Job Site?</div>
                <div className='w-10 h-1 bg-[#EC8923] mt-3'></div>
                <p className='text-[#989DAA] mt-10'>I truly believe Augustine’s words are true and if you look at history you know it is true. There are many people in the world with amazing talents. who realize only a small percentage of their potential. We all know people who live this truth.</p>
                <div>
                    <div className='w-full flex justify-between mt-10'>
                        <div className='flex items-center gap-5'><p className='size-[50px]'><img src={image1}/> </p><p className='font-semibold text-[18px] text-[#081A35]'>
                        Best talented people</p></div>
                        <div className='flex items-center gap-5'><p className='size-[50px]'><img src={image2}/> </p><p className='font-semibold text-[18px] text-[#081A35]'>
                        Easy to find candidate</p></div>
                    </div>
                    <div className='w-full flex justify-between mt-8'>
                        <div className='flex items-center gap-5'><p className='size-[50px]'><img src={image3}/> </p><p className='font-semibold text-[18px] text-[#081A35]'>
                        Easy to communicate</p></div>
                        <div className='flex items-center gap-5 w-[250px]'><p className='size-[50px]'><img src={image4}/> </p><p className='font-semibold text-[18px] text-[#081A35]'>
                        Global recruitment option</p></div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SeventhSection