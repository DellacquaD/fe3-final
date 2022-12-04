import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Home from "./Routes/Home"
import Favs from "./Routes/Favs"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/home' element={ <Home /> }/>
          <Route path='/contact' element={ <Contact/> }/>
          <Route path='/dentist/:id' element={ <Detail/> }/>
          <Route path='/favs' element={ <Favs/> }/>
          
        </Routes>
      </BrowserRouter>
    </div>


)}

export default App;
