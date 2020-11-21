import React, { useEffect, useState } from 'react';
import './Admin.css';
import CommonForm from '../CommonForm';
import axios from 'axios';
import {Link,useHistory} from 'react-router-dom';



const AboutAdmin = () => {

  const [about, setAbout]=useState('');
const [aboutData,setAboutData]=useState([]);
const [message, setMessage] = useState('');
const [messageCond, setMessageCond] = useState(false);
const history=useHistory();


useEffect(() => {
 
  let url=`https://ody-portfolio.herokuapp.com`;

  const fetchData= async ()=>{
   try {
     const res = await axios.get(`${url}/about`)
     setAboutData(res.data);
   } catch (err) {
     console.log(err);
   }
  }

  fetchData();



}, [])


// onchange
const onchangeAbout=(e)=>{
  setAbout(e.target.value)
}

// submit about
const handleSubmit=(e)=>{
e.preventDefault();

const postAbout={
  about
}

setAbout('');


let url=`https://ody-portfolio.herokuapp.com`;


axios.post(`${url}/about`, postAbout)
.then(res=>console.log('added'))
.catch(err=>console.log(err))



}

// delete about
const deleteAbout=(id)=>{

  let url=`https://ody-portfolio.herokuapp.com`;
axios.delete(`${url}/about/${id}`)
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
const aboutFiltered=aboutData.filter(item=>item._id !== id);
setAboutData(aboutFiltered)
}

// edit functionality








    return (
        <div className="same-component">
        <div className="same-form">
        <form  onSubmit={handleSubmit} >
              
                <h4> About component </h4>
                <label htmlFor="text">About</label>
                <textarea name="textarea" onChange={onchangeAbout} value={about}  cols="30" rows="3" />
              <button type="submit">Add item</button>
         
        </form>

       </div>
  
  
         <div className="same-item">
           {aboutData.map(item=>(
                <div className="about-info" key={item._id}>
                <div className="icons">
                      <Link to={`/edit/${item._id}`}> <i className="fas fa-edit"></i> </Link> 
                       <i className="fas fa-trash" onClick={()=>deleteAbout(item._id)}></i>  
                      </div>  
                     <p>
           {/* <span></span> */}
                       {/*  ello everyone, i am odysseas kolas. I am electrician engineer and i graduated from Chalkis Technologigal institute. My occupation is dealing with electrical studies, electrical automations, domestic  */}
                       {item.about}

                     </p>
                   
                     
                     </div>
           ))}

           <h3 className={setMessageCond?"new-delete item-delete-tab  ":" item-delete-tab "}>{message}</h3>
            </div>
           
       </div>
    )
}

export default AboutAdmin
