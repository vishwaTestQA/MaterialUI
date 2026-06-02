import { Box } from '@mui/material'
import React from 'react'

const BoxMUI = () => {
  return (
    <div>
      <Box 
         sx={{width: '250px', height:"200px", 
              border:"1px solid", backgroundColor: "primary.main",
              "&:hover":{
                backgroundColor: "error.light"
              }
              }}>
         div
      </Box>

{/* span elemnts are inline ele wont get width height padding margin unless we make it display:inline-block */}
         <Box component="span" sx={{display:'inline-block',width: '250px', height:"200px", border:"1px solid", backgroundColor:"success.light"}}>
         span with inline block for styling
      </Box>
    </div>
  )
}

export default BoxMUI
