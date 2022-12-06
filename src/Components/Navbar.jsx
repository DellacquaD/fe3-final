import { Button } from '@mui/material'
import React, { useContext } from 'react'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Link as RouterLink } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Navbar = () => {

  const {state, dispatch} = useContext(ContextGlobal)

  const navButtons = [
    {
      name: "Home",
      path: "/home",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Favs",
      path: "/favs",
    }
  ]

  
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
        <Button onClick={() => dispatch({type: "theme"})}>Change theme</Button>
      </BottomNavigation>
    </Box>
  );
}

export default Navbar