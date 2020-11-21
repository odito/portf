import React from 'react';
import profile from '../images/ody.JPG';
import Particles from 'react-particles-js'; 
import Typewriter from 'typewriter-effect';

const Header = () => {
    return (
      <React.Fragment>
        <div className="header" >
      
        <div className="particle">
          <Particles className="particleComp" 
          height="400px"
          width="100%"
              params={{ 
                particles: { 
                  number: { 
                    value: 100, 
                    density: { 
                      enable: false, 
                      value_area: 800, 
                    } 
                  }, 
                },
                
                "interactivity": {
                  "events": {
                      "onhover": {
                          "enable": true,
                          "mode": "repulse"
                      }
                  }
              }
              }}  /> 
  
        <div className="fullName">
              {/* <h1 >Odysseas </h1>
              <h2>Kolas</h2> */}


          <h1>
            <Typewriter
            options={{
              strings: ['Odysseas', 'Kolas'],
              autoStart: true,
              loop: true,
            }}
            />
          </h1> 

        </div>
  
        <div className="cv">
          <span> <b> Cv:</b><a href="https://drive.google.com/file/d/1CodHcwkkaz4jFHmuNYgDriWQyzAQCW6z/view" target="_blank" rel="noreferrer"><i className="fas fa-file-pdf"></i></a></span>
        </div>
  
        </div>
        
  
      </div>

      <div className="personalInfo">
        
        <div className="personalInfo-center">
            <div className="personalInfo-details">
          {/* single info */}
              <div className="info">
                <label htmlFor="name">Fullname:</label>
                  <h4>Odysseas kolas</h4>
              </div>
          {/* single info */}
            
          {/* single info */}
              <div className="info">
                <label htmlFor="ocuppation">Ocuppation:</label>
                  <h4>Electrician-enginner, web developer</h4>
              </div>
  
              {/* single info */}
              <div className="info">
                <label htmlFor="email">Email:</label>
                  <h4>odkolas@gmail.com</h4>
              </div>
  
            </div>
  
            <div className="personalInfo-img">
              <img src={profile} alt=""/>
            </div>
        </div>
      </div>
      </React.Fragment>
    )
}

export default Header
