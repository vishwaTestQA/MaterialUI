import {Typography} from '@mui/material'


const TypographyMUI = () => {
  return (
    <div>
        <Typography variant='h1'>Heading h1</Typography>
        <Typography variant='h2'>Heading h2</Typography>
        <Typography variant='h3'>Heading h3</Typography>
        <Typography variant='h4'>Heading h4</Typography>
        <Typography variant='h5'>Heading h5</Typography>
        <Typography variant='h6'>Heading h6</Typography>

        {/* these also h6 element with some changes */}
        <Typography variant='subtitle1'>subtitle 1</Typography>
        <Typography variant='subtitle1'>subtitle 2</Typography>

     {/* body1 default 16px with normal font weight */}
        <Typography variant='body1'>body 1</Typography>
        <Typography/>               {/* default variant of Typography is body1 */}

        <Typography variant='body2'>body 2</Typography>    {/* body2 is smaller version of body1 */}


         <Typography variant='h4' component="h1" gutterBottom>Heading h4 with comp 1</Typography>
    </div>
  )
}

export default TypographyMUI