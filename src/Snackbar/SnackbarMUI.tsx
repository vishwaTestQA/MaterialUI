import { Close } from '@mui/icons-material'
import { Alert, Button, Snackbar, Stack, type AlertProps } from '@mui/material'
import React, { forwardRef, useState } from 'react'

const SnackbarMUI = () => {
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)

    const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
          function SnackbarAlert(props, ref){
           return(
            <Alert elevation={6} ref={ref} {...props}/>
        )
    }
    )
    

    const handleClose = (e: React.SyntheticEvent | Event, reason: string) => {
        console.log(reason)
        if(reason === "clickaway"){
             return
        }
       setOpen(false)
    }

  return (
    <>
    <Button onClick={() => setOpen(true)}>Submit</Button>
    <Stack spacing={2}>
      <Snackbar 
         message='This is an error'
         autoHideDuration={4000}
         open ={open}
         onClose={handleClose}
         anchorOrigin={{
           vertical: 'top',
           horizontal: "center"
         }}
      />
<Alert elevation={6} severity='info' variant='filled'/>
    <Button onClick={() => setOpen2(true)}>Submit</Button>
    
      <Snackbar open={open2} 
                autoHideDuration={4000} 
                // onClose={handleClose}
                anchorOrigin={{
                    vertical:"bottom",
                    horizontal:"center"
                }}
                >
        <SnackbarAlert severity='success' variant='outlined' 
                    action={
                        <Button onClick={() => setOpen2(false)}>{<Close color='inherit'/>}</Button>
                    }
                    onClick={() => setOpen(false)}>
             Form Submitted succesfully
        </SnackbarAlert>
      </Snackbar>
    </Stack>
    </>
  )
}

export default SnackbarMUI
