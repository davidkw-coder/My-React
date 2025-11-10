import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className='flex mx-40 gap-150'>
        <div>
            <h1 className='font-bold text-[40px]'>Logo</h1>
        </div>
        <div className='my-5 flex gap-8'>
          <Link to='/home'>
            <button className='font-semibold text-[20px] hover:text-gray-600'>Home</button>
          </Link>
            <Link to='/about'>
            <button className='font-semibold text-[20px] hover:text-gray-600'>About Us</button>
            </Link>
            <button className='font-semibold text-[20px] hover:text-gray-600'>Contact</button>
            <button className='font-semibold text-[20px] hover:text-gray-600'>Team</button>
        </div>
    </div>
  )
}
