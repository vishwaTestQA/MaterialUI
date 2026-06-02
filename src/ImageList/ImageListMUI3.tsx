import { ImageList, ImageListItem } from '@mui/material'
import React from 'react'
import { imageData } from './imageFile'

const ImageListMUI3 = () => {
    return (
        <div>
            <ImageList variant='woven'
                sx={{ width: 300, height: 400 }}
                cols={3}
                rowHeight={150}
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
        </div>
    )
}

export default ImageListMUI3
