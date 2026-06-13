import { Delete, DeleteForever } from '@mui/icons-material'
import { IconButton, Tooltip } from '@mui/material'
import React from 'react'

const TooltipMUI = () => {
  return (
    <Tooltip title="delete" placement='right' arrow enterDelay={500} leaveDelay={200}>
       <IconButton>
          <Delete/>
       </IconButton>
    </Tooltip>
  )
}

export default TooltipMUI
