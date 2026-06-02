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
import StackMUI from './components/StackMUI'
import PaperMui from './components/PaperMui'
import CardMUI from './components/Cards/CardMUI'
import AccordionMUI from './Accordian/AccordionMUI'
import ImageMUI from './ImageList/ImageMUI'
import ImageListNormal from './ImageList/ImageListNormal'
import ImageListMUI1 from './ImageList/ImageListMUI1'
import ImageListMUI2 from './ImageList/ImageListMUI2'
import ImageListMUI3 from './ImageList/ImageListMUI3'
import ImageListMUI4 from './ImageList/ImageListMUI4'
import ImageListMUI5 from './ImageList/ImageListMUI5'
import NavbarMUI from './Navbar/NavbarMUI'
import MenuMUI from './Menu/MenuMUI'
import BreadcrumbsMUI from './BreadCrumbs/BreadcrumbsMUI'
import DrawerMUI from './Drawer/DrawerMUI'
import SpeedDialMUI from './SppedDial/SpeedDialMUI'
import BottomNavigationMUI from './BottomNavigation/BottomNavigationMUI'
import { Route, Routes } from 'react-router-dom'
import Home from './BottomNavigation/Home'
import Favourites from './BottomNavigation/Favourites'
import Person from './BottomNavigation/Person'

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
      {/* <BoxMUI /> */}
      {/* <StackMUI/> */}
      {/* <PaperMui/> */}
      {/* <CardMUI/> */}
      {/* <AccordionMUI/> */}
      {/* <ImageMUI/> */}

      {/* <ImageListNormal/> */}
      {/* <ImageListMUI1/> */}
      {/* <ImageListMUI2/> */}
      {/* <ImageListMUI3/> */}
      {/* <ImageListMUI4/> */}
      {/* <ImageListMUI5/> */}
      {/* <NavbarMUI/> */}
      {/* <MenuMUI/> */}

      {/* <BreadcrumbsMUI/> */}

      {/* <DrawerMUI/> */}
      {/* <SpeedDialMUI/> */}
      <BottomNavigationMUI/>

      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/favourite' element={<Favourites/>}/>
        <Route path='/person' element={<Person/>}/>
      </Routes>

      
    </div>
  )
}

export default App
