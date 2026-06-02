import { ImageList, ImageListItem, ImageListItemBar} from '@mui/material'
import React from 'react'
import { imageData } from './imageFile'

const ImageListMUI5 = () => {
  return (
    <ImageList sx={{width:500, height:400}} cols={3} rowHeight={160}>
        {
            imageData.map(itm => (
                <ImageListItem>
                    <img src={itm.img}
                       alt={itm.title}
                    />
                    <ImageListItemBar title={itm.title} />
                </ImageListItem>
            ))
        }
      
    </ImageList>
  )
}

export default ImageListMUI5
