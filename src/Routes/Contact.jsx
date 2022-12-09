import { Box, Container, Divider, Typography } from '@mui/material'
import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Container>
        <Typography variant='h4'>
          Want to know more?
        </Typography>
        <Divider/>
        <Typography variant='h7'>
          Send us your questions and we will contact you
        </Typography>
        <br />
        <br />
        <br />
        <Form/>
      </Container>
    </Box>
  )
}

export default Contact