import React, { useContext } from 'react'
import './Experience.css';
import {DataContext} from './context/GlobalContext';


const Experience = () => {
    const state = useContext(DataContext);
    const [experience] = state.experience;
    console.log(experience);



    return (
<div className="main-container">
    <h2 className="title">Experience</h2> 
    <div className="experience">
        <div className="experience-center">
             
      {experience.map(item=>(
       
       <div className="single-experience" key={item._id}>
                <p>{item.experience}</p>
         </div> 
      ))}



                {/* static experience */}
                {/* <div className="single-experience">
                   <p>Self employed electrician enginerr and web developer</p>
               </div> 

               
                 <div className="single-experience">
                   <p>Html css javascript developer at Eworx</p>
               </div> 

              
            <div className="single-experience">
                <p>Solar installer at GPMASTER Australia</p>
            </div> 

             
               <div className="single-experience">
                   <p>Electrician  at Constrat company</p>
               </div>

           
              <div className="single-experience">
                <p>Electrician engineer and solar installer at HeliosRes</p>
            </div>


          
            <div className="single-experience">
                <p>Seller at careffur market</p>
            </div>  */}

           

            
        </div>
    </div>
</div>
    )
}

export default Experience
