import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Aboutus from './Pages/Aboutus'
import Birthday from './Pages/Birthday'
import Concert from './Pages/Concert'



import Navbar from './Pages/Navbar'
import Contactus from './Pages/Contactus'
import Event from './Pages/Event';
import Footer from './Pages/Footer';

import FAQ from './Pages/FAQ';
import Funeral from './Pages/Funeral';
import Graduation from './Pages/Graduation'

import Wedding from './Pages/Wedding';

function App() {

  return (
  
    <BrowserRouter>
    <Navbar/>
    
    
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path='/Aboutus' element= {<Aboutus/>}/>
                 <Route path='/Birthday' element= {<Birthday/>}/>
                <Route path='/Concert' element= {<Concert/>}/>
                 <Route path='/Funeral' element={<Funeral/>}/>
               
               <Route path='/Wedding' element={<Wedding/>}/>
                <Route path='/Event' element={<Event/>}/>
                 <Route path='/Contactus' element={<Contactus/>}/>
               <Route path='/Login' element={<Login/>}/>
               <Route path='/FAQ' element={<FAQ/>}/>
               <Route path='/signup' element={<Signup/>}/>
               <Route path='/grad' element={<Graduation/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  )
}

export default App
