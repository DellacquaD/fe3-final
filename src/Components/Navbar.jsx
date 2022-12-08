import React, { useContext } from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { IconButton, BottomNavigation, BottomNavigationAction, Box } from '@mui/material'
import {DarkMode, Brightness5} from '@mui/icons-material';
import { GlobalContext } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Navbar = () => {

  const {state, dispatch} = useContext(GlobalContext)

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
        <i component={IconButton}  onClick={() => dispatch({type: "theme"})}>{state.Dark ? <Brightness5/> : <DarkMode />}</i>
      </BottomNavigation>
    </Box>
  );
}

export default Navbar