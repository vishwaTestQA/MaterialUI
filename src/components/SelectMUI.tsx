import { Box, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'

const SelectMUI = () => {
    const countries = [
       {value: "IN", label:"India"},
       {value: "US", label:"USA"},
       {value: "AU", label:"Australia"},
    ]

    const[cntValues, setCntValues] = useState<string[]>([])

    const handleChange = (e) => {
      const val = e.target.value
      console.log(val)
      setCntValues(typeof val === 'string' ? val.split(',') : val)
    }

  return (
    <Box sx={{width: {xs:"100%", sm:250, md:400}}}>
       <TextField 
          select 
           SelectProps= {{
            select: { 
              multiple: true,
            //  renderValue: (selected) => selected.join(", "),
            }
           }}
           fullWidth 
           label='select countires' 
           value={cntValues} 
           onChange={handleChange}>
        {
          countries.map(cnt => <MenuItem value={cnt.value}>{cnt.label}</MenuItem>)
        }
       </TextField>


       <TextField
       label="Countires"
          select
          slotProps={{
            select:{
              multiple:true
              }
          }}
          value={cntValues}
          onChange={handleChange}
          fullWidth
          >
           {
           countries.map(cnt => <MenuItem value={cnt.value} color={cntValues.includes(cnt.value) ? "error" : ""}>{cnt.label}</MenuItem>)
          }
          </TextField>
        
    </Box>
  )
}

export default SelectMUI
