// import React from 'react'
import { MdLocationOn } from "react-icons/md";
import Button from '../components/Button'
import Logo from '../assets/09.svg'

const Card = ({profileName, Loc}) => {
  return (
    <div className="w-[330px] h-[250px] border border-[#e5ebfc] flex flex-col justify-center items-center gap-5 mt-4">
        <div className="size-[70px]"><img src={Logo} className="size-full" /></div>
        <div>
        <b className="text-xl font-semibold">{profileName}</b>
        <div className="flex items-center text-[#989DAA] text-[15px] gap-1"><MdLocationOn />{Loc}</div>
        </div>
        <Button Title='17 Open Position'/>
    </div>
  )
}

export default Card