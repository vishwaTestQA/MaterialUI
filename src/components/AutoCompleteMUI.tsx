import { Autocomplete, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

type SkillProps = {
  id: number,
  skll: string
}

const AutoCompleteMUI = () => {
    const skills = ["Javascript", "HTML", "CSS", "React"]
    
    const skillObj = skills.map((skl ,indx) => ({
       id: indx+1,
       skll: skl
    })
  )

  console.log("skillObj",skillObj)

    const [skillData, setSkillData] = useState<SkillProps | null>(null)

    const [skillData2, setSkillData2] = useState<SkillProps[]>([])

    const[val, setVal] = useState<string|null>(null)

    console.log("val", val, "skillData", skillData)

  return (
    <Stack spacing={2}>
      <Autocomplete
          options={skills}
          renderInput={(params) => <TextField {...params} label="skills"/>}
          onChange={(e:any, value:string|null) => setVal(value)}
          value={val}
      />

       <Autocomplete
          options={skills}
          renderInput={(params) => <TextField {...params} label="skills"/>}
          freeSolo
      />

        <Autocomplete
          options={skillObj}
          getOptionLabel={(opt) => opt.skll}
          renderInput={(params) => <TextField {...params} label="skillsObj"/>}
          value={skillData}
          onChange={(e, val) => setSkillData(val)}
      />

       <Autocomplete
          multiple
          options={skillObj}
          getOptionLabel={(opt) => opt.skll}
          renderInput={(params) => <TextField {...params} label="skillsObj2"/>}
          value={skillData2}
          onChange={(e, val) => setSkillData2(val)}
      />
    </Stack>
  )
}

export default AutoCompleteMUI
