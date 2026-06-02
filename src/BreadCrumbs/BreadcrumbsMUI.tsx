import { NavigateNext } from '@mui/icons-material'
import { Breadcrumbs, Link, Typography } from '@mui/material'
import React from 'react'

const BreadcrumbsMUI = () => {
  return (
    <div>
      {/* <Breadcrumbs separator="-"> */}
      <Breadcrumbs 
          separator={<NavigateNext/>}
          maxItems={4}
          itemsAfterCollapse={2}
          itemsBeforeCollapse={2}
          >
        <Link href="#">Home</Link>
        <Link href="#">Catalog</Link>
        <Link href="#">accesseries</Link>
        <Link href="#">accesseries2</Link>
        <Link href="#">accesseries3</Link>
        <Link href="#">Home2</Link>
        <Link href="#">Home3</Link>
        <Link href="#">catalog2</Link>
        <Typography>Shoes</Typography>
      </Breadcrumbs>
    </div>
  )
}

export default BreadcrumbsMUI
