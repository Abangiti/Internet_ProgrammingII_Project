import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login/Login'
import Home from './Home/Home'
import Signup from './signup/Signup'
import Aboutus from './About us/Aboutus'
import Birthday from './Birthday/Birthday'
import Concert from './concert/Concert'



// import Navbar from './Pages/Navbar'
import Contactus from './contactus/Contactus'
import Event from './Event/Event';
// import Footer from './Pages/Footer';

import FAQ from './FAQ/FAQ';
import Funeral from './Funeral/Funeral';
import Graduation from './Graduation/Graduation';
// import Service from './Pages/Service';
import Wedding from './Wedding/Wedding';

function App() {

  return (
  
    <BrowserRouter>
    {/* <Navigation/> */}
    
    
      <Routes>
      
        <Route path="/" element={<Wedding/>} />
        <Route path='/Aboutus' element= {<Aboutus/>}/>
                 <Route path='/Birthday' element= {<Birthday/>}/>
                <Route path='/Concert' element= {<Concert/>}/>
                 <Route path='/Funera' element={<Funeral/>}/>
                <Route path='/Graduation ' element={<Graduation />}/>
               <Route path='/Wedding' element={<Wedding/>}/>
                <Route path='/Event' element={<Event/>}/>
                 <Route path='/Contactus' element={<Contactus/>}/>
               <Route path='/Login' element={<Login/>}/>
               <Route path='/FAQ' element={<FAQ/>}/>
               <Route path='/signup' element={<Signup/>}/>
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  )
}

export default App
