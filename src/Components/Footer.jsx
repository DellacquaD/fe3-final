import React from 'react'
import {Instagram, Facebook, WhatsApp} from '@mui/icons-material';
import { useContext } from 'react'
import { GlobalContext } from './utils/global.context';
import TikTokIcon from './common/tiktokIcon';

const Footer = () => {

  const { state } = useContext(GlobalContext)

  return (
    <footer>
      <div>
        <p>Powered by</p>
        <img src="https://github.com/Frontend-III/fe3-final/blob/main/public/images/DH.png?raw=true" alt='DH-logo' />
      </div>
        <ul>
          <li><Facebook /></li>
          <li><Instagram /></li>
          <li><WhatsApp /></li>
          <li><TikTokIcon color={state.Dark ? '#ffffff' : '#000000'}/></li>
        </ul>
    </footer>
  )
}

export default Footer
