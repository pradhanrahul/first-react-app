import React,{useState,useEffect} from 'react'

function EffectCount() {
    const[count, setCount]=useState(0)
    useEffect(()=>{
        document.title=`you clicked ${count}`
    })
    return (
        <div>
           <button onClick={()=>setCount(count+1)}>click{count}Times</button> 
        </div>
    )
}

export default EffectCount
