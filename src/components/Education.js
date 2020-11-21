import React, { useContext } from 'react'
import './Education.css';
import {DataContext} from './context/GlobalContext';


const Education = () => {

    const state = useContext(DataContext);
    const [education]=state.education;
    console.log(education);

    return (
        <div className="main-container">
           <div className="education">
             <h2 className="title">Education</h2>  
             <div className="education-center">


    {education.map(item=>(
    
     <div className="single-education" key={item._id}>
        <p>
            {item.education}
        </p>
     </div>

   
    ))}

     {/* static data */}
    {/* <div className="single-education">
        <p>Bachelor as electrician engineer from Chalkis university</p>
    </div>
    
    <div className="single-education">
        <p>IELTS academic and profficiency in English language</p>
    </div>
    
    <div className="single-education">
        <p>Certificate in microsoft office and windows</p>
    </div>
    
    <div className="single-education">
        <p>Certificates in photovoltaic systems installation </p>
    </div>

    
    <div className="single-education">
        <p>Certificates at designing in Autocad </p>
    </div> */}
             </div>
            </div> 
        </div>
    )
}

export default Education
