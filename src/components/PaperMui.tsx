import type { Widgets } from '@mui/icons-material'
import { Paper } from '@mui/material'
import React from 'react'

const PaperMui = () => {
  return (
    <>
    <h2>Paper</h2>
    <Paper sx={{width:"100px", height:"100px", display:"grid", placeContent:"center", padding:'10px'}} elevation={5}>
       Paper is just a container with elevation, default value is 1
    </Paper>
    </>
  )
}

export default PaperMui
