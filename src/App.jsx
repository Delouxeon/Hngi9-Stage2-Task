import * as React from 'react';
import './App.css';
import {Navigate, Routes} from "react-router-dom";
import {Route} from "react-router-dom";

import Contact from './contactpage/contact';
import Home from "./Indexpage/index"



function App() {
  return (
    <div>
        <Routes> 
          <Route exact path="/" element={<Home />} />
  
          <Route path="/contact" element={<Contact/>} />
  
          {/* <Navigate to="/" /> */}
        </Routes>
    </div>
  );
}

export default App;



