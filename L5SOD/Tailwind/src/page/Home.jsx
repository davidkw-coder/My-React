import React from 'react'
export default function Home() {
  return (
    <>
    <section className='flex p-50 gap-10 '>
        <div className='border-2 border-red-900 p-5 rounded-sm shadow-xl shadow-gray-500'>
            <h2 className='text-red-900 font-bold mb-3 pl-6'>Software Development</h2>
            <p className='mb-3 pl-6 text-gray-500'>Level 3 to Level 5 (3 years program)</p>
            <p className='mb-3 pl-6 text-gray-500'>Graduates can go to universities, polytechnics, workplace or work for themselves.</p>
            <a href="#" className='pl-6 text-red-900 font-bold '>Learn More</a>
        </div>
        <div className='border-2 border-red-900 p-5 rounded-sm shadow-xl shadow-gray-500'>
            <h2 className='text-red-900 font-bold mb-3 pl-6'>Computer Application</h2>
            <p className='mb-3 pl-6 text-gray-500'>Level 2 (1 year program)</p>
            <p className='mb-3 pl-6 text-gray-500'>Graduates can go to universities, polytechnics, workplace or work for themselves.</p>
            <a href="#" className='pl-6 text-red-900 font-bold'>Learn More</a>
        </div>
        <div className='border-2 border-red-900 p-5 rounded-sm shadow-xl shadow-gray-500'>
            <h2 className='text-red-900 font-bold mb-3 pl-6'>Software Development</h2>
            <p className='mb-3 pl-6 text-gray-500'>Level 3 to Level 5 (3 years program)</p>
            <p className='mb-3 pl-6 text-gray-500'>Graduates can go to universities, polytechnics, workplace or work for themselves.</p>
            <a href="#" className=' pl-6 text-red-900 font-bold '>Learn More</a>
        </div>
        
    </section>
    <section >
        <div>
        <div className='flex w-[500px] justify-center mx-auto pt-20 '>
            <h2 className='text-4xl w-200 font-extrabold text-red-900 text-center  '>Intango TSS equip students with essential knowledge, skills, and attitudes</h2>
        </div>
        <img className='text-center' src="" alt="" />
        <p className='text-center mt-5'>Here’s a brief overview of each:</p>
        </div>
        
       <div className='flex p-50 gap-10'>
        <div className='text-center' >
        <h2 className=' text-red-900 font-extrabold'>Knowledge Acquisition</h2>
        <p>This includes:Technical Concepts, Standards, Problem-Solving, and Safety Procedures</p>
       </div>
       <div className='text-center'>
        <h2 className=' text-red-900 font-extrabold'>Skills Acquisition</h2>
        <p>These skills include: Technical Proficiency, Hands-On Experience, related Communication Skills.</p>
       </div>
       <div className='text-center'>
        <h2 className=' text-red-900 font-extrabold'>Attitudes Acquisition</h2>
        <p>Professionalism, Teamwork, Adaptability and biblical values develed in a descipleship program</p>
       </div>
       </div>
    </section>
    </>
  )
}