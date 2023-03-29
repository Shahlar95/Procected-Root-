import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './General/Pages/Home/Home';
import Login from './General/Pages/Login/Login';
import About from './General/Pages/About/About';
import Contact from './General/Pages/Contact/Contact';
import Sidebar from './General/Sidebar/Sidebar';
import Protected1 from './General/Protected1/Protected1';

function App() {

  
  
  return (
    <div className="App">

      <Sidebar/>
        <Routes>
          
          <Route path ="/login" element = {<Login/>}/>
          <Route element ={<Protected1/>}>
          <Route path ="/" element = {<Home/>}/>
          <Route path ="/about" element = {<About/>}/>
          <Route path ="/contact" element = {<Contact/>}/>
          </Route>
        </Routes>
      
     

    </div>
  );
}

export default App;
