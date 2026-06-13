import { MailOutlineRounded } from '@mui/icons-material'
import { Badge, Stack } from '@mui/material'
import React from 'react'

const BadgeMUI = () => {
    const unreadMail = []
  return (
    <Stack spacing={2} sx={{padding:20}} >
      <Badge badgeContent={5} color='error' >
        <MailOutlineRounded/>
      </Badge>

        <Badge badgeContent={5} color='error'>
        <MailOutlineRounded/>
      </Badge>

         <Badge variant="dot" color='error' invisible={unreadMail.length === 0}>
        <MailOutlineRounded/>
      </Badge>

         <Badge variant="dot" color='error'>
        <MailOutlineRounded/>
      </Badge>
    </Stack>
  )
}

export default BadgeMUI
