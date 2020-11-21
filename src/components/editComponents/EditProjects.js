import React, { useEffect, useState } from 'react';
import {Link,useHistory} from 'react-router-dom';
import axios from 'axios';

const EditProjects = (props) => {


    const [title, setTitle]= useState('');
    const [description, setDescription] = useState('');
    const [fileName, setFileName] = useState('');
    const [message, setMessage] = useState('');
     const [projectData, setProjectData] = useState([]);
    const history = useHistory();

// getting data
    useEffect(()=>{
        let url=`https://ody-portfolio.herokuapp.com`;
    axios.get(`${url}/project/${props.match.params.id}`)
    .then(res=>{
        setTitle(res.data.title);
        setDescription(res.data.description);
        setFileName(res.data.image_url);

    })
    .catch(err=>console.log(err))
    
    },[])


// image file
const onchangeFile = (e)=>{
    setFileName(e.target.files[0]);
  }

const onchangeTitle=(e)=>{
   setTitle(e.target.value)
}

const onchangeDescription=(e)=>{
 setDescription(e.target.value)
}



// submit data
const handleSubmit= (e) =>{
    e.preventDefault();
   
    const formData = new FormData();
  
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image_url", fileName);
  
    setTitle('');
    setDescription('');
    setFileName('');
   
    let url=`https://ody-portfolio.herokuapp.com`;
    axios.put(`${url}/project/${props.match.params.id}`, formData)
    .then(res=>{
        setMessage(res.data.msg)
        console.log(res.data.msg);
    })
    .catch(err=>console.log(err))
     
    setTimeout(()=>{
       history.push("/admin");
    },2000)
  
  }
  




    return (
        <div className="edit">
        <div className="main-container">
        <div className="same-component">
        <div className="same-form">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <h3 className="updated">{message}</h3>
                <h4> Projects component </h4>
                <label htmlFor="text">title</label>
               <input type="text" value={title} onChange={onchangeTitle} />

               <label htmlFor="text">Details</label>
               <textarea name="textarea" value={description} onChange={onchangeDescription}   cols="30" rows="3" />

               <label htmlFor="text">Image</label>
               <input type="file"   filename="image_url" className="form-control-file" 
           onChange={onchangeFile} />



               <div className="btns">
             <button  >Update item</button>
             <Link to="/admin"> <button className="cancel-btn" type="button">cancel</button></Link>
            
             </div>
         
        </form>

       </div>
  
  
       </div>
        </div>
    </div>
    )
}

export default EditProjects
