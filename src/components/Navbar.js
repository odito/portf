import React,{useContext, useState} from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import {DataContext} from './context/GlobalContext';
import {scroller} from 'react-scroll';
import Logo from '../images/logo.jpg';

const Navbar = () => {


    const state = useContext(DataContext)
    const [isLogin, setIsLogin]= state.isLogin;
    console.log(isLogin);   


    const scrollToElement=(element)=>{
        scroller.scrollTo(element,{
            duration:800,
            delay:50,
            smooth:true,
            offset:-80
        });
      }



const [toggle, setToggle] =useState(false);

const actToggle= ()=>{
    setToggle(!toggle);
}

const logOutSubmit=()=>{
    localStorage.clear();
    setIsLogin(false)
}

const closeNavbar=()=>{
  if(toggle===true){
      setToggle(false);
  }
}


    return (
        <div className="nav-container">
        <nav>
            <div className="logoBtn">
            <Link to="/"  onClick={()=>{
                scrollToElement('Home')
                closeNavbar();
            }
                }><img src={Logo} alt=""/></Link>

            <div className="btn" onClick={actToggle}>
                <div className={toggle ?" bar1 animateBar":"bar bar1"}></div>
                <div className={toggle ?" bar2 animateBar":"bar bar2"}></div>
                <div className={toggle ?" bar3 animateBar":" bar3"}></div>
            </div>

            </div>
            {/* links */}
             <div className="links-container">
             <ul className={toggle ?"new-links links":"links"} onClick={closeNavbar}>
                <li  onClick={()=>scrollToElement('Home')
                }><Link to="/">Home</Link></li>
                <li  onClick={()=>scrollToElement('About')
                }><Link to="/">About</Link></li>
                <li  onClick={()=>scrollToElement('Education')
                }><Link to="/">Education</Link></li>
                <li  onClick={()=>scrollToElement('Experience')
                }><Link to="/">Experience</Link></li>
                <li  onClick={()=>scrollToElement('Projects')
                }><Link to="/">Projects</Link></li>
                <li  onClick={()=>scrollToElement('Contact')
                }><Link to="/">Contact</Link></li>
                {/* <li  ><Link to="/admin">Admin</Link></li> */}

                <li className={isLogin?'':"adminLi"}><Link to={isLogin?"/admin":'/'}>{isLogin?<div className="admin">Admin</div>:''}</Link></li>      
    <li onClick={logOutSubmit}><Link to={isLogin?"/":"/login"}>{isLogin?"Logout":"Login"}</Link></li>
    
            </ul>
             </div>
        </nav>
      </div>
    )
}

export default Navbar
