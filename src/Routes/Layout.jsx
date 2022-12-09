import React from 'react'
import { CssBaseline } from "@mui/material";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from 'react-router-dom';


const Layout = () => {
  return (
    <div >
        <CssBaseline />
        <Navbar />
          <div 
          style={{ 
            minHeight: '80vh', 
            display: 'flex', 
            justifyContent: 'center' 
            }} >
            <Outlet />
          </div>
        <Footer />
    </div>
  )
}

export default Layout