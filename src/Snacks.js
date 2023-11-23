import { Button, Checkbox, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'

function Snacks() {

    const[monday,setMonday] = useState(false);
    const[tuesday,setTuesday] = useState(false);
    const[wednesday,setWednesday] = useState(false);
    const[thursday,setThursday] = useState(false);
    const[friday,setFriday] = useState(false);

    function submitSnacks(){
        axios.post("https://foodwaste.devsaurabhthakur.com/snacks",
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
      <Typography>SNACKS:</Typography>
      <Checkbox  onChange={()=>{setMonday((prv)=> !prv)}}/> Monday
      <Checkbox onChange={()=>{setTuesday((prv)=> !prv)}} /> Tuesday
      <Checkbox  onChange={()=>{setWednesday((prv)=> !prv)}} /> Wednesday
      <Checkbox onChange={()=>{setThursday((prv)=> !prv)}}/> Thursday
      <Checkbox onChange={()=>{setFriday((prv)=> !prv)}} /> Friday
      <Button  sx={{margin:1}} size="medium"  onClick={submitSnacks} variant="contained">Submit</Button>
  
      </div>)
    
}

export default Snacks