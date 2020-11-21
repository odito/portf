import React, { useEffect, useState } from 'react'
import'./Edit.css';
import {Link,useHistory} from 'react-router-dom';
import axios from 'axios';




const EditAbout = (props) => {
const [about, setAbout]=useState("");
const [message, setMessage] = useState('')
const history = useHistory();


// getting specific item by id
   useEffect(()=>{
    let url=`https://ody-portfolio.herokuapp.com`;
    axios.get(`${url}/about/${props.match.params.id}`)
    .then(res=>{

     setAbout(res.data.about)
    })
    .catch(err=>console.log(err))
   },[])


   const onchangeAbout=(e)=>{
     setAbout(e.target.value)
   }

    // update about
   const updateAbout= (e)=>{
    e.preventDefault();
    const aboutText={
        about
    }

    let url=`https://ody-portfolio.herokuapp.com`;
     axios.put(`${url}}/about/${props.match.params.id}`, aboutText)
     .then(res=>{
         setMessage(res.data.msg)
     })
     .catch(err=>console.log(err))
  
     setAbout('');
      
     setTimeout(()=>{
        history.push("/admin");
     },2000)
   }


    

    return (
    <div className="edit">
        <div className="main-container">
        <div className="same-component">
        <div className="same-form">
        <form onSubmit={updateAbout}>
           <h3 className="updated">{message}</h3>
                <h4> About component </h4>
                <label htmlFor="text">About</label>
                <textarea name="textarea" value={about}  onChange={onchangeAbout} cols="30" rows="3" />
             
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

export default EditAbout;
