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


function ResponsiveAppBar() {
  
  const {state, dispatch} = useContext(GlobalContext) 

  const handleClick = () => {
    dispatch({type: "theme"})
  }
 
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
  
  const linkStyle = {
    textDecoration: "none",
    width: '100%',
    height: '100%',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
    
    return (
    <AppBar position="static" >
      <Container maxWidth="x2" >
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between'}}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Typography
                variant="h6"
                component={Link}
                color='secondary'                
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontWeight: 700,
                  //letterSpacing: '5px',
                  margin: '20px',
                }}
                to="/home" >
                DH Odonto
              </Typography>
            </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ p:1, display:'flex', justifyContent: 'flex-end', mr: 5 }}>
              {pages.map((page) => (
                <ButtonGroup key={page.name} 
                sx={{ 
                  p: 0,
                  margin: '5px', 
                  width:'150px', 
                  height: '60px', 
                  borderRadius: 'px'  
                }}>
                  <Typography component={Link} role="home" id={page.name} to={page.path} style={linkStyle} color="secondary">{page.name}</Typography>
                </ButtonGroup>
              ))}
            </Box>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Change Theme">
              <IconButton role={state.Dark ? "isDark" : "isLigth"} onClick={handleClick}>
                  {state.Dark ? <Brightness5/> : <DarkMode />}
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;