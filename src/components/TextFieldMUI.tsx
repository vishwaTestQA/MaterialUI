import { Stack, TextField, InputAdornment } from '@mui/material'
import React, { useState } from 'react'

const TextFieldMUI = () => {
  const [pswd, setPswd] = useState('')
  const [blurPass, setBlurPass] = useState(false)

  return (
    <div>
      <Stack spacing={4} direction='row'>
         <TextField 
              label="name"
              size='small' 
              placeholder='Enter name'  
              color='secondary' 
              helperText="Required Name field" 
              required
              variant='outlined'
              />

              <TextField 
              label="name"
              size='small' 
              placeholder='Enter name'  
              color='secondary' 
              helperText="Required Name field" 
              required
              variant='filled'
              />

            <TextField 
              label="name"
              size='small' 
              placeholder='Enter name'  
              color='secondary' 
              helperText="Required Name field" 
              required
              variant='standard'
              />
      </Stack>

      <Stack direction='row' spacing={2}>
         <TextField 
              type= "password"
              label="password"
              size='small' 
              placeholder='Enter name'  
              color='secondary' 
              helperText="password field" 
              required
              variant='standard'
              />

               <TextField 
              value = "Read only input"
              label="password"
              size='small' 
              placeholder='Enter name'  
              helperText="password field" 
              required
              disabled
              variant='outlined'
              />

              
            <TextField 
              value = "Read only input 2"
              size='small'  
              required
              variant='outlined'
              slotProps={{readonly: true}}
              />
      </Stack>

      <Stack spacing={2} direction="row">
        <TextField 
          // label= "Amount"
          placeholder='Amount'
          slotProps={{
             input: {
              startAdornment:<InputAdornment position='start'>$</InputAdornment>
             }
        }}/>

          <TextField 
          label= "Weight"
          slotProps={{
             input: {
              endAdornment:<InputAdornment position='end'>kg</InputAdornment>
             }
        }}/>

        <TextField 
           label="password"
           required
           value={pswd}
           onChange = {e => setPswd(e.target.value)}
           error={!pswd || pswd.length<=4}
          
           helperText={!pswd ? "Required password": pswd.length <=4 ? "password should be greater than 4": "Do not share your password"}
        />
      </Stack>


    </div>
  )
}

export default TextFieldMUI
