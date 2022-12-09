import React from 'react'
import {Instagram, Facebook, WhatsApp} from '@mui/icons-material';
import { AppBar, Box, Button, Container, IconButton, Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';


const Footer = () => {

  return (    
    <AppBar position="static" sx={{ minHeight: '12vh'}} >
      <Container maxWidth="x2" sx={{ display: 'flex', flexDirection: 'column' }}> 
        <Button
          color='secondary'
          width="auto"
          onClick={() => {document.body.scrollIntoView({ behavior: "smooth"})}}
          style={{ fontWeight: 'bold' }}
          >
            Scroll Up
        </Button>
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
              <IconButton role="facebook" href='https://www.facebook.com/' ><Facebook color='secondary'/></IconButton>
              <IconButton role="instagram" href='https://www.instagram.com/'><Instagram color='secondary'/></IconButton>
              <IconButton role="whatsapp" href='https://www.whatsapp.com/' ><WhatsApp color='secondary'/></IconButton>
              <IconButton role="tiktok" href='https://www.twitter.com/'><TwitterIcon color='secondary'/></IconButton>
            </Box>
        </Box>
      </Container>
    </AppBar>
  )
}

export default Footer
