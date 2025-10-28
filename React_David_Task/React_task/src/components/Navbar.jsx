import React from 'react'

export default function Navbar() {
  return (
    <div className='flex mx-40 gap-150'>
        <div>
            <h1 className='font-bold text-[40px]'>Logo</h1>
        </div>
        <div className='my-5'>
            <button className='font-semibold text-[20px] hover:text-gray-600'>Home</button>
            <button className='font-semibold text-[20px] hover:text-gray-600'>About Us</button>
            <button className='font-semibold text-[20px] hover:text-gray-600'>Contact</button>
            <button className='font-semibold text-[20px] hover:text-gray-600'>Team</button>
        </div>
    </div>
  )
}
