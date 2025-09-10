import React from 'react'


    const info = [
        {
        Course:"SOD",
        description:"enjoy 3 years program",
        details:"INTANGO Offers environment for students that push them to win "
    
    }, 
    {
        Course:"Computer",
        description:"enjoy 1 years program",
        details:"INTANGO Offers environment for students that push them to win "
    
    }
]
export default function Card() {
    return (
        <>
            {info.map((amazina) => ( 
            <div className='card'>
            <h2>{amazina.Course}</h2>
            <p>{amazina.description}</p>
            <p>{amazina.details}</p>
            <a href="">Read More</a>
        </div>
            ))}
        </>
      )
}
