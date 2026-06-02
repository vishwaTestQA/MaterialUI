import React from 'react'
import { imageData } from './imageFile'
import { ImageList, ImageListItem, Stack } from '@mui/material'

const ImageListMUI1 = () => {
  return (
    <Stack spacing={4}>
      <ImageList sx={{width:"300px", height:{xs:"300px", sm:"400px", md:"500px"}}} cols={3} rowHeight={150}>
       {
        imageData.map((img) => (
            <ImageListItem className='imgGrid'>
            <img src={img.img}/>
            </ImageListItem>
        ))
       }
    </ImageList>

    </Stack>
  )
}

export default ImageListMUI1
