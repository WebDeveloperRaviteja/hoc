import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Edit from './Edit';

const Routercomp = () => {
  return (
    <div>
        <center>
          <BrowserRouter>
           <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Edit" element={<Edit />} />  
           </Routes>
          
          </BrowserRouter>

        </center>
      
    </div>
  )
}

export default Routercomp
