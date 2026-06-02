import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useRef } from 'react'

const StackMUI = () => {
    const settingsRef = useRef(null)
    const aboutRef = useRef(null)
    const scrollToSection = (refVar) => {
      refVar.current?.scrollIntoView({
        behaviour: "smooth",
        block: "start"
      })
    }
  return (
    <div>
      <Stack sx={{minHeight:"100vh"}}>

         <Box component="header" sx={{backgroundColor:"primary.light", height:"50px"}}>Header</Box>

         <Stack component='nav' sx={{position:"sticky", justifyContent: "space-between", top:'50px'}} direction='row'>
            <Button LinkComponent='a' href='#Home' id='Home'>Home</Button>
            <Button variant='text'onClick={()=> scrollToSection(aboutRef)} sx={{display:'inline'}}>About</Button>
            <Button onClick={()=> scrollToSection(settingsRef)}>Settings</Button>
            <Button LinkComponent='a' href='#Logout'>Logout</Button>
         </Stack>

         <Box component="main" sx={{flex:1}}>
        <Box component='section' id='Home' className='Homecls'>
            <Typography variant='h4'>Home</Typography>
            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae commodi quia ea, eaque optio nostrum nesciunt blanditiis corporis incidunt omnis in facere mollitia impedit. Adipisci quibusdam quidem sunt ducimus est.</Typography>
            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae commodi quia ea, eaque optio nostrum nesciunt blanditiis corporis incidunt omnis in facere mollitia impedit. Adipisci quibusdam quidem sunt ducimus est.</Typography>
            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae commodi quia ea, eaque optio nostrum nesciunt blanditiis corporis incidunt omnis in facere mollitia impedit. Adipisci quibusdam quidem sunt ducimus est.</Typography>
            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae commodi quia ea, eaque optio nostrum nesciunt blanditiis corporis incidunt omnis in facere mollitia impedit. Adipisci quibusdam quidem sunt ducimus est.</Typography>
            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae commodi quia ea, eaque optio nostrum nesciunt blanditiis corporis incidunt omnis in facere mollitia impedit. Adipisci quibusdam quidem sunt ducimus est.</Typography>
            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae commodi quia ea, eaque optio nostrum nesciunt blanditiis corporis incidunt omnis in facere mollitia impedit. Adipisci quibusdam quidem sunt ducimus est.</Typography>
            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae commodi quia ea, eaque optio nostrum nesciunt blanditiis corporis incidunt omnis in facere mollitia impedit. Adipisci quibusdam quidem sunt ducimus est.</Typography>
          </Box>

            <Box component="section" id='About' ref={aboutRef}>
            <Typography variant='h4'>About</Typography>
            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae commodi quia ea, eaque optio nostrum nesciunt blanditiis corporis incidunt omnis in facere mollitia impedit. Adipisci quibusdam quidem sunt ducimus est.</Typography>
            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae commodi quia ea, eaque optio nostrum nesciunt blanditiis corporis incidunt omnis in facere mollitia impedit. Adipisci quibusdam quidem sunt ducimus est.</Typography>
            </Box>

          <Box component="section" id='Settings' ref={settingsRef}>
            <Typography variant='h4'>Settings</Typography>
            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae commodi quia ea, eaque optio nostrum nesciunt blanditiis corporis incidunt omnis in facere mollitia impedit. Adipisci quibusdam quidem sunt ducimus est.</Typography>
            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae commodi quia ea, eaque optio nostrum nesciunt blanditiis corporis incidunt omnis in facere mollitia impedit. Adipisci quibusdam quidem sunt ducimus est.</Typography>
            </Box>

            <Box component="section" id="Logout">
            <Typography variant='h4'>Logout</Typography>
            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae commodi quia ea, eaque optio nostrum nesciunt blanditiis corporis incidunt omnis in facere mollitia impedit. Adipisci quibusdam quidem sunt ducimus est.</Typography>
            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae commodi quia ea, eaque optio nostrum nesciunt blanditiis corporis incidunt omnis in facere mollitia impedit. Adipisci quibusdam quidem sunt ducimus est.</Typography>
            </Box>

         </Box>
         <Box component="footer" sx={{backgroundColor:"primary.light"}}>item 3</Box>
      </Stack>
    </div>
  )
}

export default StackMUI
