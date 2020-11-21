import React from 'react';
// import './Admin.css';

const CommonForm = (props) => {
    return (
     <form action="">
        <h4>{props.title} component </h4>
    <label htmlFor="email">{props.title}</label>
       <textarea name="textarea"  cols="30" rows="3" />

       <button type="submit">Add item</button>
         
     </form>
    )
}

export default CommonForm
