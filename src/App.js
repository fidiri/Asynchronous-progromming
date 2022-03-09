import React, {useEffect, useState} from 'react';
import './App.css';
import TagsStudents from './components/TagsStudents';

const URL = "https://api.hatchways.io/assessment/students";

function App() {
  
  const [studentData, setStudentData] = useState([]); 
  const [searchName, setSearchsearchName] = useState("");
  const [value, setValue] = useState("");
  const getStudents = (URL) => {
     fetch(URL)
      .then(response => response.json())
      .then(data => setStudentData(data.students))
      .catch(error => alert('Something went wrong!'));
  }

  

function averageGrades(grades){
  let sum = 0;
    for (let i=0; i < grades.length; i++) {
        sum += parseInt(grades[i]);
    }
        return  sum / grades.length;

}

  useEffect(() => {
    getStudents(URL);
  }, []); 

  
/*const addTagtoStudent = (tag) => {
   const newstudentData = [...studentData, {tag}]  
   setStudentData(newstudentData);
};
*/


  return (
    <main>
    <ul>
    <input className="nameShearch" placeholder="Search by name" onChange={(e) => {setSearchsearchName(e.target.value)}}/>  

     {       
       studentData && 
       studentData
        
       .filter((studentName) => {
        return `${studentName.firstName} ${studentName.lastName}`.toUpperCase().includes(searchName.toUpperCase())})
       .map((student) => {
          return (
            <div  className="studentContainer">
              <img src = {student.pic} alt = "picture"/> 
              <div className='studentInfo'> 
                <h2 className='studentName'>
                  {student.firstName.toUpperCase()} {student.lastName.toUpperCase()}
                </h2> 
                <div>
                Email: {student.email} 
                </div>
                <div>
                Company: {student.company} 
                </div>
                <div>
                Skill: {student.skill} 
                </div>
                <div>
                Average: {averageGrades(student.grades)}%
                </div><br />  
                <TagsStudents />
                <div>
                
                </div>
              </div>
            </div>
            
             
           
          )
        })
        
     }
    
    
     </ul>
    </main>
     
  );
}

export default App;