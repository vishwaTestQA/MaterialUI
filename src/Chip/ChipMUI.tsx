import { Face, Face2, Favorite } from '@mui/icons-material'
import { Avatar, Chip, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'

const ChipMUI = () => {
    const [chip, setChip] = useState(["chip1", "chip2", "chip3"])
    const handleDelete = (cp) => {
       setChip(prev => [...prev.filter(pr => pr !== cp)])
    }
  return (
    <Stack spacing={2} direction='row' sx={{flexWrap: 'wrap'}}>
    <Chip label="favourites" icon={<Favorite/>}/>
    <Chip label="CK"/>
    <Chip label="smilies" icon={<Face/>}/>
    <Chip label="avatar" icon={<Face/>} avatar={<Avatar >CK</Avatar>}/>
    <Chip label="avatar" icon={<Face/>} avatar={<Avatar>CK</Avatar>}/>
    <Chip label="delete" color='error' onClick={() => alert("delete clicked")} onDelete={() => alert('clicked mark')}/>
     {
        chip.map((cp) => (
            <Chip key={cp} label={cp} onDelete={() => handleDelete(cp)}/>
        ))
     }
     

    </Stack>
  )
}

export default ChipMUI
