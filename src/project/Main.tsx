import { AppBar, Avatar, Badge, Box, Button, Chip, Grid, Menu, MenuItem, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import {Notifications,VideoCameraFront } from '@mui/icons-material'
import cardData from "./cardData.json"

const Main = () => {
  return (
    <div style={{padding:"10px", width:"100vw", overflowX:"hidden"}}>
       {/* <Stack sx={{justifyContent:"center",alignItems:"center"}} > */}
          <AppBar position='fixed' sx={{height:"80px", bgcolor:"white", color:"black"}}>
             <Stack direction='row' spacing={2} sx={{justifyContent:"center", alignItems:"center"}}>
              <VideoCameraFront/>
                <Typography>videoplay</Typography>
                <TextField label="search" sx={{bgcolor: "white", height:"85%"}}/>

                 <Stack direction='row' spacing={2} sx={{justifyContent:"center", alignContent:"center"}}>
                    <Chip label="+ create"/>
                    <Avatar sx={{bgcolor: "blue"}}>VJ</Avatar>
                    <Button startIcon={<Notifications/>} sx={{borderRadius:""}} ></Button>
                 </Stack>
               </Stack>
          </AppBar>

          <Grid container sx={{paddingTop:"100px"}} spacing={2}>
            {
            cardData.map((itm) => (
             <Grid size={{xs:12, sm:6, md:4, lg:3}} spacing={2} sx={{border:"1px solid"}}>
                <img src={itm.img} alt='img' height="auto" width="90%"/>
                <Typography component='div' variant='h6'>{itm.title}</Typography>
                <Typography component='div'>{itm.channel}</Typography>
                <Typography component='div' >{itm.views}</Typography>
            </Grid>
            ))
            }

         </Grid>
       {/* </Stack> */}
    </div>
  )
}

export default Main
