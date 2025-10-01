
{/* useState this update the data

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
        <br /><br />

        <input type="text" placeholder="Name"/><br /><br />
        <input type="text" placeholder="Email" />
        </>
    )
}

export default Home
    */}


    // {useFect }
    import React, {useEffect, useState} from 'react'
    function Home(){
        // const [count, setCount]= useState(0);
        // return(
        //     <>
        //     <h1>My Number {count}</h1>
        //     <button onClick={()=>
        //         setCount(count +1)
        //     }>Count</button>
        //     </>
        // )
        const [data, setData] = useState([])
            useEffect(async()=>{
                try{
                    const response = axios.get("")
                    console.log(response);
                }
                catch (error){
                    console.log(error)
                }
            }, [])

            return(
            <>

            </>
        )

    }
export default Home