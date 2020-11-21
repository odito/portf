import React, { useContext } from 'react'
import './Projects.css';
import logo from '../images/cable.jpg';
import arduino1 from '../images/Arduino1.jpg';
import panel from '../images/panel.jpg';
import tablet from '../images/tablet.jpg';
import {DataContext} from './context/GlobalContext';


const Projects = () => {

  const state = useContext(DataContext);
   const [projects]=state.projects;
  //  console.log(projects);


    return (
        <div className="main-container">
         <div className="projects">
           <h2 className="title">Projects</h2> 
           <div className="projects-center">
           
     {projects.map(item=>(
        <div className="single-project" key={item._id} >
          <div className="single-project-img">
          <img src={`./uploads/${item.image_url}`}  alt="..." />  
          </div>

          <div className="single-project-info">
           <h3>{item.title}</h3>
     <p>{item.description}</p>
          </div>
        </div>
     ))}

            










             {/* single project */}
             {/* <div className="single-project">
               <div className="single-project-img">
                 <img src={tablet} alt=""/>
               </div>
               <div className="single-project-info">
                 <h3>Smarthome project</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, non! Quod maiores laborum voluptate perspiciatis, cumque nostrum optio deserunt ex!</p>
               </div>
             </div> */}

            

                 {/* single project */}
                 {/* <div className="single-project">
               <div className="single-project-img">
                 <img src={tablet} alt=""/>
               </div>
               <div className="single-project-info">
                 <h3>Smarthome project</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, non! Quod maiores laborum voluptate perspiciatis, cumque nostrum optio deserunt ex!</p>
               </div>
             </div> */}

                 {/* single project */}
                 {/* <div className="single-project">
               <div className="single-project-img">
                 <img src={tablet} alt=""/>
               </div>
               <div className="single-project-info">
                 <h3>Smarthome project</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, non! Quod maiores laborum voluptate perspiciatis, cumque nostrum optio deserunt ex!</p>
               </div>
             </div> */}
           </div>
         </div>

        </div>
    )
}

export default Projects
