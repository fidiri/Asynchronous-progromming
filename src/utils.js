function formatStudentData(students) {

    const sortedStudents = _sortByStudentFirstName(students);
  
    const data = sortedStudents.map((student) => {
        
        const avg = student.grades.reduce((acc, curr) => acc + curr / student.grades.length, 0);
        const name = `${student.firstName} ${student.lastName}`.toUpperCase();
        return {...student, average: avg, fullName: name, tags: []}; 
    })

    return data;
  
}

function _sortByStudentFirstName(students) {

    
     const sortedStudents = [...students];
     
     return sortedStudents.sort((a,b)=> (a.firstName > b.firstName ? 1 : -1));
}
export {formatStudentData}