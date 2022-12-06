import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context';
import TikTokIcon from './common/tiktokIcon';

const Footer = () => {

  const { state } = useContext(ContextGlobal)

  return (
    <footer>
      <div>
        <p>Powered by</p>
        <img src="https://github.com/Frontend-III/fe3-final/blob/main/public/images/DH.png?raw=true" alt='DH-logo' />
      </div>
        <ul>
          <li><FacebookIcon /></li>
          <li><InstagramIcon /></li>
          <li><WhatsAppIcon /></li>
          <li><TikTokIcon color={state.prefersDark ? '#ffffff' : '#000000'}/></li>
        </ul>
    </footer>
  )
}

export default Footer
