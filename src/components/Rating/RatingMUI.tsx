import { FavoriteRounded } from '@mui/icons-material'
import { Rating, Stack } from '@mui/material'
import React, { useState } from 'react'

const RatingMUI = () => {

    const [highlighted, setHighlighted] = useState<number|null>(null)
    const handleRating = (e:React, value: number|null) => {
      console.log(value)
      setHighlighted(value)
    }

  return (
    <Stack spacing={2}>
       <Rating onChange={handleRating} precision={0.5}/>
       <Rating value={2} readOnly/>   {/* For displaying product rating to the user */}
       <Rating onChange={handleRating} 
              precision={0.5} 
              value={highlighted} 
              highlightSelectedOnly/>   {/* For displaying product rating to the user */}

            <Rating onChange={handleRating} 
              precision={0.5} 
              value={highlighted} 
              icon={<FavoriteRounded color='error'/>}
              emptyIcon={<FavoriteRounded/>}
              />
              
    </Stack>
  )
}

export default RatingMUI
