import React, { useState } from 'react'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, FormHelperText } from '@mui/material'

const RadioMUI = () => {
    const [val, setVal] = useState('')
    const [err, setErr] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!val){
            setErr(true)
            return 
        }
        setErr(false)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>  
      <FormControl error={err}>
        <FormLabel>Years of exp</FormLabel>
        <RadioGroup value={val} onChange={e => setVal(e.target.value)} row>
            <FormControlLabel control={<Radio size='small' color='success'/>} label="0-2" value="0-2"/>
            <FormControlLabel control={<Radio/>} label="2-3" value="2-3"/>
            <FormControlLabel control={<Radio/>} label="3-5" value="3-5"/>
        </RadioGroup>
          {err && 
      <FormHelperText>Required years of exp</FormHelperText>
      } 
      </FormControl>
    
      <button>submit</button>
      </form>
    </div>
  )
}

export default RadioMUI
