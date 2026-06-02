import { Box, ImageList, ImageListItem } from '@mui/material'
import React from 'react'
import { imageData } from './imageFile'

const ImageListMUI4 = () => {
  return (
     <Box sx={{width:300, height:400, overflowY:"scroll"}}>
    <ImageList variant='masonry'
                cols={3}
           >
      {
        imageData.map(itm => (
            <ImageListItem key={itm.title}>
                <img
                   src={itm.img}
                   alt={itm.title}
                   loading='lazy'
                />
            </ImageListItem>
        ))
      }
    </ImageList>
    </Box>
  )
}

export default ImageListMUI4
