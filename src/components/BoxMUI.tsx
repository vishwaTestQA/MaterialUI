import { Box } from '@mui/material'
import React from 'react'

const BoxMUI = () => {
  return (
    <div>
      <Box sx={{width: '250px', height:"200px", border:"1px solid"}}>
         div
      </Box>

         <Box component="span" sx={{display:'inline-block',width: '250px', height:"200px", border:"1px solid"}}>
         span with inline block for styling
      </Box>
    </div>
  )
}

export default BoxMUI
