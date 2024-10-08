import React from 'react'
import Button from './Button'

const ProfileCard = ({Butn1, Butn2, Butn3, numb, date, plan, Note1, Note2, Note3, Note4}) => {
  return (
    <div className='w-[270px] py-5 border border-[#F6F6F6] flex flex-col items-center '>
       <div className='py-4 border-b border-[#F6F6F6] w-[100%] flex flex-col items-center'>
        <div className='flex items-center'> <sup className='text-[#817d7c] text-[17px]'>$</sup><p className='text-5xl font-semibold text-[#081a35]'>{numb}</p><sub className='text-[#817d7c] text-[17px]'>/{date}</sub> </div>
        <div className='font-semibold text-xl text-[#081a35]'>{plan}</div>
        </div>
       <ul className='flex flex-col items-center w-full'>
        <li className='text-[#817d7c] text-center py-3'>{Note1}</li>
        <li className='bg-[#F6F6F6] text-[#817d7c] w-full text-center py-3'>{Note2}</li>
        <li className='text-[#817d7c] text-center py-3 border-b border-[#F6F6F6] w-[100%]'>{Note3}</li>
        <li className='bg-[#F6F6F6] text-[#817d7c] text-center py-3 w-full '>{Note4}</li>
       </ul>
       <div className='mt-3'>
       {Butn1 &&  <Button Title='Post a Job' /> }
       {Butn2 &&  <Button Title='Get Started' /> }
       {Butn3 &&  <Button Title='Select Plan' /> }
         </div>
    </div>
  )
}

export default ProfileCard