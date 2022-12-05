import { Container } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer>
      <div>
        <p>Powered by</p>
        <img src="https://github.com/Frontend-III/fe3-final/blob/main/public/images/DH.png?raw=true" alt='DH-logo' />
      </div>
        <ul>
          <li><FacebookIcon /></li>
          <li><InstagramIcon /></li>
          <li><FacebookIcon /></li>
          <li><FacebookIcon /></li>
        </ul>
    </footer>
  )
}

export default Footer
