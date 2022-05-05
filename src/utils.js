function formatStudentData(students) {

    const sortedStudents = _sortByStudentFirstName(students);
  
    const data = sortedStudents.map((student) => {
        // create average and name keys for each student
        const avg = student.grades.reduce((acc, curr) => acc + curr / student.grades.length, 0);
        const name = `${student.firstName} ${student.lastName}`.toUpperCase();
        return {...student, average: avg, fullName: name, tags: []}; 
    })

    return data;
  
}

function _sortByStudentFirstName(students) {

     // not mutating original array
     const sortedStudents = [...students];
     // sorting (in-place) by first name (sort can take two arguments to compare)
     return sortedStudents.sort((a,b)=> (a.firstName > b.firstName ? 1 : -1));
}
export {formatStudentData}