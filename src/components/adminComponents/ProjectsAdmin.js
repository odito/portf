import React, { useState, useEffect } from 'react'
import tablet from '../../images/tablet.jpg';
import axios from 'axios';
import {Link} from 'react-router-dom';

// ody-portfolio

const ProjectsAdmin = () => {

const [title, setTitle]= useState('');
const [description, setDescription] = useState('');
const [fileName, setFileName] = useState('');
const [message, setMessage] = useState('');
const [messageCond, setMessageCond] = useState(false);
 const [projectData, setProjectData] = useState([]);




// getting data
 useEffect(()=>{
  let url=`https://ody-portfolio.herokuapp.com`;
    const fetchData= async()=>{
      try {
        const res =await axios.get(`${url}/project`);
      setProjectData(res.data);
      console.log(res.data);
      } catch (err) {
        alert(err)
      }
    }

  fetchData();

},[])




// image file
const onchangeFile = (e)=>{
  setFileName(e.target.files[0]);
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
  setFileName('')
 
  let url=`https://ody-portfolio.herokuapp.com`;
  axios.post(`${url}/project/add`, formData)
  .then(res=>setMessage(res.data))
  .catch(err=>console.log(err))

}


// onchange title
const onchangeTitle=(e)=>{
 setTitle(e.target.value) 

}

// onchange description
const onchangeDescription=(e)=>{
  setDescription(e.target.value) 
 
 }


//  delete project by id
const deleteProject=(id)=>{
  let url=`https://ody-portfolio.herokuapp.com`;
axios.delete(`${url}/project/${id}`)
.then(res=>{
  setMessageCond(true);
  setMessage(res.data.msg)

  setTimeout(()=>{
    setMessage('')
    setMessageCond(false);
  },2000)

})
.catch(err=>console.log(err))


  // delete from client
  const filteredProject=projectData.filter(item=>item._id !==id);
  setProjectData(filteredProject);
}



    return (
        <div className="same-component">
        <div className="same-form">

        <form onSubmit={handleSubmit} encType="multipart/form-data">
               <h4> Projects component </h4>
                 
                 <label htmlFor="text">title</label>
                <input type="text" onChange={onchangeTitle} value={title} />
                <label htmlFor="text">Details</label>
                <textarea name="textarea" onChange={onchangeDescription} value={description}  cols="30" rows="3" />
                
                
                <label htmlFor="file">choose image</label>
           <input type="file"  filename="image_url" className="form-control-file" 
           onChange={onchangeFile} />
 
               <button type="submit" >Add item</button>
        </form>
       
       </div>
  
  
         <div className="same-item">
         <div className="about-info">
           
     {projectData.map(item=>(
               <div className="projects-admin" key={item._id}>
               <div className="icons">
                   <Link to={`/editProject/${item._id}`}>  <i className="fas fa-edit"></i></Link> 
                      <i className="fas fa-trash" onClick={()=>deleteProject(item._id)}></i>  
              </div> 
    
             {/* single project */}
         <div className="single-project">
             <div className="single-project-img">
             <img src={`./uploads/${item.image_url}`}  alt="..." />  
             </div>
             <div className="single-project-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
             </div>
         </div>

         <h3 className={setMessageCond?"new-delete item-delete-tab  ":" item-delete-tab "}>{message}</h3>
          </div>
     ))}
         
    
             
              
              </div>
            </div>
       </div>
    )
}

export default ProjectsAdmin
