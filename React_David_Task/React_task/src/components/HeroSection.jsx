import React from 'react'

export default function HeroSection() {
  return (
    <div className='flex gap-20 justify-center'>
        <div>
            <h1 className='font-bold text-[50px]'>One-click <br /> your static<br /> website.</h1>

            <p>Image from <span>Freepik</span></p>
        <div className='flex gap-10'>
            <button className='bg-green-400 w-[190px] h-[50px] font-semibold text-[18px] text-white rounded-sm hover:bg-[#263238]'>Upload for Free</button>
            <button className='bg-gray-200 w-[190px] h-[50px] font-semibold text-[18px] text-black rounded-sm'>Watch Video</button>
        </div>
        </div>
        <div>
            <img src="/home.png" alt="Home image" className='w-150'  />
        </div>
    </div>
  )
}
