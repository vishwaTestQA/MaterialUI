import { CatchingPokemon } from '@mui/icons-material'
import { AppBar, Box, Button, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material'

import React, { useState } from 'react'

const MenuMUI = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    
    const handleMenu = (e) => {
        console.log(e.target)
        setAnchorEl(e.current.target)
    }
  return (
    <div>
      <AppBar position='fixed' sx={{bgcolor: "#333"}}>
        <Toolbar>   {/* it adds padding */}
           <CatchingPokemon/>
           <Typography variant='h6' component='div' sx={{flex:1}}>POKEMON</Typography>
           <Stack direction='row'>
              <Button color='inherit'>FEATURE</Button>
              <Button color='inherit'>SETTINGS</Button>
              <Button color='inherit' id="resource-button" onClick={handleMenu}>RESOURCES</Button>
              <Button color='inherit'>LOGOUT</Button>
           </Stack>


           <Menu id="resource" anchorEl={anchorEl} open={anchorEl ? true:false}>
              <MenuItem>Blogs</MenuItem>
              <MenuItem>Posts</MenuItem>
           </Menu>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default MenuMUI
