import React,{useState} from 'react'
import Count from './Count'

function CountThree() {
    const InitialCount=0
    const [count,setCount]=useState(InitialCount)
    const IncrementFive =()=>{
        for(let i=0;i<=5;i++){
        setCount(prevCount =>prevCount +1)
        }
    }


    return (
        <div>
            count:{count}
           <button onClick={() => setCount(InitialCount)}>Reset</button>
           <button onClick={() => setCount(count+1)}>Increment</button>
           <button onClick={() => setCount(count-1)}>Decrement</button>
           <button onClick={IncrementFive}>Increment 5</button> 
        </div>
    )
}

export default CountThree
