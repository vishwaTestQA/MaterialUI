import { Check } from '@mui/icons-material'
import { Alert, Box, Button, Stack } from '@mui/material'
import React, { useState } from 'react'

const AlertMUI = () => {

    const [open, setOpen] = useState(true)

  return (
    <Stack spacing={2}>
        
      <Alert severity='error'>This is error</Alert>
      <Alert severity='warning'>This is warning message</Alert>
      <Alert severity='info'>This is info</Alert>
      <Alert severity='success'>This is success</Alert>

      <Stack spacing={2}>
      <Alert variant="outlined" severity='error'>This is error</Alert>
      <Alert variant="outlined" severity='warning'>This is warning message</Alert>
      <Alert variant="filled" severity='info'>This is info</Alert>
      <Alert variant="filled" severity='success'>This is success</Alert>
      </Stack>

      <Stack spacing={2}>
       {open && <Alert 
          variant="filled" 
          severity='success'
          icon={<Check/>}
          onClose={() => setOpen(false)}
          >This is success</Alert>
       }

         {open && <Alert 
          variant="filled" 
          severity='success'
          icon={<Check/>}
          action={
            <Button onClick={() => setOpen(false)} color='inherit'>Close</Button>
          }
          >This is success</Alert>
       }
      </Stack>
    </Stack>
  )
}

export default AlertMUI
