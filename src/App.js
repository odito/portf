
import React, { useContext, useEffect, useState } from 'react'; 
import './App.css'; 
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Admin from './components/adminComponents/Admin';
import EditAbout from './components/editComponents/EditAbout';
import EditEducation from './components/editComponents/EditEducation';
import EditProjects from './components/editComponents/EditProjects';
import EditExperience from './components/editComponents/EditExperience';
import {DataContext} from './components/context/GlobalContext';

import {BrowserRouter, Route} from 'react-router-dom';
import { Element } from 'react-scroll';



function App() { 

   const state = useContext(DataContext)
  const [isLogin,setIsLogin]= state.isLogin;
  console.log(isLogin);



  return ( 
    <BrowserRouter>
 
    <div className="App" > 
    
     <Navbar />
     <Element name ='Home'>
      <Route exact path='/' component={Header} />
     </Element>

     <Element name="About">
      <Route exact path='/' component={About} />
     </Element>

     <Element name="Education">
        <Route exact path='/' component={Education} />
     </Element>

     <Element name="Projects">
      <Route exact path='/' component={Projects} />
     </Element>
     
     <Element name="Experience">
      <Route exact path='/' component={Experience} />
     </Element>

     

     <Element name="Contact">
      <Route exact path='/' component={Contact} />
     </Element>
   
    
   
  
   
    <Route exact path='/login'   render={()=>isLogin?<Admin />:<Login setIsLogin={setIsLogin} />} />
    {/* lathos */}
    {/* <Route  path={isLogin?'/admin':'/login'}   component={isLogin?Admin : Login} /> */}
    <Route exact path='/admin' component={Admin}  />
    <Route exact path='/edit/:id' component={EditAbout}  />
    <Route exact path='/editEducation/:id' component={EditEducation}  />
    <Route exact path='/editProject/:id' component={EditProjects}  />
    <Route exact path='/editExperience/:id' component={EditExperience}  />
    <Route  component={Footer} />
   
  
 
   
    </div> 
    </BrowserRouter>
  ); 
} 

export default App;