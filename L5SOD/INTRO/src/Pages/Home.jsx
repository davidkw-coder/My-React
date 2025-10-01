import React, {useState} from "react"

function Home(){
    const [color, setColor] = useState('Blue');
    return(
        <>
        <h1>My color is {color}</h1>
        <button onClick={()=>{
            setColor("Yellow");
        }
        }>change Color</button>
        </>
    )
}

export default Home