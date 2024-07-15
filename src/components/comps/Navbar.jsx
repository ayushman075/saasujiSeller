/* eslint-disable react/prop-types */
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../assets/saasuJiLogo.png"
import { CircleUserRound } from 'lucide-react';

const Navbar=(props)=> {
    const navigate = useNavigate();
  return (
   <>
    
    <div className='w-full bg-orange-400 flex flex-row justify-between text-black' >
        <Link to={"/"}>
    <img  width={45} className='ml-5  hover:cursor-pointer' src={logo} alt="logo"></img>
    </Link>
    <div className=' text-2xl my-2  w-fit font-bold font-serif   max-sm:mb-0 max-sm:text-xl '>
  
 
    {props.title}
 </div>
 <button className='mr-7' ><CircleUserRound size={40}  color='black'/></button>
       </div>
   </>
  )
}

export default Navbar