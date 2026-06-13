import { ExpandCircleDownRounded } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import React, { useState } from 'react'

const AccordionMUI = () => {
  const[expanded, setExpanded] = useState('')
  const handleExpand = (isExpand:boolean, panel:string) => {
     setExpanded(prev => prev === panel ? 'false' : panel)
  }
  return (
    <>
    <Accordion 
          expanded={expanded === 'panel1'}
          onChange={(e, isExpanded:boolean) => handleExpand(isExpanded, 'panel1')}
          >
       <AccordionSummary 
            id="panel1" 
            aria-label='panel1-content' 
            expandIcon={<ExpandCircleDownRounded/>} >React</AccordionSummary>
       <AccordionDetails>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique rerum minima rem aspernatur quasi saepe quis vero quam numquam facere iusto quas, molestiae odio repellat. Eos repellendus quae quod corporis.</AccordionDetails>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam reiciendis velit cumque eveniet rerum soluta ipsa ullam vero harum beatae fugiat ipsum accusantium voluptate distinctio, officiis nam suscipit officia? Corporis.</p>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam reiciendis velit cumque eveniet rerum soluta ipsa ullam vero harum beatae fugiat ipsum accusantium voluptate distinctio, officiis nam suscipit officia? Corporis.</div> */}
    </Accordion>

      <Accordion 
             expanded={expanded === 'panel2'} 
             onChange={(e, isExpanded) => handleExpand(isExpanded, 'panel2')}>
       <AccordionSummary 
           id='panel2' 
           aria-label='panel1-content' 
           expandIcon={<ExpandCircleDownRounded/>}>JS</AccordionSummary>
       <AccordionDetails>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique rerum minima rem aspernatur quasi saepe quis vero quam numquam facere iusto quas, molestiae odio repellat. Eos repellendus quae quod corporis.</AccordionDetails>
    </Accordion>

     <Accordion 
          expanded={expanded === 'panel3'}
          onChange={(e, isExpanded) => handleExpand(isExpanded, 'panel3')}
          >
       <AccordionSummary id="panel3" expandIcon={<ExpandCircleDownRounded/>}>HTML CSS</AccordionSummary>
       <AccordionDetails>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique rerum minima rem aspernatur quasi saepe quis vero quam numquam facere iusto quas, molestiae odio repellat. Eos repellendus quae quod corporis.</AccordionDetails>
    </Accordion>
    </>
  )
}

export default AccordionMUI
