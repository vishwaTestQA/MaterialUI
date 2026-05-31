import { useState } from 'react'
import './App.css'
import ButtonMUI from './components/ButtonMUI'
import CheckboxNormal from './components/Checkbox/CheckboxNormal'
import CheckboxMUI from './components/Checkbox/ChekboxMUI'
import Radio from './components/Radio/Radio'
import RadioMUI from './components/Radio/RadioMUI'
import SelectMUI from './components/SelectMUI'
import SwitchMUI from './components/Switch/SwitchMUI'
import TextFieldMUI from './components/TextFieldMUI'
import ToggleWith from './components/ToggleWith'
import TypographyMUI from './components/TypographyMUI'
import RatingMUI from './components/Rating/RatingMUI'
import AutoCompleteMUI from './components/AutoCompleteMUI'
import BoxMUI from './components/BoxMUI'

function App() {
   const [theme, setTheme] = useState('light')

  console.log(theme)
  return (
    <div style={{
         width:"100vw", height:"100vh",
         backgroundColor: theme ==="dark" ? 'black' : 'white',
         color: theme ==="dark" ? "white" : "black"}
        }>
      {/* <TypographyMUI/> */}
      {/* <ButtonMUI/>  */}
      {/* <ToggleWith /> */}
      {/* <TextFieldMUI/> */}
      {/* <SelectMUI/> */}
      {/* <Radio/>
      <RadioMUI/> */}

      {/* <CheckboxNormal/>
      <CheckboxMUI/> */}

      {/* <SwitchMUI theme={theme} setTheme={setTheme}/> */}
      {/* <RatingMUI/> */}
      {/* <AutoCompleteMUI/> */}
      <BoxMUI />
    </div>
  )
}

export default App
