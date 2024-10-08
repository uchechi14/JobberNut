// import React from 'react'
import Button from '../Button'
import ProfileCard from '../ProfileCard'

const SixthSection = () => {
  return (
    <div className='w-[100%] flex justify-center mt-20'>
        <div className='w-[85%] flex justify-between gap-7 py-7'>
         <div className='w-[23%]  flex flex-col gap-5 mt-16'>
            <div className=' text-3xl font-semibold text-[#081a35]'>Buy Our Plans and Packages</div>
            <div className='w-10 h-1 bg-[#EC8923]'></div>
            <p className='text-[#989DAA]'>So, make the decision to move forward. Commit your decision to paper, just to bring it into focus. Then, go for it!</p>
            <div>
            <Button Title='Try 1 month free' />
            </div>
        </div>

          <div className='w-[70%] flex'>
                <ProfileCard  Butn1='aa' numb='0' date='month' plan='Free Forever' Note1='Appear in general results' Note2='Accept mobile app' Note3='Manage candidates directly from your account' Note4='Desktop, mobile and Job Alerts' />
                <ProfileCard Butn2='aa' numb='10' date='day' plan='Sponsor Jobs' Note1='Premium placement' Note2='PPC on your Job' Note3='Reach more candidates' Note4='Desktop, mobile and Job Alerts'/>
                <ProfileCard Butn3='aa' numb='299' date='month' plan='Premium Plan' Note1='Job ad live for six-weeks' Note2='50 Feature Jobs' Note3='Premium placement' Note4='Desktop, mobile and Job Alerts'/>
          </div>
        </div>
    </div>
  )
}

export default SixthSection