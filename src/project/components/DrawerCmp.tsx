import React, { useState } from 'react'
import {Box, Button, Drawer, useMediaQuery, useTheme} from "@mui/material"
import "../mainNormal.css"

type DrawerProps = {
  open: boolean,
  setOpen: (v: boolean) => void
}

const DrawerCmp = ({open, setOpen}: DrawerProps) => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm') || theme.breakpoints.down('xs'))

  return (
    <div>
       {open && <Drawer
       hideBackdrop
               open={open} 
               onClose={() => setOpen(false)}
               slotProps={{
                paper: {
                  className: isSmallScreen ? "drawerFullScreen" :"drawerCont",
                  sx:{
                  top:"85px",
                  // background: "transparent"
                },
                elevation: 0
                }
              
               }}
              
               >
            <Box sx={{textAlign:"end"}}>
              <Button onClick={() => setOpen(false)}>X</Button>
            </Box>   
          
            <Button>Home</Button>
            <Button>Shorts</Button>
            <Button>Subscriptions</Button>
       </Drawer>
       }
    </div>
  )
}

export default DrawerCmp
