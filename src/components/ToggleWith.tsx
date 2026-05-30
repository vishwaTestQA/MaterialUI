import { Button, Stack } from '@mui/material'
import React, { useRef, useState } from 'react'

import FormatBoldIcon from '@mui/icons-material/FormatBold';

const ToggleWith = () => {
    const [toggled, setToggled] = useState(false)

    const textareaRef = useRef(null)


const makeBold = () => {
    document.execCommand("bold");
  };


  const makeItalic = () => {
    document.execCommand("italic");
  };
  const makeUnderline = () => {
    document.execCommand("underline");
  };
    const handleSelection = () => {
        if(!textareaRef.current) return
        const e1 = textareaRef.current
        console.log(e1.selectionStart)
        console.log(e1.selectionEnd)
        const start = e1.selectionStart
        const end = e1.selectionEnd;   
    }
     
   return <div>
        <button onClick={() => setToggled(!toggled)}>
            <FormatBoldIcon/>
        </button>

        {/* <textarea ref={textareaRef} onMouseUp={handleSelection} onMouseDown={handleSelection}/> */}


        <button onClick={makeBold}>B</button>
        <button onClick={makeUnderline}>U</button>
        <button onClick={makeItalic}>i</button>

        <div 
           contentEditable 
           ref={textareaRef} onMouseUp={handleSelection} onMouseDown={handleSelection}
           style={{border:"solid"}}>
            
        </div>
    </div>
}

export default ToggleWith