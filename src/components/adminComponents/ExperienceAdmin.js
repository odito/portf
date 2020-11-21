import React, { useEffect, useState } from 'react';
import './Admin.css';
import axios from 'axios';
import {Link} from 'react-router-dom';




const ExperienceAdmin = () => {
  const [experience, setExperience] = useState('');
  const [experienceData, setExperienceData] = useState([]);
  const [message, setMessage] = useState('');
  const [messageCond, setMessageCond] = useState(false);


  useEffect(() => {
    let url=`https://ody-portfolio.herokuapp.com`;
    const fetchData= async ()=>{
     try {
       const res = await axios.get(`${url}/experience`)
       setExperienceData(res.data);
     } catch (err) {
       console.log(err);
     }
    }
  
    fetchData();
  
  }, [ experienceData])


  // onchange 
  const onchangeExperience = (e)=>{
   setExperience(e.target.value)
  }

  // submit experience

  const handleSubmit=(e)=>{
    e.preventDefault();
    
    const sendExperience={
      experience
    }
    let url=`https://ody-portfolio.herokuapp.com`;
    axios.post(`${url}/experience`, sendExperience)
    .then(res=>console.log(res.data.msg))
    .catch(err=>console.log(err))
    
    setExperience('')
    }


    // delete experience by id

const deleteExperience=(id)=>{
  let url=`https://ody-portfolio.herokuapp.com`;
  axios.delete(`${url}/experience/${id}`)
  .then(res=>{
    setMessageCond(true);
    setMessage(`${res.data.msg}`);
    setTimeout(()=>{
      setMessage('')
      setMessageCond(false);
    },2000)
   
  })
  // .then(res=>console.log(res.data.msg))
  .catch(err=>console.log(err))
  
  // delete form client
  const aboutFiltered=experienceData.filter(item=>item._id !== id);
  setExperienceData(aboutFiltered)
  }






    return (
        <div className="same-component">
        <div className="same-form">
        <form onSubmit={handleSubmit}>
                <h4>Experience component </h4>
                <label htmlFor="text">Experience</label>
                <input type="text" value={experience} onChange={onchangeExperience} />
              <button type="submit">Add item</button>
         
        </form>
       </div>
  
  
         <div className="same-item">
         <div className="about-info">
         
         {experienceData.map(item=>(
              <div className="same-admin" key={item._id}>
              <div className="icons">
                 <Link to={`/editExperience/${item._id}`}> <i className="fas fa-edit"></i> </Link>
                   <i className="fas fa-trash" onClick={()=>deleteExperience(item._id)}></i>  
              </div> 
            {/* single education */}
            <div className="single-experience">
               <p>{item.experience}</p>
             </div> 
             <h3  className={setMessageCond?"new-delete item-delete-tab  ":" new-delete item-delete-tab "}>{message}</h3>
           </div>
         ))}
              
              </div>
            </div>
       </div>
    )
}

export default ExperienceAdmin
