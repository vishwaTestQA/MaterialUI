import { CopyAll, Edit, PrintRounded, ShareOutlined } from '@mui/icons-material'
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import React from 'react'

const SpeedDialMUI = () => {
  return (
    <div>
       <SpeedDial 
            ariaLabel='speed dial navigation'
            sx={{position: "absolute", bottom: 16, right:16}}
            icon={<SpeedDialIcon openIcon={<Edit/>}/>}
            >
          <SpeedDialAction icon={<CopyAll/>} slotProps={{
                    tooltip:{
                       open:true, title: "copy"
                       }}}/>
          <SpeedDialAction icon={<PrintRounded/>} slotProps={{
                    tooltip:{
                       open:true, title: "print"
                       }}}/>
          <SpeedDialAction icon={<ShareOutlined/>} slotProps={{
                    tooltip:{
                       open:false, title: "share"
                       }}}/>
       </SpeedDial>
    </div>
  )
}

export default SpeedDialMUI
