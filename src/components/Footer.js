import React, { useContext, useState } from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';
import {DataContext} from './context/GlobalContext';
import {scroller} from 'react-scroll';

const Footer = () => {


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










    return (
         
        <React.Fragment>
    <div className="main-title">
        <h2 className="title contact-title">Contact</h2>
    </div>
    <div className="main-contact">
        <div className="contact">
        <div className="contact-center">
              {/* links */}
            <div className="contact-center-links">
               <h3>Links</h3>  
            <div className="contact-links">
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

                <li className={isLogin?'':"adminLi"}><Link to={isLogin?"/admin":'y'}>{isLogin?<div className="admin">Admin</div>:null}</Link></li>      
    <li onClick={logOutSubmit}><Link to={isLogin?"/":"/login"}>{isLogin?"Logout":"Login"}</Link></li>
            </div>
            </div>
            {/* media */}
            <div className="contact-center-media">
                <h3>Media</h3>
                <div className="contact-media">
                <li><a href="#"><i className="fab fa-youtube-square"></i> Youtube</a></li>
                <li><a href="#"><i className="fab fa-linkedin"></i> Linkedin</a></li>
                <li><a href="#"><i className="fab fa-facebook-square"></i> Tweeter</a></li>
                </div>
            </div>
        </div>
      
        </div>
          <div className="footer">
    <p>Designed and created by codito {year()>2020?`2019-${year()}`:year()}</p>
        </div>
    </div>
        </React.Fragment>
      
    //   <i class="fab fa-facebook-square"></i>
    )
}

let year = ()=>{
    let year = new Date().getFullYear();
    return year
}

export default Footer
