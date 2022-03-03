import React, { useState, useEffect } from “react” 
import SearchBar from “./components/SearchBar” 
import axios from “axios” 
import “./App.css”
 function App() 
 { const [students, setStudents] = useState(null) 
    const [searchTerm, setSearchTerm] = useState(“”) 
    useEffect(() => { const fetchStudents = async () => { const result = await axios("https://api.hatchways.io/assessment/students") 
    setStudents(result.data.students) }
     fetchStudents() }, []) 
     const convertStudentGrades = (grades) => grades.map((grade) => parseInt(grade)) 
     const getStudentAverage = (grades) => grades.reduce((sum, elem) => sum + elem, 0) / grades.length 
     const capitalizeFullName = (first, last) => ( <span>{`${first.toUpperCase()} ${last.toUpperCase()} }</span> )
      return ( 
          <div className=’container’>
           <input type=”text” 
           onChange={e => setSearchTerm(e.target.value)} 
           placeholder=”Search…” /> {students && students.filter(student => {
                if (searchTerm == “”) 
                { return student }
                 else if 
                 (student.firstName.includes(searchTerm.toLowerCase()) 
                 || student.lastName.includes(searchTerm.toLowerCase())) 
                 { return student } }).map(student => (
                      <div className=’row’ key={student.id}> 
                      <div className=’student-image’> 
                      <img src={student.pic} alt=” /> 
                      </div> <div className=’student-info’> 
                      <h1> 
                      <span>
                       {capitalizeFullName(student.firstName, student.lastName)} 
                       </span> </h1> <p>Email: {student.email}</p> 
                       <p>Company: {student.company}</p> <p>Skill: {student.skill}</p> 
                       <p> Average:{” “} {getStudentAverage(convertStudentGrades(student.grades))} </p> 
                       </div> 
                       </div> ))} 
                       </div> ) } 
    export default App