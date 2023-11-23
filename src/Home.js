import {Container} from '@mui/material'
import React, { useState } from 'react'
import Lunch from './Lunch';
import Snacks from './Snacks';

function Home() {

  return (
    <Container  maxWidth = 'lg'  sx={{
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}> 
    <Lunch/>
    <Snacks/>
    </Container>
  )
}

export default Home