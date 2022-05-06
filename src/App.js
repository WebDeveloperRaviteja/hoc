import React,{UseEffect} from 'react';
import './App.css';
import Hoc from './HOC/Hoc';
import Basic from './HOC/Basic';
import UseEffe from './Api calling/UseEffe';
import FirebassForm from './Firebase/FirebassForm';
import Routercomp from './CurdFirebase/Routercomp';




function App() {
  
  return (
    <div className="App">
      <Basic />
      <Hoc />

      <FirebassForm /> <br/>

      {/* <UseEffe /> */}
     <Routercomp />
    </div>
  );
}

export default App;
