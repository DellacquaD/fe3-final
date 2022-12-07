import { useLocation, useNavigate } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import Layout from "./Routes/Layout";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";


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
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={ <Home /> } />
        <Route path='/home' element={ <Home /> }/>
        <Route path='/contact' element={ <Contact/> }/>
        <Route path='/dentist/:id' element={ <Detail/> }/>
        <Route path='/favs' element={ <Favs/> }/> 
      </Route>
    </Routes>
  );
}

export default App;
