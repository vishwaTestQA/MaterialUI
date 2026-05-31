import React, { useState } from 'react'

const CheckboxNormal = () => {
    const [vals, setVals] = useState([])
    const handleCheck = (e) => {
       const v = e.target.value
       setVals(prev => {
         if(prev.includes(v)){
            return [...prev.filter(p => p!==v)]
         }
         return [...prev, v]
       })
    }
    console.log(vals)

  return (
    <div>
      <form>
        <h3>select preferences</h3>
        <div style={{display: "flex", flexDirection:"column"}}>
        <label>
            chennai
            <input type="checkbox" id="chennai"  value="chennai" onChange={handleCheck} checked={vals.includes("chennai") ? true : false}/>
        </label>

         <label>
            banglore
            <input type="checkbox" id="banglore"  value="banglore" onChange={handleCheck} checked={vals.includes("banglore") ? true : false}/>
        </label>

         <label>
            hyderabad
            <input type="checkbox" id="hyderabad" value="hyderabad" onChange={handleCheck} checked={vals.includes("hyderabad") ? true : false}/>
        </label>
        </div>
      </form>
    </div>
  )
}

export default CheckboxNormal
