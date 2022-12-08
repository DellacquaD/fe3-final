import React from 'react'
import {Instagram, Facebook, WhatsApp} from '@mui/icons-material';
import { useContext } from 'react'
import { GlobalContext } from './utils/global.context';
import TikTokIcon from './common/tiktokIcon';
import { AppBar, Box, Button, Container, IconButton, Typography } from '@mui/material';
import {  green, grey } from '@mui/material/colors';

const Footer = () => {

  const { state } = useContext(GlobalContext)

  return (    
    <AppBar position="static">
      <Container maxWidth="x2" sx={{ display: 'flex', flexDirection: 'column' }}> 
        <Typography component={Button}
          color='secondary'
          fontWeight='bold'
          width="auto"
          onClick={() => {document.body.scrollIntoView({ behavior: "smooth"})}}
          >
            Volver a arriba
        </Typography>
        <Box    
        sx={{ 
          display: 'flex', 
          flexDirection: 'row', 
          alignItems: 'center', 
          justifyContent: 'space-around',
        }}
        > 
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1}} >
              <Typography color="secondary">
                Powered by
              </Typography>
              <Typography color="error" variant='h5' fontWeight="bold">
                DIGITAL HOUSE
              </Typography>
            </Box>
            <Box>
              <IconButton href={"http://www.google.com"}><Facebook color='secondary'/></IconButton>
              <IconButton href={"http://www.google.com"}><Instagram color='secondary'/></IconButton>
              <IconButton href={"http://www.google.com"}><WhatsApp color='secondary'/></IconButton>
              <IconButton href={"http://www.google.com"}><TikTokIcon color={state.Dark ? green[600] : grey[800]}/></IconButton>
            </Box>
        </Box>
      </Container>
    </AppBar>
  )
}

export default Footer
