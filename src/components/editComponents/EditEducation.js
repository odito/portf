import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';

const EditEducation = (props) => {

    const [education, setEducation] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();

// getting specific item by id
useEffect(()=>{
    let url=`https://ody-portfolio.herokuapp.com`;
    axios.get(`${url}/education/${props.match.params.id}`)
    .then(res=>{

     setEducation(res.data.education)
    })
    .catch(err=>console.log(err))
   },[])


//    onchange
   const onchangeEducation=(e)=>{
    setEducation(e.target.value)
  }

//   update education
const  updateEducation=(e)=>{
    e.preventDefault();
    const educationText={
        education
    }
    
    let url=`https://ody-portfolio.herokuapp.com`;
     axios.put(`${url}/education/${props.match.params.id}`, educationText)
     .then(res=>{
         setMessage(res.data.msg)
     })
     .catch(err=>console.log(err))
  
     setEducation('');
      
     setTimeout(()=>{
        history.push("/admin");
     },2000)
}

    return (
       
             <div className="edit">
        <div className="main-container">
        <div className="same-component">
        <div className="same-form">
        <form  onSubmit={updateEducation}>
        <h3 className="updated">{message}</h3>
                <h4>Education component </h4>
                <label htmlFor="text">Education</label>
                <input type="text" value={education} onChange={onchangeEducation}  />
                <div className="btns">
             <button type="submit" >Update item</button>
             <Link to="/admin"> <button className="cancel-btn" type="button">cancel</button></Link>
            
             </div>
         
        </form>
       </div>
  
  
       </div>
        </div>
    </div> 
     
    )
}

export default EditEducation
