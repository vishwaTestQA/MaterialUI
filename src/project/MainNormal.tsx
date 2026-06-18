import { AppBar, Avatar, Badge, Box, Button, Chip, Drawer, Grid, Menu, MenuItem, Paper, Stack, TextField, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { Favorite, KebabDining, MenuBook, Notifications, SearchOutlined, VideoCameraFront } from '@mui/icons-material'
import cardData from "./cardData.json"
import "./mainNormal.css"
import DrawerCmp from './components/DrawerCmp'

const MainNormal = () => {
    const theme = useTheme()
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"))
    const [open, setOpen] = useState(false)

    return (
        <div>
            {/* <Stack sx={{justifyContent:"center",alignItems:"center"}} > */}
            <AppBar position='fixed' sx={{ height: "80px", bgcolor: "white", color: "black",padding:"10px" }}>
                <Stack direction='row' spacing={2} sx={{ justifyContent: "space-between", alignItems: "center" }}>
                    <Stack direction="row">
                        <Button onClick={() => setOpen(!open)}>
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
                    <TextField 
                            //  label="search" 
                            hiddenLabel
                             variant='standard'
                             sx={{ 
                                "& .MuiOutlinedInput-root": {
                                borderRadius: "20px",
                                },
                                 bgcolor: "white", 
                                 height: "85%", 
                                 flexGrow: 1, 
                                 border: "1px solid",
                                //  borderTopLeftRadius: "25px",
                                //  borderTopRightRadius: "25px",
                                //  borderBottomLeftRadius: "25px",
                                //  borderBottomRightRadius: "25px",
                                 display: isSmallScreen ? "none" : "flex"
                                 }} />
                    <Button color='inherit'><SearchOutlined/></Button>
                    </Stack>

                    <Stack direction='row' spacing={1} sx={{ justifyContent: "center", alignItems: "center"}}>
                        <Chip label={isSmallScreen ? "+" : "+ create"} sx={{ fontSize:"1rem", height:{xs:"20px", sm:"30px", md:"30px", lg:"40px"}}} component='button'/>
                         <Button sx={{ borderRadius: "50%" }} ><Notifications sx={{fontSize:{xs:20, sm:30, md:40}}}/></Button>
                        <Avatar sx={{ bgcolor: "blue",  width: {xs: 32,sm: 30,md: 40,lg: 40},
                                                        height: {xs: 32,sm: 30,md: 40,lg: 40}
                                                         }}>VJ</Avatar>
                       
                    </Stack>
                </Stack>

                {/* {
                    isSmallScreen && <Box>
                        <TextField sx={{width:"100%", bgcolor:"white"}}/>
                    </Box>
                } */}
            </AppBar>

            <div className={open ? "container-drawer container" : 'container'} style={{padding:"20px", paddingTop:"100px"}}>
             
                {open && <DrawerCmp open={open} setOpen={setOpen}/>}
                {
                   cardData.map((itm) => (
                        <div className={open ? "item-grid-drawer ": 'item-grid'}>
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
