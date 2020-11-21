import React, { useState,useEffect } from 'react';
import {Link,useHistory} from 'react-router-dom';
import axios from 'axios';



const EditExperience = (props) => {

    const [experience, setExperience] = useState('');
    const [message, setMessage] = useState('');
    const history = useHistory();



// getting specific item by id
useEffect(()=>{
    let url=`https://ody-portfolio.herokuapp.com`;
    axios.get(`${url}/experience/${props.match.params.id}`)
    .then(res=>{

     setExperience(res.data.experience)
    })
    .catch(err=>console.log(err))
   },[])


   //    onchange
   const onchangeExperience=(e)=>{
    setExperience(e.target.value)
  }

  //   update education
const  updateExperience=(e)=>{
    e.preventDefault();
    const experienceText={
        experience
    }
     
    let url=`https://ody-portfolio.herokuapp.com`;
     axios.put(`${url}/experience/${props.match.params.id}`, experienceText)
     .then(res=>{
         setMessage(res.data.msg)
     })
     .catch(err=>console.log(err))
  
     setExperience('');
      
     setTimeout(()=>{
        history.push("/admin");
     },2000)
}






    return (
        <div className="edit">
        <div className="main-container">
        <div className="same-component">
        <div className="same-form">
        <form onSubmit={updateExperience} >
    <h3 className="updated">{message}</h3>
                <h4>Education component </h4>
                <label htmlFor="text">Education</label>
                <input type="text" value={experience} onChange={onchangeExperience}  />
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

export default EditExperience
