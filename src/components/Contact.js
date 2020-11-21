import React, { useState } from 'react';
import './Contact.css';
import BackImg from '../images/im4.jpg';
import axios from 'axios';
import load1 from '../images/load2.gif';


const Contact = () => {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const [banner, setBanner] = useState('');
const [bool, setBool] = useState(false);


// handle inputs
const handleNameChange = (e)=>{
  setName(e.target.value);
  
}

const handleEmailChange = (e)=>{
  setEmail(e.target.value);

}

const handleMessageChange = (e)=>{
  setMessage(e.target.value);
}


// form submit

const formSubmit=(e)=>{
e.preventDefault();

let data = {
  name:name,
  email:email,
  message:message

}

setBool(true);
let url=`https://ody-portfolio.herokuapp.com`;
// let url=`http://localhost:5000`;
axios.post(`${url}/contact`, data)
.then(res=>{
  setBanner(res.data.msg);
  setBool(false);
  setTimeout(()=>{
    setBanner('');
  },2000)



setName('');
setEmail('');
setMessage('');

}).catch(err=>console.log(err))




}


// reseting form
// const resetForm = ()=>{
//   setName('');
// setEmail('');
// setMessage('');
// }










    return (
         <div className="main-container">
        <div className="contactForm">
          <h2 className="title">Contact form</h2>  
          <div className="contactForm-center">
        <div className="contact_form" >
           
            <form onSubmit={formSubmit} >
                <p>{banner}</p>
                
            <label htmlFor="email">Name</label>
            <input type="text" value={name} placeholder="Import name..." name="name"onChange={handleNameChange}    required />

            <label htmlFor="email">Email</label>
            <input type="email" value={email} placeholder="Import email..." name="email"  onChange={handleEmailChange}  required  />

            <label htmlFor="email">Message</label>
            <textarea type="text" value={message} placeholder="Import contact reason..." name="message" onChange={handleMessageChange}   required  />

         <div className="send-btn">
    <button type="submit">send {bool ?<b className="load"><img src={load1} alt=""/></b>:''}</button>
      
       

         </div>
           </form>

             </div>
             
             {/* contact info */}
             <div className="contact-info">
               <h4>Send your message</h4>
                <img src={BackImg} alt=""/>
              </div>
          
            </div>
         </div> 
     </div>
    )
}

export default Contact
