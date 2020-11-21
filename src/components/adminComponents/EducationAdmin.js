import React, { useState, useEffect } from 'react';
import './Admin.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

const EducationAdmin = () => {

const [education, setEducation] = useState("");
      const [incData, setIncData] = useState([])
      const [message, setMessage] = useState('');
      const [messageCond, setMessageCond] = useState(false);


useEffect(()=>{
  let url=`https://ody-portfolio.herokuapp.com`;
  const fetchData=async()=>{
    const res = await axios.get(`${url}/education`);
     setIncData(res.data)
    }
 fetchData();

},[])




// oncahnge
const onchangeEducation = (e)=>{
  setEducation(e.target.value);
}

// submit education
const handleSubmit=(e)=>{
e.preventDefault();

const sendEducation={
  education
}

let url=`https://ody-portfolio.herokuapp.com`;

axios.post(`${url}/education`, sendEducation)
.then(res=>console.log(res.data.msg))
.catch(err=>console.log(err))

setEducation('')
}


// delete education by id

const deleteEducation=(id)=>{

  let url=`https://ody-portfolio.herokuapp.com`;

  axios.delete(`${url}/education/${id}`)
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
  const aboutFiltered=incData.filter(item=>item._id !== id);
  setIncData(aboutFiltered)
  }






    return (
        <div className="same-component">
        <div className="same-form">
        <form onSubmit={handleSubmit} >
                <h4>Education component </h4>
                <label htmlFor="text">Education</label>
                <input type="text" value={education} onChange={onchangeEducation} />
              <button type="submit">Add item</button>
         
        </form>
       </div>
  
  
         <div className="same-item">
         <div className="about-info">
         
                  {/* single education */}
             {incData.map((item)=>(
                   <div className="same-admin" key={item._id}>

                   <div className="icons">
                     <Link to={`/editEducation/${item._id}`}>  <i className="fas fa-edit"></i> </Link>
                        <i className="fas fa-trash" onClick={()=>deleteEducation(item._id)}></i>  
                   </div> 
                  <div className="single-education">
                      <p>{item.education}</p>
                  </div>
   
                  <h3  className={setMessageCond?"new-delete item-delete-tab  ":" new-delete item-delete-tab "}>{message}</h3>
                </div>
             ))}

              </div>
            </div>
       </div>
    )
}

export default EducationAdmin
