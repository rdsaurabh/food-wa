import { Button, Container, Divider, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Admin() {
  const [lunchList,setLunchList] = useState([]);
  const [snacksList,setSnacksList] = useState([]);
  const [lunchFlag,setLunchFlag] = useState(true);

  useEffect(()=>{

      axios.get("https://foodwaste.devsaurabhthakur.com/snacks").then(response =>{
        setSnacksList((prv) => response.data)
      })

      axios.get("https://foodwaste.devsaurabhthakur.com/lunch").then(response =>{
        setLunchList((prv) => response.data)
      })
  },[])

  return (
    <>
      <Container  maxWidth = 'lg'  sx={{
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}> 
        {lunchFlag ? <Typography sx={{fontWeight:"bold"}}>Lunch</Typography> : <Typography sx={{fontWeight:"bold"}}>Snacks</Typography>}
        <Button sx={{margin:1}} size="medium"  onClick={()=>{setLunchFlag(!lunchFlag)}} variant="contained">{lunchFlag?"Show Snacks Count" : "Show Lunch Count"}</Button>
      </Container>
      {lunchFlag ? 
      
        lunchList.map((lunchItem)=>(
          
          <Container key={lunchItem._id} maxWidth = 'lg'  sx={{
            marginTop:2,
            flex:"row",
            alignItems: 'center',
          }}> 

           <Typography sx={{fontWeight:"bold"}}> Mon  {lunchItem.monday} </Typography> 
           <Typography sx={{fontWeight:"bold"}}> Tue  {lunchItem.tuesday} </Typography> 
           <Typography sx={{fontWeight:"bold"}}> Wed  {lunchItem.wednesday} </Typography> 
           <Typography sx={{fontWeight:"bold"}}> Thu  {lunchItem.thursday} </Typography> 
           <Typography sx={{fontWeight:"bold"}} > Fri  {lunchItem.friday} </Typography> 
          
          <Divider></Divider>
          </Container>
        ))
       :
       snacksList.map((snacksItem)=>(
          
        <Container key={snacksItem._id} maxWidth = 'lg'  sx={{
          marginTop:2,
          flex:"row",
          alignItems: 'center',
        }}> 

         <Typography sx={{fontWeight:"bold"}} > Mon  {snacksItem.monday} </Typography> 
         <Typography sx={{fontWeight:"bold"}} > Tue  {snacksItem.tuesday} </Typography> 
         <Typography sx={{fontWeight:"bold"}} > Wed  {snacksItem.wednesday} </Typography> 
         <Typography sx={{fontWeight:"bold"}}> Thu  {snacksItem.thursday} </Typography> 
         <Typography sx={{fontWeight:"bold"}}> Fri  {snacksItem.friday} </Typography> 
        
        <Divider></Divider>
        </Container>
      ))
        
        
        }

    </>
  )
}

export default Admin