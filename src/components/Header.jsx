
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import Button from "./Button";
import { IoSearch } from "react-icons/io5";
import { FaRegCompass } from "react-icons/fa";
import LogoImage from '../assets/logo.svg'
import { useEffect, useState } from "react";

const Header = () => {


    const [scrolled, setScrolled] = useState(false)

    const handleScroll = () =>{
        const currentScrollY = window.scrollY
        setScrolled(currentScrollY > 50)
    }
    console.log(scrolled)

    useEffect(() =>{
        window.addEventListener('scroll', handleScroll)
        return() =>{
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


  return (
    <>
    <div className="w-full  bg-[#132644]  flex flex-col h-[100vh] items-center"> 
    <div className= {`w-[100%] flex justify-center py-5 fixed z-10 transition-colors duration-300 ease-in-out ${scrolled? 'bg-orange-400': 'bg-[#132644]'}`}>
    <div className='flex justify-between w-[90%]'>
        <div className="w-[120px]"> <img src={LogoImage} className="w-full h-full"/></div>
        <div className='flex items-center gap-5'>
            <nav className='text-[#ec8923] active:text-[#ec8923] text-[17px] font-medium flex cursor-pointer items-center'>Home<div className='text-2xl mt-1'><RiArrowDropDownLine /></div></nav>
            <nav className='text-white hover:text-[#EC8923] text-[17px] font-medium flex cursor-pointer items-center'>Pages<div className='text-2xl mt-1'><RiArrowDropDownLine /></div></nav>
            <nav className='text-white hover:text-[#EC8923] text-[17px] font-medium flex cursor-pointer items-center'>Listing<div className='text-2xl mt-1'><RiArrowDropDownLine /></div></nav>
            <nav className='text-white hover:text-[#EC8923] text-[17px] font-medium flex cursor-pointer items-center'>Elements<div className='text-2xl mt-1'><RiArrowDropDownLine /></div></nav>
            <nav className='text-white hover:text-[#EC8923] text-[17px] font-medium flex cursor-pointer items-center'>Employer<div className='text-2xl mt-1'><RiArrowDropDownLine /></div></nav>
            <nav className='text-white hover:text-[#EC8923] text-[17px] font-medium flex cursor-pointer items-center'>Candidates<div className='text-2xl mt-1'><RiArrowDropDownLine /></div></nav>
        </div>
        <div className='flex gap-4'>
        <div className='flex text-[#EC8923] items-center cursor-pointer gap-3'><FaRegUser /> <p className='text-white hover:text-[#EC8923]'>Sign in</p></div>
        <Button Title='Post a job' IconA='jjj' IconB='' styleClass='bg-red text-[#EC8923]'/>
        </div>
        </div>
        </div>
        <div className='px-6  mt-10 h-full flex flex-col align-middle justify-center gap-4 w-[90%]'>
            <div className='text-[40px] font-bold text-white flex text-center ml-60 gap-2'> Drop<div className='text-[#EC8923]'>  Resume & Get</div>Your Desired Job</div>
            <p className='text-white text-xl text-center w-full '>Find Jobs, Employment & Career Opportunities</p>


            <div className='flex gap-7 mt-10 '>
                <div className=' w-full '>
                    <div className='flex justify-between '>
                        <p className='text-md font-medium text-white'>What</p>
                        <p className='text-sm font-medium text-white'>e.g. job, company, title</p>
                    </div>
                    <div className='mt-[-10px]'> 
                        <div className='relative top-[43px] left-2 text-[#EC8923] text-lg'><IoSearch /></div>
                    <input type='text' placeholder='Job title,skill or company'  className='w-full h-9 p-8 rounded-sm text-base font-medium'/>
                    </div>
                </div>
                <div className=' w-full'>
                    <div className='flex justify-between '>
                        <p className='text-md font-medium text-white'>Where</p>
                        <p className='text-sm font-medium text-white'>e.g. city, county or postcode</p>
                    </div>
                    <div className='mt-[-10px]'>
                    <div className='relative top-[43px] left-2 text-[#EC8923] text-lg'><FaRegCompass /></div>
                        <input type='text' placeholder='Town, city or postcode'className='w-full h-9 p-8 rounded-sm text-base font-medium'/>
                        </div>
                </div>
                <div className=' w-1/2 flex align-middle h-3/5 mt-9 '>
                <Button Title='Find jobs' IconA='' IconB='dd' bg=''/>
                </div>
            </div>
            <div className='flex gap-4 justify-center mt-4'>
            <p className='text-[#EC8923]'>Trending Keywords :  </p> 
            <a className='text-white'> Automotive, Education, Health and Care Engineering</a></div>
        </div>
    </div>
    </>
  )
}

export default Header