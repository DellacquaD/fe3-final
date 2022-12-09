import React from 'react'
import {Instagram, Facebook, WhatsApp} from '@mui/icons-material';
import { useContext } from 'react'
import { GlobalContext } from './utils/global.context';
import TikTokIcon from './common/tiktokIcon';
import { AppBar, Box, Button, Container, IconButton, Typography } from '@mui/material';
import {  green, grey } from '@mui/material/colors';

const Footer = () => {

  return (    
    <AppBar position="static">
      <Container maxWidth="x2" sx={{ display: 'flex', flexDirection: 'column' }}> 
        <Button
          color='secondary'
          fontWeight='bold'
          width="auto"
          onClick={() => {document.body.scrollIntoView({ behavior: "smooth"})}}
          >
            Volver a arriba
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
            <Box role="Anchors">
              <Typography role="facebook" component={IconButton} href={"https://www.facebook.com/"}><Facebook color='secondary'/></Typography>
              <Typography role="instagram" component={IconButton} href={"https://www.instagram.com/"}><Instagram color='secondary'/></Typography>
              <Typography role="whatsapp" component={IconButton} href={"https://www.whatsapp.com/"}><WhatsApp color='secondary'/></Typography>
              <Typography role="tiktok" component={IconButton} href={"https://www.tiktok.com/"}><TikTokIcon/></Typography>
            </Box>
        </Box>
      </Container>
    </AppBar>
  )
}

export default Footer
