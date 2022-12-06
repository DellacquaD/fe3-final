import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ContextProvider } from './Components/utils/global.context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route element={ <App /> }>
              <Route path='/' element={ <Home /> } />
              <Route path='/home' element={ <Home /> }/>
              <Route path='/contact' element={ <Contact/> }/>
              <Route path='/dentist/:id' element={ <Detail/> }/>
              <Route path='/favs' element={ <Favs/> }/> 
            </Route>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
  </React.StrictMode>
);


