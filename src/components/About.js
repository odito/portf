import React, { useContext } from 'react';
import './About.css';
import {DataContext} from './context/GlobalContext';


const About = () => {

    const state = useContext(DataContext);
    const [about]= state.about;
    // console.log(about);

    return (
        <div className="main-container">
           <div className="about">
               <h2 className="title">About</h2>
         
    {about.map(item=>(
    
    <div className="about-info" key={item._id} >
         <p>  {item.about}</p>
    </div>
    ))}

        {/* <div className="about-info" key={about._id}>

            <p>
                <span>H</span>
                Hello everyone, i am odysseas kolas. I am electrician engineer and i graduated from Chalkis Technologigal institute. My occupation is dealing with electrical studies, electrical automations, domestic installations, smartHomes. Also i am a self taught web developer and i can create full stack websites and different kinds of applications. Generally i like reading,learning new things and then put all this things in action.Furthermore i like exercise because can help you be healthy!! 
            </p>
        </div> */}


     </div>
 </div>
    )
}

export default About;
