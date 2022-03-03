import React, {useEffect, useState} from 'react';
import {formatStudentData} from './utils'
import './App.css';

const URL = "https://api.hatchways.io/assessment/students";

function App() {

  const [studentData, setStudentData] = useState([]); 

  const getStudents = (URL) => {
     fetch(URL)
      .then(response => response.json())
      .then(data => formatStudentData(data.students))
      .then(formatted => setStudentData(formatted))
      .catch(error => alert('Something went wrong!'));
  }

  useEffect(() => {
    getStudents(URL);
  }, []); 

  
  return (
    <main>
    <ul>
     {
       studentData && 
        studentData.map((student) => {
          return (
            <article>
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
  );
}

export default App;

