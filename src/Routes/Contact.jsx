import { Box, Container } from '@mui/material'
import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <Box sx={{
      minHeight: '75vh'
    }}>
      <Container >
        <h2>Want to know more?</h2>
        <p>Send us your questions and we will contact you</p>
        <Form/>
      </Container>
    </Box>
  )
}

export default Contact