import React from 'react'
import darkLogo from '../../assets/logo-dark.svg'
import Team from '../../assets/team (2).png'
import Job from '../../assets/headhunting(1).png'

const BeforeFooter = () => {
  return (
    <div className='mt-20 w-full flex justify-center bg-[#F6F6F6] py-8'>
        <div className='w-[85%] flex justify-between gap-5 items-center'>
            <div className='w-[120px]'><img src={darkLogo} /></div> 
            <div className='w-[50%] text-[#817d7c]'>Create a free account to find thousands of Jobs, Employment & Career Opportunities around you!</div> 
            <div className='flex items-center gap-3'>
                <div className='size-[40px]'><img src={Team} /></div>
                <div>
                    <b className='text-[30px]'>1562</b>
                    <p>Jobs Posted</p>
                </div>
            </div> 
            <div className='flex items-center gap-3'>
                <div className='size-[40px] text-[#081A35]'><img src={Job} /></div>
                <div>
                    <b className='text-[30px] text-[#081A35]'>240</b>
                    <p>Companies</p>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default BeforeFooter