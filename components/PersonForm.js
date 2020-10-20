import React from 'react';

 const PersonForm = ({ onFormSubmit, name, onNameChange, number, onNumberChange }) => {
   return (
     <>
       <form onSubmit={onFormSubmit}>
         <div>
           Name: <input value={name} onChange={onNameChange}/>
         </div>
         <div>
           Number: <input value={number} onChange={onNumberChange}/>
         </div>
         <div>
           <button type="submit">add</button>
         </div>
       </form>
     </>
   )
 }

 export default PersonForm