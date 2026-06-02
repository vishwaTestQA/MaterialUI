import { CatchingPokemon } from '@mui/icons-material'
import { AppBar, Box, Button, Stack, Toolbar, Typography } from '@mui/material'

import React from 'react'

const NavbarMUI = () => {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>   {/* it adds padding */}
           <CatchingPokemon/>
           <Typography variant='h6' component='div' sx={{flex:1}}>POKEMON</Typography>
           <Stack direction='row'>
              <Button color='inherit'>FEATURE</Button>
              <Button color='inherit'>SETTINGS</Button>
              <Button color='inherit'>LOGOUT</Button>
           </Stack>
        </Toolbar>
      </AppBar>
      <Box>
        <Toolbar>
           <Box component='nav'>
              <span>Link1</span>
           </Box>
                 <Box component='nav'  sx={{flexGrow: 1}}>
              <span>Linkcenter</span>
           </Box>
            <Box component='nav'>
              <span>linkLeft</span>
           </Box>
        </Toolbar>
      </Box>
    </div>
  )
}

export default NavbarMUI
