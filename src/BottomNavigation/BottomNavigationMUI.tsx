import { FavoriteOutlined, Home, Person, Settings } from '@mui/icons-material'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const BottomNavigationMUI = () => {
    const navigate = useNavigate()
    const [value, setValue] = useState(0)
    const handleValue = (newValue: number) => {
        setValue(newValue)
          if (newValue === 0) navigate("/home");
          if (newValue === 1) navigate("/favourite");
         if (newValue === 2) navigate("/person");
    }
  return (
    <BottomNavigation 
          sx={{width: '100%', position:'absolute', bottom:0}}
          showLabels
          value={value}
          onChange={(e,val) => handleValue(val)}
          >

       {/* <BottomNavigationAction label="Home" icon={<Home/>} onClick={() => navigate('/home')}/>     
       <BottomNavigationAction label="Favourite" icon={<FavoriteOutlined/>} onClick={() => navigate('/favourite')}/>     
       <BottomNavigationAction label="person" icon={<Person/>} onClick={() => navigate('/person')}/>      */}

{/* way 2 is also good */}
       <BottomNavigationAction label="Home" icon={<Home/>}/>     
       <BottomNavigationAction label="Favourite" icon={<FavoriteOutlined/>}/>     
       

{/* way 3 is recommended */}
{/* <BottomNavigationAction 
     label="person" 
     icon={<Person/>}
    //  LinkComponent={Link}
    
     
     />  
<BottomNavigationAction label="settings" icon={<Settings/>}/>           */}
        
    </BottomNavigation>
  )
}

export default BottomNavigationMUI
