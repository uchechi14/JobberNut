// import React from 'react'

import PhotoSession from "../PhotoSession"

const TenthSection = () => {
  return (
    <div className='mt-20 w-full flex justify-center'>
        <div className='w-[85%] flex flex-col items-center'>
        <div className='text-3xl font-semibold text-[#081a35]'>Blog and Career Advice</div>
        <div className='w-10 h-1 bg-[#EC8923] mt-4'></div>
        <div className="mt-4 text-[#817d7c]">Data trends and insights, tips for employers, product updates and best practices</div>
        <div className="flex justify-between gap-4 mt-5">
            <PhotoSession imgA='aa'/>
            <PhotoSession imgB='aa'/>
            <PhotoSession imgC='aa'/>
        </div>
        </div>
        </div>
  )
}

export default TenthSection