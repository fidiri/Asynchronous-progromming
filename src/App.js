import React, {useEffect, useState} from 'react';
import {formatStudentData} from './utils'
import './App.css';

const URL = "https://api.hatchways.io/assessment/students";

function App() {

  const [studentData, setStudentData] = useState([]); 
  const [filteredStudentData, setFilteredStudentData] = useState([]);
  const [nameFilterInput, setNameFilterInput] = useState("");
  
  const getStudents = (URL) => {
     fetch(URL)
      .then(response => response.json())
      .then(data => formatStudentData(data.students))
      .then(formatted => setStudentData(formatted))
      .then(formatted => setFilteredStudentData(studentData))
      .catch(error => alert('Something went wrong!'));
  }

  const filterContent = (nameInput) => {
     let filteredContent = [];

      if (nameInput.length) {
          studentData.forEach(student => {
            if (student.fullName.toLowerCase().includes(nameInput.toLowerCase())) {
              filteredContent.push(student);
            }
          });
      }

      
       if (nameInput.length === 0) {
        setFilteredStudentData(studentData);
        return; 
      }
    
     setFilteredStudentData(filteredContent);
    
  }

  const handleNameFilterInput = (e) => {
    setNameFilterInput(e.target.value);
    filterContent(e.target.value); 
  }
  
  useEffect(() => {
    getStudents(URL);
  }, []); 
  
  return (
     <>
     <header>
     <input
           placeholder={`Search by name`}
           value={nameFilterInput}
           onChange={e => handleNameFilterInput(e)}
         />
     </header>
    <main>
    <ul>
     {
       filteredStudentData && 
        filteredStudentData.map((student, index) => {
          return (
            <article key = {index}>
               <img 
                  src = {student.pic} 
                  alt = {student.fullName}
                  loading="lazy"
               />
            <h1>{student.fullName}</h1>
            <div>
               <div>Email: {student.email}</div>
               <div>Company: {student.company}</div>
               <div>Skill: {student.skill}</div>
               <div>Average: {student.average}%</div>
            </div>
        </article>
          )
        })
     }
     </ul>
    </main>
     </>
  );
}

export default App;