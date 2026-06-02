import { Box, Drawer, Menu, Typography } from '@mui/material'
import React, { useState } from 'react'
import NavbarMUI from '../Navbar/NavbarMUI'
import { MenuOpen } from '@mui/icons-material'

const DrawerMUI = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
    <NavbarMUI/>
    <Box onClick={() => setOpen(true)}>
      <MenuOpen/>
    </Box>

    <Drawer anchor='left' open={open} onClose={() => setOpen(false)} 
      slotProps={{
        paper:{
          sx:{
            top: "114px"
          }
        }
      }}
      >
        <Box>
            <Typography>
               Sidebar
            </Typography>
        </Box>
    </Drawer>
    </>
  )
}

export default DrawerMUI
