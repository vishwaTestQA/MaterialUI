import { AppBar, Avatar, Badge, Box, Button, Chip, Drawer, Grid, Menu, MenuItem, Paper, Stack, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { Favorite, KebabDining, MenuBook, Notifications, SearchOutlined, VideoCameraFront } from '@mui/icons-material'
import cardData from "./cardData.json"
import "./mainNormal.css"

const MainNormal = () => {
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"))
    return (
        <div>
            {/* <Stack sx={{justifyContent:"center",alignItems:"center"}} > */}
            <AppBar position='fixed' sx={{ height: "80px", bgcolor: "white", color: "black",padding:"10px" }}>
                <Stack direction='row' spacing={2} sx={{ justifyContent: "space-between", alignItems: "center" }}>
                    <Stack direction="row">
                        <Button>
                            <Stack direction="column" sx={{ gap: "3px" }}>
                                {
                                    Array.from({ length: 3 }, (_) => (
                                        <div style={{ width: "20px", height: "3px", backgroundColor: "black", borderRadius: "10%" }}></div>
                                    ))
                                }
                            </Stack>
                        </Button>
                        <Stack direction='row'>
                            <VideoCameraFront />
                            <Typography>videoplay</Typography>
                        </Stack>
                    </Stack>

                    <Stack direction='row' sx={{flexGrow:1}}>
                    <TextField label="search" 
                             sx={{ 
                                 bgcolor: "white", 
                                 height: "85%", 
                                 flexGrow: 1, 
                                 borderRadius: "20%",
                                 display: isSmallScreen ? "none" : "flex"
                                 }} />
                    <Button color='inherit'><SearchOutlined/></Button>
                    </Stack>

                    <Stack direction='row' spacing={1} sx={{ justifyContent: "center", alignItems: "center"}}>
                        <Chip label={isSmallScreen ? "+" : "+ create"} sx={{ fontSize:"1rem", height:"50px"}} component='button'/>
                        <Avatar sx={{ bgcolor: "blue",  width: {
      xs: 32,
      sm: 40,
      md: 48,
      lg: 56,
    },
    height: {
      xs: 32,
      sm: 40,
      md: 48,
      lg: 56,
    }, }}>VJ</Avatar>
                        <Button sx={{ borderRadius: "50%" }} ><Notifications sx={{fontSize:{xs:20, sm:30, md:40}}}/></Button>
                    </Stack>
                </Stack>

                {
                    isSmallScreen && <Box>
                        <TextField sx={{width:"100%", bgcolor:"white"}}/>
                    </Box>
                }
            </AppBar>

            {/* <Grid container sx={{paddingTop:"100px"}} spacing={2}>
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

         </Grid> */}
            <div className='container' style={{padding:"20px", paddingTop:"100px"}}>
                {
                    cardData.map((itm) => (
                        <div className='item-grid'>
                            <img src={itm.img} alt='img' height="auto" width="100%" />
                            <Stack direction='row' spacing={2} sx={{ justifyContent: "space-between" }}>
                                <Avatar src={itm.img}>vk</Avatar>
                                <Stack>
                                    {/* <Stack direction="row" sx={{justifyContent:"space-between"}}> */}
                                    <Typography component='div' variant='h6' sx={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{itm.title}</Typography>

                                    {/* </Stack> */}
                                    <Typography component='div'>{itm.channel}</Typography>
                                    <Typography component='div' >{itm.views}</Typography>
                                </Stack>
                                <Typography component='span'>⋮</Typography>
                            </Stack>
                        </div>
                    ))
                }
            </div>
            {/* </Stack> */}
        </div>
    )
}

export default MainNormal
