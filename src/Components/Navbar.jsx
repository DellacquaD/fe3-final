import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import { ButtonBase } from '@mui/material';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react'
// import { Link as RouterLink } from 'react-router-dom';
// import { IconButton, BottomNavigation, BottomNavigationAction, Box } from '@mui/material'
import {DarkMode, Brightness5} from '@mui/icons-material';
import { GlobalContext } from './utils/global.context';

// //Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


// const Navbar = () => {
  
  
  const pages = [
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
        
function ResponsiveAppBar() {
 
  const {state, dispatch} = useContext(GlobalContext) 
    
    const linkStyle = {
      textDecoration: "none",
      color: 'white',
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    };
    
    return (
    <AppBar position="static"  >
      <Container maxWidth="x2">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between'}}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Typography
                variant="h6"
                noWrap
                component={Link}
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                  margin: '20px',
                }}
                to="/home"
              >
                DH Odonto
              </Typography>
            </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ p:1, display:'flex', justifyContent: 'flex-end', mr: 5 }}>
              {pages.map((page) => (
                <ButtonBase key={page.name} sx={{ p: 0, bgcolor: '#68a1d9', margin: '5px', width:'150px', height: '60px', borderRadius: 'px'  }}>
                  <Link id={page.name} to={page.path} style={linkStyle}>{page.name}</Link>
                </ButtonBase>
              ))}
            </Box>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <IconButton onClick={() => dispatch({type: "theme"})}>{state.Dark ? <Brightness5/> : <DarkMode />}
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;