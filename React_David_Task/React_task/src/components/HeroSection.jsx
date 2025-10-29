import React from 'react'

export default function HeroSection() {
  return (
    <div className='flex gap-30 justify-center my-50'>
        <div className='block gap-30'>
          <div className='block text-[#359756]'>
            <p className='font-bold text-[60px]'>One-click</p>
            <p className='font-bold text-[60px]'>solution for</p>
            <p className='font-bold text-[60px]'>your static</p>
            <p className='font-bold text-[60px]'>website.</p>
          </div>
            <p className='text-[17px] text[#111111] font-light my-10'>Image from <span className='hover:text-black hover:underline underline-offset-4'>Freepik</span></p>
        <div className='flex gap-10'>
            <button className='bg-[#359756] w-[190px] h-[50px] font-semibold text-[18px] text-white rounded-sm hover:bg-[#263238] hover:duration-200 hover:ease-in'>Upload for Free</button>
            <button className='bg-gray-200 w-[190px] h-[50px] font-semibold text-[18px] text-black rounded-sm hover:bg-gray-300 hover:duration-200 hover:ease-in'>Watch Video</button>
        </div>
        </div>
        <div>
            <img src="/home.png" alt="Home image" className='w-150'  />
        </div>
    </div>
  )
}
