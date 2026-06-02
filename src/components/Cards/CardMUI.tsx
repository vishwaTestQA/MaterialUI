import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const CardMUI = () => {
  return (
    <Box sx={{width:"300px"}}>
      <Card elevation={3}>
        <CardContent>
            <Typography variant='h5' component='div'>React</Typography>
            <Typography variant='body1' component='div'>React is a javascript library for building UI. Can be used to build a single page or mobile application</Typography>
            
            <CardMedia
               component='img'
            //    height='100'
               alt="react image"
               image='https://media.sketchfab.com/models/540ff21ac0f54a038df6f634c7cce726/thumbnails/c7aff9789ba54201b3e850a06a262ead/715945dc7bd24448ad681a9b311cda69.jpeg'
            />
            <CardActions>
                <Button>Share</Button>
                <Button>Learn more</Button>
            </CardActions>

        </CardContent>
      </Card>
    </Box>
  )
}

export default CardMUI
