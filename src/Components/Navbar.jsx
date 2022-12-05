import { Button } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Link as RouterLink } from 'react-router-dom';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

// const Navbar = () => {

  const navButtons = [
    {
      name: "Home",
      path: "/home",
      theme: false,
    },
    {
      name: "Contact",
      path: "/Contact",
      theme: false,
    },
    {
      name: "Favs",
      path: "/Favs",
      theme: false,
    },
  ]

export default function Navbar() {

  return (
    <Box>
      <BottomNavigation
        showLabels
        sx={{ 
        height: '80px',
        display: 'flex',
        justifyContent: 'space-around' }}
        >
        <h2 className='title'>DH Odonto</h2>
        {navButtons.map((button) => (
          <BottomNavigationAction component={RouterLink} key={button.name} label={button.name} to={button.path}/>
       ))}
        <Button>Change theme</Button>
      </BottomNavigation>
    </Box>
  );
}