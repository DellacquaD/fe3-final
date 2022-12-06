import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import { useEffect } from 'react';

function App() {
  const location = useLocation;
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate("/home");
    }
  });

  return (
    <div >
        <CssBaseline />
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  );
}

export default App;
