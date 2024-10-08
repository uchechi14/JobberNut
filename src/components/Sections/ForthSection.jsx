// import React from 'react'

import Card from "../Card"
import Profile from "../Profile"

const ForthSection = () => {
  return (
    <div className="w-full flex justify-center mt-20">
        <div className="w-[85%] flex justify-between">
        <div className="w-[60%] ">
        <div className='text-3xl font-semibold text-[#081a35]'>Featured Candidates</div>
        <div className='w-10 h-1 bg-[#EC8923] mt-4'></div>
        <div className="mt-4 text-[#817d7c]">We know this in our gut, but what can we do about it? How can we motivate ourselves?</div>
        <Profile prof1='ww' prof2='' prof3='' profileName='Melissa Doe' Cont='Construction & Property' Loc='Botchergate, Carlisle'/>
        <Profile prof1='' prof2='' prof3='ww' profileName='Paul Flavius' Cont='General Insurance' Loc='Ormskirk Rd, Wigan'/>
        <Profile prof1='' prof2='ww' prof3='' profileName='Felica Queen' Cont='General Insurance' Loc='Union St, New Delhi'/>
        </div>
        <div className="w-[30%]">
        <div className='text-3xl font-semibold text-[#081a35]'>Top Companies</div>
        <div className='w-10 h-1 bg-[#EC8923] mt-4'></div>
        <div className="mt-4 text-[#817d7c]">Here are some tips and methods for motivating yourself:</div>
        <Card profileName='Bright Sparks PLC' Loc='Botchergate, Carlisle'/>
        </div>
       
        </div>
    </div>
  )
}

export default ForthSection