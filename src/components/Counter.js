import React, { useState } from 'react'

function Counter() {
    const [count,setCount]=useState(0)
  return (
    <div>
        


        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>click me </button>
        {/* onclick should be ()=>{} */}
    </div>
  )
}

export default Counter