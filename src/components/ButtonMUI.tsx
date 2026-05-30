import { Button, ButtonGroup, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'
import React, { useState } from 'react'

const ButtonMUI = () => {

    const [formats, setFormats] = useState([])
    const [formats2, setFormats2] = useState(null)

    const handleFormatChange = (e: React.MouseEvent<HTMLElement>, updatedFormats: string[]) => {
       console.log(updatedFormats)
       setFormats(updatedFormats)
    }

       const handleFormatChange2 = (e: React.MouseEvent<HTMLElement>, updatedFormats: string) => {
       console.log(updatedFormats)
       setFormats2(updatedFormats)
    }

  return (
    <Stack spacing={4}>
    <Stack spacing={2} direction='row'>       {/* Stack is a div container with flex */}
       <Button variant='text'>Text</Button>
       <Button variant='contained'>contained</Button>
       <Button variant="outlined">outlined</Button>

       <Button variant='text' href='#'>Anchor</Button>
    </Stack>

     <Stack spacing={2} direction='row'>
        <Button variant='contained' color='primary'>Primary</Button>
        <Button variant='contained' color='secondary'>secondary</Button>
        <Button variant='contained' color='warning'>Warning</Button>
        <Button variant='contained' color='info'>Info</Button>
        <Button variant='contained' color='success'>Success</Button>
        <Button variant='contained' color='error'>Error</Button>

        <Button variant='text' color='error'>error text</Button>
        <Button variant='outlined' color='primary'>outlined err</Button>

     </Stack>

     <Stack spacing={2} direction='row'>
        <ButtonGroup variant='contained' orientation='vertical' color='success' size='small'>
            <Button onClick={() => alert("clicked left")}>Left</Button>
            <Button>center</Button>
            <Button>right</Button>
        </ButtonGroup>

            <ButtonGroup variant='text' orientation='vertical' color='primary' size='small'>
            <Button onClick={() => alert("clicked left")}>Left</Button>
            <Button>center</Button>
            <Button>right</Button>
        </ButtonGroup>
     </Stack>


     <Stack spacing={2}>
         <ToggleButtonGroup aria-label="text formating" value={formats} size='small' onChange={handleFormatChange}>
            <ToggleButton value='bold'>B</ToggleButton>
            <ToggleButton value='underline'>U</ToggleButton>
            <ToggleButton value='italic'>I</ToggleButton>
         </ToggleButtonGroup>
     </Stack>

    <Stack spacing={2}>
         <ToggleButtonGroup value={formats2} size='small' onChange={handleFormatChange2} exclusive>
            <ToggleButton value='bold'>B</ToggleButton>
            <ToggleButton value='underline'>U</ToggleButton>
            <ToggleButton value='italic'>I</ToggleButton>
         </ToggleButtonGroup>
     </Stack>

    </Stack>
  )
}

export default ButtonMUI
