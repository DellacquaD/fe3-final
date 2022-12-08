import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import { Button, ButtonBase, ButtonGroup } from '@mui/material';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react'
import {DarkMode, Brightness5} from '@mui/icons-material';
import { GlobalContext } from './utils/global.context';
import { useNavigate } from 'react-router-dom';


function ResponsiveAppBar() {
  
  const {state, dispatch} = useContext(GlobalContext) 

  
  const pages = [
    {
      name: "Home",
      path: "/home",
    },{
      name: "Contact",
      path: "/contact",
      },{
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
        <IconButton onClick={() => dispatch({type: "theme"})}>{state.Dark ? <Brightness5/> : <DarkMode />}</IconButton>
      </BottomNavigation>
    </Box>
  );
}
export default ResponsiveAppBar;