import React from 'react'
import { HiPlusCircle } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";

const Button = ({Title,IconA, IconB, styleClass}) => {
  return (
    <button className= {`px-6 py-[10px] text-[#EC8923] bg-white rounded-sm hover:text-white hover:bg-orange-500 flex items-center gap-2 transition-all ${styleClass} `}>
      <div className='text-xl'>
      { IconA&& <HiPlusCircle /> }
      { IconB &&<IoSearch />}
        </div> 
     <div  className='font-semibold text-black'>{Title}</div>
    </button>
  )
}

export default Button