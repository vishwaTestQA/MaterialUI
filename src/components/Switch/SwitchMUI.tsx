import { FormControlLabel, Switch } from '@mui/material'
import React, { useState } from 'react'

type Props = {
    theme: string,
    setTheme: (v:string) => void
}
const SwitchMUI = ({theme, setTheme}:Props) => {
    // const [checked, setChecked] = useState(false)
    // console.log(checked)
    const handleCheckTheme = (e) => {
        const event = e.target.checked
         if(event === true){
                return setTheme('dark')
            }else{
                return setTheme('light')
            }
    }
    return (
        <div>
            <FormControlLabel label="Dark mode"
                control={<Switch
                    size='small'
                    color='success'
                    checked={theme ==="light" ? false: true}
                    onChange={handleCheckTheme}
                />}
            />
        </div>
    )
}

export default SwitchMUI
