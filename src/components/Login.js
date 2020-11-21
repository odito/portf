import React, { useContext, useState } from 'react';
import './Login.css';
import {Link, useHistory,Redirect} from 'react-router-dom';
// import Register from './Register';
import {DataContext} from './context/GlobalContext';
import axios from 'axios';

const Login = () => {
   
  const history=useHistory();
  const state = useContext(DataContext)
  const [isLogin, setIsLogin]= state.isLogin;
  console.log(isLogin);
  const [user,setUser] = useState({ name:'',email:'',password:''
     
})
const [err,setErr]  =useState('')

const onChangeInput = e=>{
const {name, value} = e.target;
setUser({...user, [name]:value})
setErr('')
}


const loginSubmit = async(e)=>{
  e.preventDefault();
  let url=`https://ody-portfolio.herokuapp.com`;
  try {
      
    const res = await axios.post(`${url}/user/login`,{
      email:user.email,
      password:user.password
     
 
    })

  
    
    setUser({name:"",email:"",password:""});

   localStorage.setItem('tokenStore',res.data.token);
   setIsLogin(true)
 
  setErr(res.data.msg)
 

 
     history.push("/admin");
 
  

  } catch (err) {
     err.response.data.msg && setErr(err.response.data.msg) 
  }
 }










    return (
      <>
        <div className="login">
              <div className="main-container">
            <h3>Login for admin</h3>
              
            <div className="login-center">
            
              <form  onSubmit={loginSubmit}>
                  <p>{err}</p>
                  
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Import email..." name="email"  value={user.email} onChange={onChangeInput} required />

              <label htmlFor="password">Password</label>
              <input type="password" placeholder="Import password..." name="password" value={user.password} onChange={onChangeInput} required  />

           <div className="login-btn">
           <button type="submit">Login</button>
           <Link to="/" ><button type="submit">Back to home</button></Link>
         

           </div>
             </form>
            
              </div>
            </div>
      
        </div>
       {/* register */}
      
        </>
    )
}

export default Login;
