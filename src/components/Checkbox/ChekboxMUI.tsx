import { BookmarkBorder, Bookmark } from '@mui/icons-material'
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from '@mui/material'
import React, { useState } from 'react'

const CheckboxMUI = () => {
    const [acceptTnc, setAcceptTnc] = useState(false)
    const [bookmark, setBookmark] = useState(false)
    const [skills, setSkills] = useState([])
    const [err, setErr] = useState(false)

    const handleSkills = (e) => {
       const skill = e.target.value
       setSkills(prev => {
        if(prev.includes(skill)){
          return [...prev.filter(p => p!==skill)]
        }
        return [...prev, skill]
       })
    }

    console.log("acceptTnc", acceptTnc, "bookmarkicon", bookmark, "skills", skills)
  return (
    <div>
        {/* single turn on off checkbox like accept terms and conditions */}
      <Box>
        <FormControlLabel 
             label="accept terms and conditions" 
             control={<Checkbox  size="small" onChange={e => setAcceptTnc(!acceptTnc)}/>}
             />
      </Box>

      <Box>
          <Checkbox
              icon={<BookmarkBorder/>}
              checkedIcon= {<Bookmark/>}
              checked={bookmark}
              onChange={e => setBookmark(e.target.checked)}
          ></Checkbox>
      </Box>

      <Box>
        <FormControl error>
           <FormLabel>Skill list</FormLabel>
           <FormGroup>
               <FormControlLabel label="React" 
                               value="React" 
                               checked={skills.includes("React")} 
                               onChange={handleSkills}
                               control={<Checkbox/>}
                               />

                                 <FormControlLabel label="JS" 
                               value="JS" 
                               checked={skills.includes("JS")} 
                               onChange={handleSkills}
                               control={<Checkbox/>}
                               />

                          <FormControlLabel label="HTML/CSS" 
                               value="HTML/CSS" 
                               checked={skills.includes("HTML/CSS")} 
                               onChange={handleSkills}
                               control={<Checkbox/>}
                               />
           </FormGroup>
           {err && <FormHelperText>Required skills</FormHelperText>}
        </FormControl>
      </Box>
    </div>
  )
}

export default CheckboxMUI