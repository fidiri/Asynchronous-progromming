import React from "react";


  const Student = ({student, onAddTag}) => {
    
      
    const {id} = student
    

  return (
    <input className= "tagInput" type="text" placeholder='Add tag' onKeyDown={(e)=> {
        if(e.key === 'Enter'){
            onAddTag(e.target.value, id)
            e.target.value = ''
        }
    }}></input>    
  );
}

export default Student;