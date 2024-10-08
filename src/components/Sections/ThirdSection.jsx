import React from 'react'
import ThirdSectionJob from '../ThirdSectionJob'
import Button from '../Button'

const ThirdSection = () => {
  return (
    <div className='w-full  flex justify-center flex-col items-center gap-10'>
      <div className='w-[85%]'>
    <div className='text-3xl font-semibold text-[#081a35]'>Jobs You May Be Interested In</div>
    <div className='w-10 h-1 bg-[#EC8923] mt-4'></div>
    <div className='flex justify-between mt-5'>
        <div className='flex gap-4'>
            <div className='w-32 h-11 bg-[#EC8923] flex justify-center items-center text-md font-medium text-white rounded-sm'>Hot Jobs</div>
            <div className='w-32 h-11 flex justify-center items-center text-md  font-medium text-[#817d7c] rounded-sm'>Recent Jobs</div>
            <div className='w-32 h-11 flex justify-center items-center text-md  font-medium text-[#817d7c] rounded-sm'>Popular Jobs</div>
        </div>
        <div className='flex gap-4'>
            <div className='w-20 h-8 bg-[#EC8923] flex justify-center items-center rounded-sm text-white font-medium'>2143</div>
            <div>Job Found</div>
        </div>
    </div>
    <div className='flex gap-5 w-[100%] mt-9'>
      <ThirdSectionJob imgA='ff' imgB='' imgC='' imgD='' imgE='' imgF='' JobTitle='Post Room Operative' Design='Trout Design Ltd' Location='Wellesley Rd, London' JobType='Accountancy'/>
      <ThirdSectionJob imgA='' imgB='ff' imgC='' imgD='' imgE='' imgF='' JobTitle='Web Developer- .net' Design='Pendragon Green Ltd' Location='Needham, MA' JobType='IT & Telecoms'/>
    </div>
    <div className='flex mt-6 gap-5 w-[100%]'>
      <ThirdSectionJob imgA='' imgB='' imgC='ff' imgD='' imgE='' imgF='' JobTitle='Group Marketing Manager' Design='Wight Sound Hearing LLC' Location='New Castle, PA' JobType='Banking'/>
      <ThirdSectionJob imgA='' imgB='' imgC='' imgD='ff' imgE='' imgF='' JobTitle='Data Entry Admnistrator' Design='Tan Electrics Ltd' Location='Park Avenue, Mumbai' JobType='Charity & Voluntary'/>
    </div>
    <div className='flex mt-6 gap-5 w-[100%]'>
      <ThirdSectionJob imgA='' imgB='' imgC='' imgD='' imgE='ff' imgF='' JobTitle='Stock Room Assistant' Design='Bright Sparks PLC' Location='Canyon Village, Ramon' JobType='Financial Services'/>
      <ThirdSectionJob imgA='' imgB='' imgC='' imgD='' imgE='' imgF='ff' JobTitle='Land Development Marketer' Design='Carphone Warehouse' Location='Canyon Village, Ramon' JobType='IT & Telecoms'/>
    </div>
    </div>
      <Button Title='View More Jobs'/>
</div>
  )
}

export default ThirdSection