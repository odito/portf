import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

const Register = () => {

  const [user,setUser] = useState({ name:'',email:'',password:''
     
})
const [err,setErr]  =useState('')

const onChangeInput = e=>{
  const {name, value} = e.target;
  setUser({...user, [name]:value})
  setErr('')
  }
  
  
  const registerSubmit =async (e)=>{
    e.preventDefault();
    let url=`https://ody-portfolio.herokuapp.com`;
   
       try {
           const res = await axios.post(`${url}/user/register`,{
              username:user.name,
              email:user.email,
              password:user.password
   
           })
   
           setUser({name:"",email:"",password:""})
           setErr(res.data.msg)
           
       } catch (err) {
           err.response.data.msg && setErr(err.response.data.msg)
       }
   
   
   }



    return (
        <div className="login">
              <div className="main-container">
            <h3>Register </h3>
            <div className="login-center">
            
            <form  onSubmit={registerSubmit}>
                       <p>{err}</p>
  
                 <label htmlFor="email">Name</label>
              <input type="text" placeholder="Import name..." name="name"  value={user.name} onChange={onChangeInput} required />
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Import email..." name="email"  value={user.email} onChange={onChangeInput} required />

              <label htmlFor="password">Password</label>
              <input type="password" placeholder="Import password..." name="password" value={user.password} onChange={onChangeInput} required  />

           <div className="login-btn">
           <button type="submit">Register</button>
           <Link to="/" ><button type="submit">Back to home</button></Link>
         

           </div>
             </form>
            
              </div>
            </div>
      
        </div>
    )
}

export default Register
