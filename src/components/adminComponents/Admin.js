import React from 'react';
import './Admin.css';
import {Link } from 'react-router-dom';
import AboutAdmin from './AboutAdmin';
import EducationAdmin from './EducationAdmin';
import ProjectsAdmin from './ProjectsAdmin';
import ExperienceAdmin from  './ExperienceAdmin';

const Admin = () => {
    return (
        <div className="main-container">
          <h2 className="title">Admin forms</h2>
          <div className="admin-center">
              
     {/* about component */}
     <h4 className="admin-title">About component</h4>
            <AboutAdmin />
     {/* end of about component */}
     <br/>
      <br/>
      <hr style={{border:"1px solid lightgrey"}} />
      <br/>
      
     {/* about component */}
     <h4 className="admin-title">Education component</h4>
            <EducationAdmin />
     {/* end of about component */}


     <br/>
      <br/>
      <hr style={{border:"1px solid lightgrey"}} />
      <br/>
      
     {/* AdminProjects component */}
     <h4 className="admin-title">Projects component</h4>
            <ProjectsAdmin />
     {/* end of AdminProjects component */}

     <br/>
      <br/>
      <hr style={{border:"1px solid lightgrey"}} />
      <br/>
      
     {/* AdminProjects component */}
     <h4 className="admin-title">Experience component</h4>
            <ExperienceAdmin />
     {/* end of AdminProjects component */}
     <br/>
    
</div>
 </div>
    )
}

export default Admin
