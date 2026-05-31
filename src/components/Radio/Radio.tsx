import React, { useState } from 'react'

const Radio = () => {
    const [val, setVal] = useState('')

  return (
    <div>
        <h3> select years of exp</h3>

        <div style={{display: "flex", flexDirection:"column"}} >
        <label htmlFor='years of 0-2'>0-2
        <input type="radio" id="years of 0-2" value="0-2" onChange={e => setVal(e.target.value)} checked={val==="0-2"}/>
        </label> 

       <label htmlFor="years of 2-3">2-3
        <input type="radio" id="years of 2-3" 
               aria-labelledby='years of 2-3'
               value="2-3" 
               onChange={e => setVal(e.target.value)} 
               checked={val ==="2-3"}
               />
        </label> 
       
       </div>
    </div>
  )
}

export default Radio
