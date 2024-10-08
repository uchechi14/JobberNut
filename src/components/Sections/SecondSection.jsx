// import React from 'react'
import Button from '../Button'
import Occupation from '../Occupation'

const SecondSection = () => {
  return (
    <div className='w-[100%] flex justify-center'>
      <div className='w-[85%]  flex justify-between gap-7 py-7'>
        <div className='w-[23%]  flex flex-col gap-5 mt-16'>
            <div className=' text-3xl font-semibold text-[#081a35]'>Choose Your Sector</div>
            <div className='w-10 h-1 bg-[#EC8923]'></div>
            <p className='text-[#989DAA]'>I truly believe Augustine’s words are true and if you look at history you know it is true.</p>
            <div>
            <Button Title='View More Jobs' />
            </div>
        </div>
        <div className='w-[80%] flex-wrap flex gap-2 '>
            <Occupation Name='Occupation' Positions='301 Open Position'  img1='jj' img2='' img3='' img4='' img5='' img6='' img7='' img8=''/>
            <Occupation Name='Apprenticeships' Positions='287 Open Position' img1='' img2='' img3='jj' img4='' img5='' img6='' img7='' img8=''/>
            <Occupation Name='Banking' Positions='542 Open Position' img1='' img2='' img3='' img4='' img5='jj' img6='' img7='' img8=''/>
            <Occupation Name='Education' Positions='785 Open Position' img1='' img2='' img3='' img4='' img5='' img6='jj' img7='' img8=''/>
            <Occupation Name='Engineering' Positions='862 Open Position' img1='' img2='' img3='' img4='' img5='' img6='' img7='' img8='jj'/>
            <Occupation Name='Estate Agency' Positions='423 Open Position' img1='' img2='jj' img3='' img4='' img5='' img6='' img7='' img8=''/>
            <Occupation Name='IT & Telecoms' Positions='253 Open Position' img1='' img2='' img3='' img4='' img5='' img6='' img7='jj' img8=''/>
            <Occupation Name='Legal' Positions='689 Open Position' img1='' img2='' img3='' img4='jj' img5='' img6='' img7='' img8=''/>
        </div>
        </div>
    </div>
  )
}

export default SecondSection