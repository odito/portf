import axios from 'axios';
import React,{createContext, useState,useEffect} from 'react';


export const DataContext = createContext();

export const DataProvider = ({children})=>{
const [isLogin, setIsLogin] = useState(false);
const [about, setAbout] = useState([]);
const [education, setEducation] = useState([]);
const [projects, setProjects] = useState([]);
const [experience, setExperience]= useState([]);


const checkLogin= async ()=>{
    
    let url=`https://ody-portfolio.herokuapp.com`;

const token = localStorage.getItem('tokenStore');
 if(token){
     const verified = await axios.get(`${url}/user/verify`, {
         headers:
        {Authorization:token}
    })
    console.log(verified);

    setIsLogin(verified.data)
    if(verified.data===false) return localStorage.clear();
 }else{
     setIsLogin(false)
 }


}

useEffect(() => {
    let unmounted = false;
    try {

        if(!unmounted){
            checkLogin();
        }
      
    } catch (error) {
        
    }
    return () => { unmounted = true };
  
}, [])




// fetcing data from server
const fetchData= async ()=>{
    let url=`https://ody-portfolio.herokuapp.com`;

    // ....for fetching about......
    const res1 = await axios.get(`${url}/about`);
    setAbout(res1.data);
    // console.log(res1.data);

    // ....for fetching education......
    const res2=await axios.get(`${url}/education`);
    setEducation(res2.data);
    // console.log(res2.data);

    // ....for fetching experience......
    const res4 = await axios.get(`${url}/project`);
    setProjects(res4.data);
    // console.log(res4.data);

    // ....for fetching experience......
    const res3=await axios.get(`${url}/experience`);
    setExperience(res3.data)
    // console.log(res3.data);

    // const allData=[...res1.data,...res2.data,...res3.data,...res4.data]

    // setAll(allData)
    // console.log(allData);
    
    }





useEffect(()=>{
   


   try {

    // data fetching function
   
        fetchData();
    
  

   } catch (err) {
  
        console.log(err);  
    
   }
  


},[])



const state = {
    projects:[projects,setProjects],
    about:[about, setAbout],
    education:[education, setEducation],
    experience:[experience, setExperience],
    isLogin:[isLogin, setIsLogin]
    
   
}

return(
    <DataContext.Provider value={state}>
        {children}
    </DataContext.Provider>
)





}