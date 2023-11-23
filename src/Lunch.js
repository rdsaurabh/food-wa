import { Button, Checkbox, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'

function Lunch () {
    
  const[monday,setMonday] = useState(false);
  const[tuesday,setTuesday] = useState(false);
  const[wednesday,setWednesday] = useState(false);
  const[thursday,setThursday] = useState(false);
  const[friday,setFriday] = useState(false);
  
  function submitLunch(){
    axios.post("https://foodwaste.devsaurabhthakur.com/lunch",
            {
                monday,
                tuesday,
                wednesday,
                thursday,
                friday
            }).then(()=>{
                alert("Response Saved Successfully");
            }).catch(()=>{
                alert("Response Could not be saved");
            })
  }

  return (
    <div>
        <Typography>LUNCH:</Typography>
        <Checkbox  onChange={()=>{setMonday((prv)=> !prv)}}/> Monday
        <Checkbox onChange={()=>{setTuesday((prv)=> !prv)}} /> Tuesday
        <Checkbox  onChange={()=>{setWednesday((prv)=> !prv)}} /> Wednesday
        <Checkbox onChange={()=>{setThursday((prv)=> !prv)}}/> Thursday
        <Checkbox onChange={()=>{setFriday((prv)=> !prv)}} /> Friday
        <Button  sx={{margin:1}} size="medium"onClick={submitLunch} variant="contained">Submit</Button>
    
  </div>
  )
}

export default Lunch