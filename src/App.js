import React, {useEffect, useState} from 'react';
import './App.css';

const URL = "https://api.hatchways.io/assessment/students"

function App() {

  const [studentData, setStudentData] = useState([]); 
  
  const getStudents = (URL) => {
     fetch(URL)
      .then(response => response.json())
      .then(data => setStudentData(data.students))
      .catch(error => alert('Something went wrong!'));
  }

  useEffect(() => {
    getStudents(URL);
  }, []); 

  
  return (
    <main>
    <ul>
     {
        studentData.map((student) => {
          return (
            <img src={student.pic} />
          )
        })
     }
     </ul>
    </main>
  );
}

export default App;

